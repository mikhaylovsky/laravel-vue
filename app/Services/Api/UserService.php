<?php


namespace App\Services\Api;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class UserService
{
    /**
     * @var User
     */
    private $user;

    /**
     * UserService constructor.
     *
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get current authenticated user
     *
     * @return JsonResponse
     */
    public function getUser(): JsonResponse
    {
        return response()->json(auth()->user());
    }

    /**
     * Update user information
     *
     * @param array $data
     * @return JsonResponse
     */
    public function updateUser(array $data): JsonResponse
    {
        try {
            $user = $this->user->findOrFail($data['id']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'No user found!'], JsonResponse::HTTP_BAD_REQUEST);
        }

        if ($data['password_change']) {
            if (!Hash::check($data['old_password'], $user->password)) {
                return response()->json(['errors' => ['old_password' => ['Password does not match!']]], JsonResponse::HTTP_BAD_REQUEST);
            }
            $user->password = $data['password'];
        }

        $user->fill(array_filter($data));

        if ($user->save()) {
            return response()->json(['success' => 'Personal information updated!', 'user' => $user->toArray()]);
        }

        return response()->json(['error' => 'Could not save information!']);
    }
}