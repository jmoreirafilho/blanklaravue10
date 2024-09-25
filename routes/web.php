<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{url}', function () {
    return view('welcome');
});

use App\Http\Controllers\MenuController;

Route::controller(MenuController::class)->group(function () {
    Route::post('/menu', 'menu');
});