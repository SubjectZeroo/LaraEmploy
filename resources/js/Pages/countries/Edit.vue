<template>
   <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Edut Country</h1>
        </div>
        <div class="card">
             <div class="card-header">Edit Country</div>
            <form >
                <div class="card-body">
                        <div class="form-group row">
                            <label for="country_code" class="col-md-4 col-form-label text-md-right">Country Code</label>
                            <div class="col-md-6">
                                <input id="country_code" type="text" class="form-control" name="country_code" value="" required autocomplete="country_code" autofocus>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Country Name</label>
                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name" required autocomplete="name" autofocus>
                            </div>
                        </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Update Country
                    </button>
                    <router-link
                            :to="{ name: 'CountriesIndex' }"
                            class="btn btn-secondary">
                            Back
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
