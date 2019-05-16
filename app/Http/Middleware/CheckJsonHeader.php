<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;

class CheckJsonHeader
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$request->isJson()) {
            return response()->json(['error' => 'Content/Type: application/json header not found!'], JsonResponse::HTTP_NOT_ACCEPTABLE);
        }

        return $next($request);
    }
}
