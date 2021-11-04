<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Edit State</h1>
    </div>
    <div class="card">
         <div class="card-header">Edit State</div>
         <form  @submit.prevent="updateState">
            <div class="card-body">
                    <div class="form-group">
                        <label for="name">Select Country</label>
                         <select
                                v-model="form.country_id"
                                class="custom-select"
                                name="country"
                                aria-label="Default Select example"
                            >
                                <option
                                    v-for="country in countries"
                                    :key="country.id"
                                    :value="country.id"
                                >
                                    {{ country.name }}
                                </option>
                            </select>
                    </div>
                    <div class="form-group">
                        <label for="name">State Name</label>
                        <input type="text"  class="form-control" name="name" v-model="form.name">
                    </div>
            </div>
            <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Update State</button>
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
    data() {
        return {
            countries: [],
            form: {
                country_id: '',
                name: '',
            }
        };
    },
    created() {
        this.getCountries();
        this.getState();
    },

    methods: {
        getState() {
            axios
                .get("/api/states/" + this.$route.params.id)
                .then(res => {
                    this.form = res.data.data;
                })
                .catch(error => {
                    console.log(console.error);
                });
        },
        getCountries() {
            axios
                .get("/api/employees/countries")
                .then(res => {
                    this.countries = res.data;
                })
                .catch(error => {
                    console.log(console.error);
                });
        },

        updateState() {
            axios
                .put("/api/states/" + this.$route.params.id, {
                    country_id: this.form.country_id,
                    name: this.form.name
                })
                .then(res => {
                    this.$router.push({ name: "StatesIndex" });
                });
        },
    }
};
</script>

<style>

</style>
