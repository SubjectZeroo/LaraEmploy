<x-layout>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create Department</h1>
    </div>
    <div class="card">
            <div class="card-header">Create Department</div>
            <form method="POST" action="{{ route('departments.store') }}">
                <div class="card-body">

                        @csrf
                        <div class="form-group">
                            <label for="name">Department Name</label>
                            <input type="text" class="form-control" name="name" value="{{ old('name') }}">
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                </div>
                <div class="card-footer">
                     <button type="submit" class="btn btn-primary">{{ __('Register Department') }}</button>
                    <a href="{{ route('departments.index') }}" class="btn btn-secondary">Back</a>
                </div>
            </form>
    </div>
</x-layout>
