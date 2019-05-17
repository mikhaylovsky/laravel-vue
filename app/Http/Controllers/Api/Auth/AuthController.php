<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Requests\Api\Auth\UserLoginRequest;
use App\Http\Requests\Api\Auth\UserRegisterRequest;
use App\Services\Api\Auth\AuthService;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    /**
     * Registering a user
     *
     * @param UserRegisterRequest $request
     * @param AuthService $authService
     * @return JsonResponse
     */
    public function register(UserRegisterRequest $request, AuthService $authService): JsonResponse
    {
        return $authService->register($request);
    }

    /**
     * User login
     *
     * @param UserLoginRequest $request
     * @param AuthService $authService
     * @return JsonResponse
     */
    public function login(UserLoginRequest $request, AuthService $authService): JsonResponse
    {
        return $authService->login($request);
    }

    /**
     * Refresh a token.
     *
     * @param AuthService $authService
     * @return JsonResponse
     */
    public function refresh(AuthService $authService): JsonResponse
    {
        return $authService->refresh();
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @param AuthService $authService
     * @return JsonResponse
     */
    public function logout(AuthService $authService): JsonResponse
    {
        return $authService->logout();
    }
}
