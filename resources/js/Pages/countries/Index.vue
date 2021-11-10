<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Countries</h1>
        </div>
         <div class="card">
            <div class="card-header">
                    <div class="d-flex justify-content-between justify-content-center align-items-center">
                        <input
                                type="text"
                                class="form-control col-md-3"
                                placeholder="Search"
                                v-model="search"
                            />
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
                                            <th>
                                                <a href="#" @click.prevent="change_sort('country_code')">Country Code</a>
                                                <span v-if="this.params.sort_field == 'country_code' && this.params.sort_direction == 'asc'"></span>
                                                <span v-if="this.params.sort_field == 'country_code' && this.params.sort_direction == 'desc'"></span>
                                            </th>
                                            <th>
                                                <a href="#" @click.prevent="change_sort('name')">Name</a>
                                                <span v-if="this.params.sort_field == 'name' && this.params.sort_direction == 'asc'"></span>
                                                <span v-if="this.params.sort_field == 'name' && this.params.sort_direction == 'desc'"></span>
                                            </th>
                                            <th>Actions</th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <input
                                                type="text"
                                                class="form-control w-100"
                                                v-model="params.country_code">
                                        </th>
                                        <th>
                                            <input
                                                type="text"
                                                class="form-control w-100"
                                                v-model="params.name"
                                            />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr v-for="country in countries.data"
                                        :key="country.id">
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
                        <pagination
                                :data="countries"
                                @pagination-change-page="getResults"
                        ></pagination>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countries: {},
            params: {
                sort_field: "created_at",
                sort_direction: "desc",
                country_code: "",
                name: ""
            },
            search: ""
        };
    },
    mounted() {
        this.getResults();
    },
    watch: {
        params: {
            handler() {
                this.getResults();
            },
            deep: true
        },
        search(val, old) {
            if (val.length >= 4 || old.length >= 4) {
                this.getResults();
            }
        }
    },
    methods: {

        deleteCountry(id) {

            axios.delete("api/countries/" + id).then(res => {
                this.showMessage = true;
                this.message = res.data;
                this.getResults();
            });
        },
        change_sort(field) {
            if (this.params.sort_field === field) {
                this.params.sort_direction =
                    this.params.sort_direction === "asc" ? "desc" : "asc";
            } else {
                this.params.sort_field = field;
                this.params.sort_direction = "asc";
            }
        },

        getResults(page = 1) {
            axios
                .get("/api/countries", {
                    params: {
                        page,
                        search: this.search.length >= 4 ? this.search : "",
                        ...this.params
                    }
                })
                .then(response => {
                    this.countries = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style>

</style>
