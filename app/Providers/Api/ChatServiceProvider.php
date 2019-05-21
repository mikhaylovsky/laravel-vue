<?php

namespace App\Providers\Api;

use App\Services\Api\Chat\ChannelService;
use App\Services\Api\Chat\MessageService;
use Illuminate\Support\ServiceProvider;

class ChatServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('ChannelService', ChannelService::class);
        $this->app->bind('MessageService', MessageService::class);
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
