<?php

namespace App\Services\Api\Chat;

use App\Models\Chat\Channel;
use Illuminate\Http\JsonResponse;

class ChannelService
{
    /**
     * @var Channel
     */
    protected $channel;

    /**
     * ChannelService constructor.
     *
     * @param Channel $channel
     */
    public function __construct(Channel $channel)
    {
        $this->channel = $channel;
    }

    /**
     * @return JsonResponse
     */
    public function all(): JsonResponse
    {
        return response()->json(['channels' => $this->channel->all()]);
    }
}