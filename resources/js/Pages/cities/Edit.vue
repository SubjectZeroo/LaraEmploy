<template>
  <div>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Edit City</h1>
    </div>
    <div class="card">
            <div class="card-header">Edit City</div>
             <form  @submit.prevent="updateCity">
                <div class="card-body">
                    <div class="form-group">
                        <label for="state_id">Select State</label>
                        <select
                                v-model="form.state_id"
                                class="custom-select"
                                name="state">
                               <option value="" selected>Select State</option>
                               <option
                                    v-for="state in states"
                                    :key="state.id"
                                    :value="state.id">
                                    {{ state.name }}
                                </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="name">State Name</label>
                        <input type="text" class="form-control" name="name"  v-model="form.name">
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
    data() {
        return {
            states: [],
            form: {
                state_id: '',
                name: '',
            }
        };
    },
    created() {
        this.getStates();
        this.getCity();
    },

    methods: {
        getCity() {
            axios
                .get("/api/cities/" + this.$route.params.id)
                .then(res => {
                    this.form = res.data.data;
                })
                .catch(error => {
                    console.log(console.error);
                });
        },
        getStates() {
            axios
                .get("/api/employees/states")
                .then(res => {
                    this.states = res.data;
                })
                .catch(error => {
                    console.log(console.error);
                });
        },

        updateCity() {
            axios
                .put("/api/cities/" + this.$route.params.id, {
                    state_id: this.form.state_id,
                    name: this.form.name
                })
                .then(res => {
                    this.$router.push({ name: "CitiesIndex" });
                });
        },
    }
};
</script>

<style>

</style>
