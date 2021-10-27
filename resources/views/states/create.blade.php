<x-layout>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create State</h1>
    </div>
    <div class="card">
            <div class="card-header">Create State</div>
            <form method="POST" action="{{ route('states.store') }}">
                <div class="card-body">

                        @csrf
                        <div class="form-group">
                            <label for="name">{{ __('Country') }}</label>
                                <select class="custom-select" name="country_id">
                                    <option value="" selected>Select a Country</option>
                                @foreach ($countries as $country)
                                    <option value="{{ $country->id }}">
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
                    <button type="submit" class="btn btn-primary">{{ __('Register State') }}</button>
                    <a href="{{ route('states.index') }}" class="btn btn-secondary">Back</a>
                </div>
            </form>
    </div>
</x-layout>
