<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Employees</h1>
        </div>
        <div v-if="showMessage">
            <div class="alert alert-success">
                {{ message }}
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div
                    class="d-flex justify-content-between justify-content-center align-items-center"
                >
                    <form>
                        <div class="form-row align-items-center">
                            <div class="col-auto">
                                <label class="sr-only" for="inlineFormInput"
                                    >Name</label
                                >
                                <input
                                    type="search"
                                    v-model.lazy="search"
                                    name="search"
                                    class="form-control mb-2"
                                    placeholder="Search by Name or Country Code"
                                />
                            </div>
                            <div class="col-auto">
                                <button
                                    type="submit"
                                    class="btn btn-primary mb-2"
                                >
                                    Search
                                </button>
                            </div>
                            <div class="col">
                                <select
                                    v-model="selectedDepartment"
                                    class="custom-select"
                                    name="department_id"
                                >
                                    <option
                                        v-for="department in departments"
                                        :key="department.id"
                                        :value="department.id"
                                    >
                                        {{ department.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <router-link
                        :to="{ name: 'EmployeesCreate' }"
                        class="btn btn-primary"
                        >Create Employee</router-link
                    >
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
                                v-for="employee in employees"
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            employees: [],
            showMessage: false,
            message: "",
            search: null,
            selectedDepartment: null,
            departments: []
        };
    },
    watch: {
        search() {
            this.getEmployees();
        },
        selectedDepartment() {
            this.getEmployees();
        }
    },
    created() {
        this.getEmployees();
        this.getDepartments();
    },
    methods: {
        getEmployees() {
            axios
                .get("/api/employees", {
                    params: {
                        search: this.search,
                        department_id: this.selectedDepartment
                    }
                })
                .then(res => {
                    this.employees = res.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getDepartments() {
            axios
                .get("/api/employees/departments")
                .then(res => {
                    this.departments = res.data;
                })
                .catch(error => {
                    console.log(console.error);
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
