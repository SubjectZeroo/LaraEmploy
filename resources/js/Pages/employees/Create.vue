<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Create Employees</h1>
        </div>
        <div class="card">
            <div class="card-header">Create Employee</div>
            <form @submit.prevent="storeEmployee" @keydown="errors.clear($event.target.name)">
                <div class="card-body">
                    <div class="form-group">
                        <label for="firts_name">Firts Name</label>
                        <input
                            v-model="form.firts_name"
                            type="text"
                            class="form-control"
                            name="firts_name"

                        />
                        <!-- <input
                            v-model="form.firts_name"
                            @keydown="errors.clear('firts_name')"
                            type="text"
                            class="form-control"
                            name="firts_name"

                        /> -->
                        <div class="help is-danger"
                        v-if="errors.has('firts_name')"
                        v-text="errors.get('firts_name')"></div>
                    </div>
                    <div class="form-group">
                        <label for="last_name">Last Name</label>
                        <input
                            v-model="form.last_name"
                            type="text"
                            class="form-control"
                            name="last_name"

                        />
                        <div class="help is-danger" v-if="errors.has('last_name')" v-text="errors.get('last_name')"></div>
                    </div>
                    <div class="form-group">
                        <label for="middle_name">Middle Name</label>
                        <input
                            v-model="form.middle_name"
                            type="text"
                            class="form-control"
                            name="middle_name"

                        />
                         <div class="help is-danger" v-text="errors.get('middle_name')"></div>
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input
                            v-model="form.address"
                            type="text"
                            class="form-control"
                            name="address"

                        />
                        <div class="help is-danger" v-if="errors.has('address')" v-text="errors.get('address')"></div>
                    </div>
                    <div class="form-group">
                        <label for="department_id">Department</label>
                        <select
                            v-model="form.department_id"
                            @change="getDepartments()"
                            class="custom-select"
                            name="department"
                        >
                            <option
                                v-for="department in departments"
                                :key="department.id"
                                :value="department.id"
                            >
                                {{ department.name }}
                            </option>
                        </select>
                        <div class="help is-danger" v-if="errors.has('department_id')" v-text="errors.get('department_id')"></div>
                    </div>
                    <div class="form-group">
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
                         <div class="help is-danger" v-if="errors.has('country_id')" v-text="errors.get('country_id')"></div>
                    </div>
                    <div class="form-group">
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
                        <div class="help is-danger" v-if="errors.has('state_id')" v-text="errors.get('state_id')"></div>
                    </div>
                    <div class="form-group">
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
                        <div class="help is-danger" v-if="errors.has('city_id')" v-text="errors.get('city_id')"></div>
                    </div>
                    <div class="form-group">
                        <label for="zip_Code">Zip Code</label>
                        <input
                            v-model="form.zip_code"
                            type="text"
                            class="form-control"
                            name="zip_code"
                        />
                        <div class="help is-danger" v-if="errors.has('zip_code')" v-text="errors.get('zip_code')"></div>
                    </div>
                    <div class="form-group">
                        <label for="birthdate">Birthdate</label>
                        <datepicker
                            v-model="form.birthdate"
                            input-class="form-control"
                        ></datepicker>
                         <div class="help is-danger" v-if="errors.has('birthdate')" v-text="errors.get('birthdate')"></div>
                    </div>
                    <div class="form-group">
                        <label for="date_hired">Date Hired</label>
                        <datepicker
                            v-model="form.date_hired"
                            input-class="form-control"
                        ></datepicker>
                        <div class="help is-danger" v-if="errors.has('date_hired')" v-text="errors.get('date_hired')"></div>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary" :disabled="errors.any()">
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
import Datepicker from "vuejs-datepicker";
import moment from "moment";

class Errors {

    constructor() {

        this.errors = {};

    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    get(field) {

        if(this.errors[field]) {

           return this.errors[field][0];

        }

    }

    record(errors) {

        this.errors = errors;

    }

    clear(field) {
        delete this.errors[field];
    }

}

export default {
    components: {
        Datepicker
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
                date_hired: null,

            },
             errors: new Errors()
        };
    },
    created() {
        this.getCountries();
        this.getDepartments();
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

        storeEmployee() {
            axios
                .post("/api/employees", {
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
                // .then(response => {
                //     this.$router.push({ name: "EmployeesIndex" });
                // })
                .then(this.onSucess)
                .catch(error => this.errors.record(error.response.data.errors));
        },
        onSucess(response) {
            alert(response.data.message);
            form.reset();
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
