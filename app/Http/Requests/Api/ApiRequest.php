<?php

namespace App\Http\Requests\Api;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;

abstract class ApiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Check header accept Application/Json
     *
     * @return bool
     */
    public function wantsJson(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    abstract public function rules(): array;

    /**
     * Generate error messages to json response
     * if method wantsJson set to TRUE
     *
     * @param Validator $validator
     */
    protected function failedValidation(Validator $validator)
    {
        if ($this->wantsJson()) {
            throw new HttpResponseException(
                response()->json(['errors' => $validator->errors()], JsonResponse::HTTP_BAD_REQUEST)
            );
        }
    }
}
