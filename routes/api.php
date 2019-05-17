<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'namespace' => 'Api'
], function() {

    Route::group([
        'prefix' => 'auth',
        'namespace' => 'Auth'
    ], function () {
        Route::post('register', 'AuthController@register')->name('register');
        Route::post('login', 'AuthController@login')->name('login');
        Route::post('password/reset/request', 'ForgottenPasswordController@reset')->name('password-reset-request');
        Route::post('password/reset/check', 'ForgottenPasswordController@check')->name('password-reset-check');
        Route::post('password/reset/confirm', 'ForgottenPasswordController@confirm')->name('password-reset-confirm');
    });

    Route::group([
        'prefix' => 'auth',
        'middleware' => 'auth:api',
        'namespace' => 'Auth'
    ], function () {
        Route::post('logout', 'AuthController@logout')->name('logout');
        Route::post('refresh', 'AuthController@refresh')->name('refresh');

        Route::get('my-account', 'AccountController@getUser')->name('my-account');
        Route::put('my-account', 'AccountController@updateUser')->name('update-account');
    });
});
