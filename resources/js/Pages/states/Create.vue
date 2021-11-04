<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create State</h1>
    </div>
    <div class="card">
            <div class="card-header">Create State</div>
            <form  @submit.prevent="storeState" @keydown="form.errors.clear($event.target.name)">
                <div class="card-body">
                        <div class="form-group">
                            <label for="name">Select Country</label>
                             <select
                                v-model="form.country_id"
                                class="custom-select"
                                name="country">
                                <option value="" selected>Select Country</option>
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
                            <input type="text" class="form-control" name="name"  v-model="form.name">
                            <div class="help is-danger"
                            v-if="form.errors.has('name')"
                            v-text="form.errors.get('name')"></div>
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
import Form from '../../core/Form';
export default {
    data() {
        return {
            countries: [],
            form: new Form({
                country_id: '',
                name: '',
            })
        };
    },
    created() {
        this.getCountries();
    },

    methods: {
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

        storeState() {
            this.form.submit('post', '/api/states')
                .then(
                    data => console.log(data),
                     this.$router.push({ name: "StatesIndex" })
                )
                .catch(errors => console.log(errors));
        },

    }
};
</script>

<style>

</style>
