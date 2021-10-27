<x-layout>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Update State</h1>
    </div>
    <div class="card">
            <div class="card-body">
                <form method="POST" action="{{ route('cities.update', $city->id) }}">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="state_id">{{ __('State') }}</label>
                        <select class="custom-select" name="state_id">
                            @foreach ($states as $state)
                                <option value="{{ $state->id }}" {{ $state->id === $city->state_id ? 'selected' : '' }}>
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
                      <label for="name">{{ __('State Name') }}</label>
                        <input type="text"  class="form-control" name="name"  @error('name') is-invalid @enderror value="{{ old('name', $city->name) }}">
                        @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <button type="submit" class="btn btn-primary">{{ __('Update City') }}</button>
                    <a href="{{ route('cities.index') }}" class="btn btn-secondary">Back</a>
                </form>
            </div>
    </div>
</x-layout>
