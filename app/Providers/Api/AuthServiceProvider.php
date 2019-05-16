<?php

namespace App\Providers\Api;

use App\Services\Api\Auth\AuthService;
use App\Services\Api\Auth\PasswordService;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('AuthService', AuthService::class);
        $this->app->bind('PasswordService', PasswordService::class);
}

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
