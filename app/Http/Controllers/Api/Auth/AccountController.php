<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Requests\Api\Auth\UserUpdateRequest;
use App\Services\Api\UserService;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class AccountController extends Controller
{
    /**
     * Get the authenticated User.
     *
     * @param UserService $userService
     * @return JsonResponse
     */
    public function getUser(UserService $userService): JsonResponse
    {
        return $userService->getUser();
    }

    /**
     * Update user information
     *
     * @param UserUpdateRequest $request
     * @param UserService $userService
     * @return JsonResponse
     */
    public function updateUser(UserUpdateRequest $request, UserService $userService): JsonResponse
    {
        return $userService->updateUser($request->validated());
    }
}
