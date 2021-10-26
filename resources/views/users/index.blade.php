@extends('layouts.app')
@section('content')
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Registered Users</h1>
    </div>
    <div>
        @if (session()->has('message'))
            <div class="alert alert-success">
                {{ session('message') }}
            </div>
        @endif
    </div>
    <div class="card">
        <div class="card-header">
            <a href="{{ route('users.create') }}" class="float-right btn btn-primary">Create User</a>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      @foreach ($users as $user)
                          <tr>
                              <th>{{ $user->id }}</th>
                              <td>{{ $user->username }}</td>
                              <td>{{ $user->email }}</td>
                              <td class="d-flex ">
                                <a href="{{ route('users.edit', $user->id) }}" class="btn btn-success mr-3">
                                    <i class="far fa-edit"></i>
                                </a>
                                <form method="POST" action="{{ route('users.destroy', $user->id) }}">
                                    @csrf
                                    @method('DELETE')
                                    <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                                </form>
                              </td>
                          </tr>
                      @endforeach
                    </tbody>
                </table>
            </div>

        </div>
    </div>
@endsection
