<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Deparments</h1>
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
                        :to="{ name: 'DepartmentsCreate' }"
                        class="float-right btn btn-primary"
                        >Create Department</router-link
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
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="deparment in departments.data"
                            :key="deparment.id">
                                <th>#{{ deparment.id }}</th>
                                <td>{{ deparment.name }}</td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'DepartmentsEdit',
                                            params: { id: deparment.id }
                                        }"
                                        class="btn btn-primary"
                                        >Edit</router-link
                                    >
                                    <button
                                        class="btn btn-danger"
                                        @click="deleteDepartment(deparment.id)"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <pagination
                        :data="departments"
                        @pagination-change-page="getDepartments"
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
            departments: {},
            paginate: 10,
            search: "",
            params: {
                sort_field: "created_at",
                sort_direction: "desc",
            }
        };
    },
    mounted() {
        this.getDepartments();
    },
     watch: {
        paginate: function(value) {
            this.getDepartments();
        },
        search: function (value) {
            this.getDepartments();
        }
    },
    methods: {
        getDepartments(page = 1) {
            axios
                .get("/api/departments?page=" + page
                + '&paginate=' + this.paginate
                + '&q=' + this.search)
                .then(res => {
                    this.departments = res.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        deleteDepartment(id) {

            axios.delete("api/departments/" + id).then(res => {
                this.showMessage = true;
                this.message = res.data;
                this.getDepartments();
            });
        }
    }
};
</script>

<style>

</style>
