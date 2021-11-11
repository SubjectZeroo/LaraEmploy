<template>
  <div>
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Cities</h1>
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
                <input
                                type="text"
                                class="form-control col-md-3"
                                placeholder="Search"
                                v-model.lazy="search"
                />
                <router-link
                        :to="{ name: 'CitiesCreate' }"
                        class="float-right btn btn-primary"
                        >Create City</router-link
                    >
            </div>
            <div class="col-1">
                 <select v-model="paginate" class="form-control form-control-sm">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">State</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="city in cities.data"
                            :key="city.id">
                                <th>#{{ city.id }}</th>
                                <td>{{ city.state.name }}</td>
                                <td>{{ city.name }}</td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'CitiesEdit',
                                            params: { id: city.id }
                                        }"
                                        class="btn btn-primary"
                                        >Edit</router-link
                                    >
                                    <button
                                        class="btn btn-danger"
                                        @click="deleteCity(city.id)"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                    </tbody>
                </table>
                <pagination
                        :data="cities"
                        @pagination-change-page="getCities"
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
            cities: {},
            paginate: 10,
            search: "",
            params: {
                sort_field: "created_at",
                sort_direction: "desc",
            }
        };
    },
     mounted() {
        this.getCities();
    },
    watch: {
        paginate: function(value) {
            this.getCities();
        },
        search: function (value) {
            this.getCities();
        }
    },
    methods: {
        getCities(page = 1) {
            axios
                .get("/api/cities?page=" + page
                + '&paginate=' + this.paginate
                + '&q=' + this.search)
                .then(response => {
                    this.cities = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        deleteCities(id) {

            axios.delete("api/cities/" + id).then(res => {
                this.showMessage = true;
                this.message = res.data;
                this.getCities();
            });
        }
    }
};
</script>

<style>

</style>
