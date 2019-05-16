<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class PasswordReset extends Model
{
    protected $fillable = [
        'email', 'token', 'created_at'
    ];

    protected $table = 'password_resets';

    public $primaryKey = 'email';
    public $timestamps = false;
    public $valid = true;
    public $incrementing = false;

    /**
     * Generate token for password resetting
     *
     * @param string $email
     * @return PasswordReset
     */
    public function generateToken(string $email): PasswordReset
    {
        return self::updateOrCreate(
            [
                'email' => $email
            ],
            [
                'email' => $email,
                'token' => Str::random(60),
                'created_at' => Carbon::now()
            ]
        );
    }

    /**
     * Check if token is valid
     *
     * @param string $token
     * @return PasswordReset
     */
    public function checkToken(string $token): PasswordReset
    {
        $passwordReset = self::where('token', $token)->first();

        if (!$passwordReset) {
            $this->valid = false;
            return $this;
        }

        if (Carbon::parse($passwordReset->created_at)->addMinutes(720)->isPast()) {
            $passwordReset->delete();
            $this->valid = false;
        }

        return $this;
    }

    /**
     * Get user email using token
     *
     * @param string $token
     * @return string
     */
    public function getEmailByToken(string $token): ?string
    {
        $instance = self::where('token', $token)->first();

        if (!$instance) {
            return null;
        }

        return $instance->email;
    }

    /**
     * Delete password reset instance
     *
     * @param string $email
     */
    public function deleteByEmail(string $email): void
    {
        $instances = self::where('email', $email)->get();

        foreach ($instances as $instance) {
            $instance->delete();
        }
    }
}
