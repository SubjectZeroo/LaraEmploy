<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use App\Http\Resources\DepartmentResource;
use App\Http\Resources\DepartmentSingleResource;
use App\Models\Department;
use App\Models\State;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $sortField = request('sort_field', 'created_at');
        // if (!in_array($sortField, ['name'])) {
        //     $sortField = 'created_at';
        // }
        // $sortDirection = request('sort_direction', 'desc');
        // if (!in_array($sortDirection, ['asc', 'desc'])) {
        //     $sortDirection = 'desc';
        // }

        $paginate = request('paginate', 10);
        $search_term = request('q', '');

        $departments = Department::search(trim($search_term))
            ->paginate($paginate);
        return DepartmentResource::collection($departments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDepartmentRequest $request)
    {
        $department = Department::create($request->validated());
        return ['message' => 'Department Created!'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department)
    {
        return new DepartmentSingleResource($department);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDepartmentRequest $request, Department  $department)
    {
        $department->update($request->validated());
        return ['message' => 'Department Updated!'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department)
    {
        $department->delete();
        return response()->json('Deleted');
    }
}
