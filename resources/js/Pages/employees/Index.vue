<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Employees</h1>
        </div>

        <div class="card">
            <div class="card-header">
                <div
                    class="d-flex justify-content-between justify-content-center align-items-center"
                >
                    <input
                                type="text"
                                class="form-control col-md-3"
                                placeholder="Search"
                                v-model.lazy="search"
                />
                    <router-link
                        :to="{ name: 'EmployeesCreate' }"
                        class="btn btn-primary"
                        >Create Employee</router-link
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
                                <th scope="col">Firts Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Adress</th>
                                <th scope="col">Department</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="employee in employees.data"
                                :key="employee.id"
                            >
                                <th>#{{ employee.id }}</th>
                                <td>{{ employee.firts_name }}</td>
                                <td>{{ employee.last_name }}</td>
                                <td>{{ employee.middle_name }}</td>
                                <td>{{ employee.address }}</td>
                                <td>{{ employee.department.name }}</td>

                                <td>
                                    <router-link
                                        :to="{
                                            name: 'EmployeesEdit',
                                            params: { id: employee.id }
                                        }"
                                        class="btn btn-primary"
                                        >Edit</router-link
                                    >
                                    <button
                                        class="btn btn-danger"
                                        @click="deleteEmployee(employee.id)"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <pagination
                        :data="employees"
                        @pagination-change-page="getEmployees"
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
            employees: {},
            paginate: 10,
            search: "",
            params: {
                sort_field: "created_at",
                sort_direction: "desc",
            }
        };
    },
    mounted() {
        this.getEmployees();
    },
    watch: {
        paginate: function(value) {
            this.getEmployees();
        },
        search: function (value) {
            this.getEmployees();
        }
    },
    methods: {
        getEmployees(page = 1) {
            axios
                .get("/api/employees?page=" + page
                    + '&paginate=' + this.paginate
                    + '&q=' + this.search)
                .then(response => {
                    this.employees = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        deleteEmployee(id) {

            axios.delete("api/employees/" + id).then(res => {
                this.showMessage = true;
                this.message = res.data;
                this.getEmployees();
            });



        }
    }
};
</script>

<style></style>
