<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Edit State</h1>
    </div>
    <div class="card">
         <div class="card-header">Edit State</div>
         <form >
            <div class="card-body">
                    <div class="form-group">
                        <label for="name">Select Country</label>
                        <select class="custom-select" name="country_id">
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="name">State Name</label>
                        <input type="text"  class="form-control" name="name">
                    </div>
            </div>
            <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Create State</button>
                        <router-link
                            :to="{ name: 'StatesIndex' }"
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
