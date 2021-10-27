<?php

use App\Http\Controllers\Backend\ChangePasswordController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();



Route::middleware('auth')->group(function() {

    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::resource('/employee-managament', EmployeeManagamentController::class)->names('employe-managament');
    Route::resource('/countries', CountryController::class)->names('countries');
    Route::resource('/states', StateController::class)->names('states');
    Route::resource('/deparments', DepartmentController::class)->names('deparments');
    Route::resource('/cities', CityController::class)->names('cities');
    Route::resource('/users', UserController::class)->names('users');
    Route::post('users/{user}/change-password', [ChangePasswordController::class, 'change_password'])->name('users.change.password');
});
