<x-layout>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create City</h1>
    </div>
    <div class="card">
            <div class="card-header">Create City</div>
            <form method="POST" action="{{ route('cities.store') }}">
                <div class="card-body">
                    @csrf
                    <div class="form-group">
                        <label for="state_id">{{ __('State') }}</label>
                            <select class="custom-select" name="state_id">
                                <option value="" selected>Select a State</option>
                            @foreach ($states as $state)
                                <option value="{{ $state->id }}">
                                    {{ $state->name }}
                                </option>
                            @endforeach
                          </select>
                          @error('state_id')
                          <div class="invalid-feedback">
                                <strong>{{ $message }}</strong>
                          </div>
                          @enderror
                    </div>
                    <div class="form-group">
                        <label for="name">State Name</label>
                        <input type="text" class="form-control" name="name" value="{{ old('name') }}">
                        @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">{{ __('Register City') }}</button>
                    <a href="{{ route('cities.index') }}" class="btn btn-secondary">Back</a>
                </div>
            </form>
    </div>
</x-layout>
