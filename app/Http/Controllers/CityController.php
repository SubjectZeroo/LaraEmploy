<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCityRequest;
use App\Http\Requests\UpdateCityRequest;
use App\Http\Resources\CityResource;
use App\Http\Resources\CitySingleResource;
use App\Models\City;
use App\Models\State;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $sortField = request('sort_field', 'created_at');
        // if (!in_array($sortField, ['state_id', 'name'])) {
        //     $sortField = 'created_at';
        // }
        // $sortDirection = request('sort_direction', 'desc');
        // if (!in_array($sortDirection, ['asc', 'desc'])) {
        //     $sortDirection = 'desc';
        // }
        $paginate = request('paginate', 10);
        $search_term = request('q', '');

        $cities = City::with(['state'])
            ->search(trim($search_term))
            ->paginate($paginate);

        return CityResource::collection($cities);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCityRequest $request)
    {
        $cities = City::create($request->validated());
        return ['message' => 'City Created!'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(City $city)
    {
        return new CitySingleResource($city);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCityRequest $request, City $city)
    {
        $city->update($request->validated());
        return ['message' => 'City Updated!'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(City $city)
    {
        $city->delete();
        return response()->json('Deleted');
    }
}
