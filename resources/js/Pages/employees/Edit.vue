<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Edit Employees</h1>
        </div>
        <div class="card">
            <div class="card-header">Edit Employee</div>
            <form @submit.prevent="updateEmployee">
                <div class="card-body">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                             <label for="firts_name">Firts Name</label>
                            <input
                            v-model="form.firts_name"
                            type="text"
                            class="form-control"
                            name="firts_name"/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="last_name">Last Name</label>
                            <input
                                v-model="form.last_name"
                                type="text"
                                class="form-control"
                                name="last_name"
                            />
                        </div>
                        <div class="form-group col-md-4">
                             <label for="middle_name">Middle Name</label>
                            <input
                                v-model="form.middle_name"
                                type="text"
                                class="form-control"
                                name="middle_name"
                            />
                        </div>
                    </div>
                    <div class="form-row">

                        <div class="form-group col-md-12">
                             <label for="address">Address</label>
                            <input
                                v-model="form.address"
                                type="text"
                                class="form-control"
                                name="address"
                            />
                        </div>
                    </div>
                    <div class="form-row">
                         <div class="form-group col-md-12">
                            <label for="department_id">Department</label>
                            <select
                                v-model="form.department_id"
                                @change="getDepartments()"
                                class="custom-select"
                                name="department">
                                <option
                                    v-for="department in departments"
                                    :key="department.id"
                                    :value="department.id">
                                    {{ department.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="country_id">Countries</label>
                            <select
                                v-model="form.country_id"
                                @change="getStates()"
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
                        <div class="form-group col-md-4">
                            <label for="state_id">States</label>
                            <select
                                v-model="form.state_id"
                                @change="getCities()"
                                class="custom-select"
                                name="state"
                            >
                                <option
                                    v-for="state in states"
                                    :key="state.id"
                                    :value="state.id"
                                >
                                    {{ state.name }}
                                </option>
                            </select>

                        </div>
                        <div class="form-group col-md-4">
                             <label for="city_id">City</label>
                            <select
                                v-model="form.city_id"
                                class="custom-select"
                                name="city"
                            >
                                <option
                                    v-for="city in cities"
                                    :key="city.id"
                                    :value="city.id"
                                >
                                    {{ city.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                     <div class="form-row">
                         <div class="form-group col-md-4">
                            <label for="zip_Code">Zip Code</label>
                            <input
                                v-model="form.zip_code"
                                type="text"
                                class="form-control"
                                name="zip_code"
                            />
                        </div>
                        <div class="form-group col-md-4">
                             <div class="mb-2">Birthdate</div>
                            <date-picker input-class="form-control" v-model="form.birthdate" valueType="format" :placeholder="'Select Birthdate'"  style="width: 100%;"></date-picker>
                        </div>
                        <div class="form-group col-md-4">
                            <div class="mb-2">Date Hired</div>
                            <date-picker input-class="form-control" v-model="form.date_hired" valueType="format" :placeholder="'Select Date Hired'" id="date_hired"  style="width: 100%;"></date-picker>
                        </div>
                     </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Create Employee
                    </button>
                    <router-link
                        :to="{ name: 'EmployeesIndex' }"
                        class="btn btn-secondary"
                    >
                        Back
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import moment from "moment";
export default {
    components: {
        DatePicker
    },
    data() {
        return {
            countries: [],
            states: [],
            departments: [],
            cities: [],
            form: {
                firts_name: "",
                last_name: "",
                middle_name: "",
                address: "",
                country_id: "",
                state_id: "",
                department_id: "",
                city_id: "",
                zip_code: "",
                birthdate: null,
                date_hired: null
            }
        };
    },
    created() {
        this.getCountries();
        this.getDepartments();
        this.getEmployee();
    },

    methods: {
        getEmployee() {
            axios
                .get("/api/employees/" + this.$route.params.id)
                .then(res => {
                    this.form = res.data.data;
                    this.getStates();
                    this.getCities();
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
        getStates() {
            axios
                .get("/api/employees/" + this.form.country_id + "/states")
                .then(res => {
                    this.states = res.data;
                })
                .catch(error => {
                    console.log(console.error);
                });
        },
        getCities() {
            axios
                .get("/api/employees/" + this.form.state_id + "/cities")
                .then(res => {
                    this.cities = res.data;
                })
                .catch(error => {
                    console.log(console.error);
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

        updateEmployee() {
            axios
                .put("/api/employees/" + this.$route.params.id, {
                    firts_name: this.form.firts_name,
                    last_name: this.form.last_name,
                    middle_name: this.form.middle_name,
                    address: this.form.address,
                    department_id: this.form.department_id,
                    country_id: this.form.country_id,
                    state_id: this.form.state_id,
                    city_id: this.form.city_id,
                    zip_code: this.form.zip_code,
                    birthdate: this.format_date(this.form.birthdate),
                    date_hired: this.format_date(this.form.date_hired)
                })
                .then(res => {
                    this.$router.push({ name: "EmployeesIndex" });
                });
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format("YYYYMMDD");
            }
        }
    }
};
</script>

<style></style>
