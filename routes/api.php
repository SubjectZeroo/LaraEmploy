<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EmployeeDataController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/employees/countries', [EmployeeDataController::class, 'countries']);
Route::get('/employees/states', [EmployeeDataController::class, 'allStates']);
Route::get('/employees/{country}/states', [EmployeeDataController::class, 'states']);
Route::get('/employees/departments', [EmployeeDataController::class, 'departments']);
Route::get('/employees/{state}/cities', [EmployeeDataController::class, 'cities']);

// Route::get('/employees', [EmployeeController::class, 'index']);
// Route::post('/employees', [EmployeeController::class, 'store']);
// Route::delete('/employees/{employee}', [EmployeeController::class, 'destroy']);

Route::apiResource('employees', EmployeeController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('countries', CountryController::class);
Route::apiResource('states', StateController::class);
Route::apiResource('cities', CityController::class);
Route::apiResource('departments', DepartmentController::class);
