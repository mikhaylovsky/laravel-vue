<?php

namespace App\Services\Api\Auth;

use App\Models\PasswordReset;
use App\Models\User;
use App\Notifications\PasswordResetNotification;
use App\Notifications\PasswordResetSuccessNotification;
use App\Services\Api\EmailService;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use PharIo\Manifest\Email;

class PasswordService
{
    /**
     * @var EmailService
     */
    protected $emailService;

    /**
     * @var PasswordReset
     */
    protected $passwordResetModel;

    /**
     * @var UrlGenerator
     */
    protected $passwordResetUrl;

    /**
     * @var User
     */
    protected $user;

    /**
     * PasswordService constructor.
     *
     * @param EmailService $emailService
     * @param User $user
     */
    public function __construct(EmailService $emailService, User $user)
    {
        $this->emailService = $emailService;
        $this->passwordResetModel = new PasswordReset();
        $this->passwordResetUrl = url('password-reset/check');
        $this->user = $user;
    }

    /**
     * Generate token and send email for a user
     *
     * @param string $email
     * @return JsonResponse
     */
    public function resetPassword(string $email): JsonResponse
    {
        $uid = ($this->passwordResetModel->generateToken($email))->token;

        if ($uid) {
            $route = "{$this->passwordResetUrl}/{$uid}";
            $this->emailService->notify($email, (new PasswordResetNotification($uid, $route)));

            return response()->json(['message' => 'We have e-mailed your password reset link!']);
        }

        return response()->json(['error' => 'An error occurred while sending the email!']);
    }

    /**
     * Check if resetting password token valid
     *
     * @param string $uid
     * @return bool
     */
    public function checkToken(string $uid): bool
    {
        if ($this->passwordResetModel->checkToken($uid)->valid) {
            return true;
        }

        return false;
    }

    /**
     * Update password for a user
     *
     * @param string $password
     * @param string $token
     * @return JsonResponse
     */
    public function confirmPassword(string $password, string $token): JsonResponse
    {
        $email = $this->passwordResetModel->getEmailByToken($token);
        $user = $this->user->where('email', $email)->first();

        if (is_null($email) || !$user) {
            return response()->json(['error' => 'User not found!']);
        }

        $user->password = Hash::make($password);

        if ($user->save()) {
            $this->passwordResetModel->deleteByEmail($email);
            $this->emailService->notify($email, (new PasswordResetSuccessNotification()));
            return response()->json(['success' => 'Password updated!']);
        }

        return response()->json(['error' => 'Can not change password!']);
    }
}
