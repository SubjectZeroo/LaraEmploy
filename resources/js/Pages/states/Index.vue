<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">States</h1>
    </div>
    <div>
        <!-- @if (session()->has('message'))
            <div class="alert alert-success">
                {{ session('message') }}
            </div>
        @endif -->
    </div>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between justify-content-center align-items-center">
                <form>
                    <div class="form-row align-items-center">
                      <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">Name</label>
                        <input type="search" name="search" class="form-control mb-2" id="inlineFormInput" placeholder="Search by Name or Country Code">
                      </div>
                      <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                      </div>
                    </div>
                </form>
                <router-link
                        :to="{ name: 'StatesCreate' }"
                        class="float-right btn btn-primary"
                        >Create State</router-link
                    >
            </div>

        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Country Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- @foreach ($states as $state)
                          <tr>
                              <th>{{ $state->id }}</th>
                              <td>{{ $state->country->country_code }}</td>
                              <td>{{ $state->name }}</td>
                              <td class="d-flex ">
                                <a href="{{ route('states.edit', $state->id) }}" class="btn btn-success mr-3">
                                    <i class="far fa-edit"></i>
                                </a>
                                <form method="POST" action="{{ route('states.destroy', $state->id) }}">
                                    @csrf
                                    @method('DELETE')
                                    <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                                </form>
                              </td>
                          </tr>
                      @endforeach -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
