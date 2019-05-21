<?php

namespace App\Http\Controllers\Api\Chat;

use App\Services\Api\Chat\ChannelService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ChannelController extends Controller
{
    /**
     * Get all opened channels
     *
     * @param ChannelService $channelService
     * @return JsonResponse
     */
    public function getAll(ChannelService $channelService): JsonResponse
    {
        return $channelService->all();
    }

    public function create()
    {

    }

    public function delete()
    {

    }
}
