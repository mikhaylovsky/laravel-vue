<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Requests\Api\Auth\ConfirmPasswordRequest;
use App\Http\Requests\Api\Auth\ResetPasswordRequest;
use App\Services\Api\Auth\PasswordService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ForgottenPasswordController extends Controller
{
    /**
     * Send reset password link for a user
     *
     * @param ResetPasswordRequest $request
     * @param PasswordService $passwordService
     * @return JsonResponse
     */
    public function reset(ResetPasswordRequest $request, PasswordService $passwordService): JsonResponse
    {
        return $passwordService->resetPassword($request->email);
    }

    /**
     * Change password for a user
     *
     * @param ConfirmPasswordRequest $request
     * @param PasswordService $passwordService
     * @return JsonResponse
     */
    public function confirm(ConfirmPasswordRequest $request, PasswordService $passwordService): JsonResponse
    {
        return $passwordService->confirmPassword($request->password, $request->token);
    }

    /**
     * Check if the token is provided and valid
     *
     * @param Request $request
     * @param PasswordService $passwordService
     * @return JsonResponse
     */
    public function check(Request $request, PasswordService $passwordService): JsonResponse
    {
        if ($passwordService->checkToken($request->token)) {
            return response()->json(['status' => 'Success']);
        }

        return response()->json(['error' => 'Token not found or invalid!'], JsonResponse::HTTP_UNAUTHORIZED);
    }
}
