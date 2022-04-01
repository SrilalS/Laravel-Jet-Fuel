<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('App');
});

Route::get('/auth', function () {
    return view('App');
});


