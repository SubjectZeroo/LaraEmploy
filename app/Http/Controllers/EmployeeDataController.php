<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Department;
use App\Models\State;
use Illuminate\Http\Request;

class EmployeeDataController extends Controller
{
    public function countries()
    {
        $countries = Country::all();

        return response()->json($countries);
    }

    public function allStates()
    {
        $states = State::all();

        return response()->json($states);
    }

    public function states(Country $country)
    {

        return response()->json($country->states);
    }

    public function cities(State $state)
    {

        return response()->json($state->cities);
    }

    public function departments()
    {

        $departments = Department::all();
        return response()->json($departments);
    }
}
