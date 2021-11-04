<template>
    <div>
<div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Countries</h1>
    </div>
    <div>
        <!-- @if (session()->has('message'))
            <div class="alert alert-success">
                {{ session('message') }}
            </div>
        @endif -->
    </div>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between justify-content-center align-items-center">
                <form method="GET" action="">
                    <div class="form-row align-items-center">
                      <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">Name</label>
                        <input type="search" name="search" class="form-control mb-2" id="inlineFormInput" placeholder="Search by Name or Country Code">
                      </div>
                      <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                      </div>
                    </div>
                </form>
                <router-link
                        :to="{ name: 'CountriesCreate' }"
                        class="float-right btn btn-primary"
                        >Create Country</router-link
                    >
            </div>

        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Country Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                       <tr v-for="country in countries"
                            :key="country.id">
                                <th>#{{ country.id }}</th>
                                <td>{{ country.country_code }}</td>
                                <td>{{ country.name }}</td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'CountriesEdit',
                                            params: { id: country.id }
                                        }"
                                        class="btn btn-primary"
                                        >Edit</router-link
                                    >
                                    <button
                                        class="btn btn-danger"
                                        @click="deleteCountry(country.id)"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countries: [],
            showMessage: false,
            message: "",
            search: null,
        };
    },
    watch: {
        search() {
            this.getCountries();
        }
    },
    created() {
        this.getCountries();
    },
    methods: {
        getCountries() {
            axios
                .get("/api/countries", {
                    params: {
                        search: this.search,
                    }
                })
                .then(res => {
                    this.countries = res.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        deleteCountry(id) {

            axios.delete("api/countries/" + id).then(res => {
                this.showMessage = true;
                this.message = res.data;
                this.getCountries();
            });
        }
    }
};
</script>

<style>

</style>
