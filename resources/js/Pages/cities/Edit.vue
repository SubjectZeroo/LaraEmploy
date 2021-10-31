<template>
  <div>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Edit City</h1>
    </div>
    <div class="card">
            <div class="card-header">Edit City</div>
            <form>
                <div class="card-body">
                    <div class="form-group">
                        <label for="state_id"></label>
                        <select class="custom-select" name="state_id">
                            <option value="" selected>Select a State</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="name">State Name</label>
                        <input type="text" class="form-control" name="name">
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Update City</button>
                    <router-link
                                :to="{ name: 'CitiesIndex' }"
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
