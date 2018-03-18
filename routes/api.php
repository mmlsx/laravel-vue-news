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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// 路由配置 接口路由
Route::get('/news', 'NewsController@index');
Route::get('/news/lists', 'NewsController@getList');
Route::get('/news/detail/{id}', 'NewsController@show');
