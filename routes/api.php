<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/auth/login', [AuthController::class,'Login']);
Route::post('/auth/register', [AuthController::class,'Register']);

Route::group(['middleware' => ['auth:api']], function () {
    Route::post('/auth/check', [AuthController::class,'Check']);
});
