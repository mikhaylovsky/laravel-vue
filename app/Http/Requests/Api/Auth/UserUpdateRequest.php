<?php

namespace App\Http\Requests\Api\Auth;

use App\Http\Requests\Api\ApiRequest;
use Illuminate\Validation\Rule;

class UserUpdateRequest extends ApiRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        $id = $this->request->get('id') ?? null;

        return [
            'id' => 'required|integer|exists:users,id',
            'name' => 'required|string|max:255',
            'password' => 'required_if:password_change,true|nullable|string|min:8|confirmed',
            'old_password' => 'required_if:password_change,true|nullable|string|min:8',
            'password_change' => 'boolean|nullable',
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users')->ignore($id),
            ]
        ];
    }

    public function messages()
    {
        return [
            'required_if' => 'The :attribute field is required.',
        ];
    }
}
