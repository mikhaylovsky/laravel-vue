<?php

namespace App\Services\Api;

//use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Notification;

class EmailService
{
    /**
     * @param $to
     * @param $template
     */
    public function notify($to, $template): void
    {
        if (!is_array($to)) {
            $to = [$to];
        }

        $notification = Notification::route('mail', array_shift($to));

        if (count($to)) {
            foreach ($to as $route) {
                $notification->route('mail', $route);
            }
        }

        $notification->notify($template);
    }
}
