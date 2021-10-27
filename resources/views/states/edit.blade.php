<x-layout>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Update State</h1>
    </div>
    <div class="card">
            <div class="card-body">
                <form method="POST" action="{{ route('states.update', $state->id) }}">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="name">{{ __('Country') }}</label>
                        <select class="custom-select" name="country_id">
                            @foreach ($countries as $country)
                                <option value="{{ $country->id }}" {{ $country->id === $state->country_id ? 'selected' : '' }}>
                                    {{ $country->name }}
                                </option>
                            @endforeach
                          </select>
                          @error('country_id')
                          <div class="invalid-feedback">
                                <strong>{{ $message }}</strong>
                          </div>
                          @enderror
                      </div>
                    <div class="form-group">
                      <label for="name">{{ __('State Name') }}</label>
                        <input type="text"  class="form-control" name="name"  @error('name') is-invalid @enderror value="{{ old('name', $state->name) }}">
                        @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <button type="submit" class="btn btn-primary">{{ __('Update State') }}</button>
                    <a href="{{ route('states.index') }}" class="btn btn-secondary">Back</a>
                </form>
            </div>
    </div>
</x-layout>
