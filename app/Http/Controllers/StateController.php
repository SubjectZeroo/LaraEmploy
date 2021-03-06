<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStateRequest;
use App\Http\Requests\UpdateStateRequest;
use App\Http\Resources\StateResource;
use App\Http\Resources\StateSingleResource;
use App\Models\Country;
use App\Models\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $sortField = request('sort_field', 'created_at');
        // if (!in_array($sortField, ['country', 'name'])) {
        //     $sortField = 'created_at';
        // }
        // $sortDirection = request('sort_direction', 'desc');
        // if (!in_array($sortDirection, ['asc', 'desc'])) {
        //     $sortDirection = 'desc';
        // }

        $paginate = request('paginate', 10);
        $search_term = request('q', '');

        $states = State::with(['country'])
            ->search(trim($search_term))
            ->paginate($paginate);

        return StateResource::collection($states);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreStateRequest $request)
    {
        $state = State::create($request->validated());
        return ['message' => 'State Created!'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(State $state)
    {
        return new StateSingleResource($state);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateStateRequest $request, State $state)
    {
        $state->update($request->validated());
        return ['message' => 'State Updated!'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(State $state)
    {
        $state->delete();
        return response()->json('Deleted');
    }
}
