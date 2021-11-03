<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Create Employees</h1>
        </div>
        <div class="card">
            <div class="card-header">Create Employee</div>
            <form @submit.prevent="storeEmployee" @keydown="form.errors.clear($event.target.name)">
                <div class="card-body">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                             <label for="firts_name">Firts Name</label>
                            <input
                            v-model="form.firts_name"
                            type="text"
                            class="form-control"
                            name="firts_name"/>
                            <!-- <input
                                v-model="form.firts_name"
                                @keydown="errors.clear('firts_name')"
                                type="text"
                                class="form-control"
                                name="firts_name"

                            /> -->
                            <div class="help is-danger"
                            v-if="form.errors.has('firts_name')"
                            v-text="form.errors.get('firts_name')"></div>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="last_name">Last Name</label>
                            <input
                                v-model="form.last_name"
                                type="text"
                                class="form-control"
                                name="last_name"

                            />
                            <div class="help is-danger" v-if="form.errors.has('last_name')" v-text="form.errors.get('last_name')"></div>
                        </div>
                        <div class="form-group col-md-4">
                             <label for="middle_name">Middle Name</label>
                            <input
                                v-model="form.middle_name"
                                type="text"
                                class="form-control"
                                name="middle_name"

                            />
                            <div class="help is-danger" v-text="form.errors.get('middle_name')"></div>
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
                            <div class="help is-danger" v-if="form.errors.has('address')" v-text="form.errors.get('address')"></div>
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
                            <div class="help is-danger" v-if="form.errors.has('department_id')" v-text="form.errors.get('department_id')"></div>
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
                            <div class="help is-danger" v-if="form.errors.has('country_id')" v-text="form.errors.get('country_id')"></div>
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
                            <div class="help is-danger" v-if="form.errors.has('state_id')" v-text="form.errors.get('state_id')"></div>
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
                            <div class="help is-danger" v-if="form.errors.has('city_id')" v-text="form.errors.get('city_id')"></div>
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
                            <div class="help is-danger" v-if="form.errors.has('zip_code')" v-text="form.errors.get('zip_code')"></div>
                        </div>
                        <div class="form-group col-md-4">
                             <div class="mb-2">Birthdate</div>
                            <date-picker input-class="form-control" v-model="form.birthdate" valueType="format" :placeholder="'Select Birthdate'"  style="width: 100%;"></date-picker>
                            <div class="help is-danger" v-if="form.errors.has('birthdate')" v-text="form.errors.get('birthdate')"  ></div>
                        </div>
                        <div class="form-group col-md-4">
                            <div class="mb-2">Date Hired</div>
                            <date-picker input-class="form-control" v-model="form.date_hired" valueType="format" :placeholder="'Select Date Hired'" id="date_hired"  style="width: 100%;"></date-picker>
                            <div class="help is-danger" v-if="form.errors.has('date_hired')" v-text="form.errors.get('date_hired')" width="500"></div>
                        </div>
                     </div>
                    <!-- <div class="form-group">

                    </div>
                    <section>
                         <p>Birthdate</p>
                         <date-picker v-model="form.birthdate" valueType="format"></date-picker>
                         <div class="help is-danger" v-if="form.errors.has('birthdate')" v-text="form.errors.get('birthdate')"></div>
                    </section> -->
                    <!-- <div class="form-group">
                        <label for="birthdate">Birthdate</label>

                    </div> -->
                    <!-- <section>
                        <p>Date Hired</p>
                        <date-picker input-class="form-control" v-model="form.date_hired" valueType="format"></date-picker>
                        <div class="help is-danger" v-if="form.errors.has('date_hired')" v-text="form.errors.get('date_hired')"></div>
                    </section> -->
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary" :disabled="form.errors.any()">
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
  import 'vue2-datepicker/index.css';

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

        this.errors = errors.errors;

    }

    clear(field) {

        if(field) {
            delete this.errors[field];

            return;
        }

        this.errors ={};

    }

}


class Form {

    constructor(data) {

        this.originalData = data;

        for (let field in data) {

            this[field] = data[field];

        }

        this.errors = new Errors();
    }
    /**
     * Fetch all relevant data for the form
     */

    data() {

        //   let data =  Object.assign({}, this);

        //   delete data.originalData;
        //   delete data.errors;

        letdata = {};

        for (let property in this.originalData) {

            data[property] = this[property];

        }

        return data;

    }


    /**
     *  Reset the form fields
     */

    reset() {

       for (let field in this.originalData) {

           this[field] = ''
       }

         this.errors.clear();

    }

    /**
     * Submit the form
     *
     * @param {string} requestType
     * @param {string} url
     */

    submit(requestType, url) {

        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
            // .then(response => {
            //     this.$router.push({ name: "EmployeesIndex" });
            // })
            .then(response => {

                this.onSuccess(response.data);

                resolve(response.data);

            })
            .catch(error => {

                this.onFail(error.response.data);

                reject(error.response.data);

            });

        });

    }
    /**
     * Handle a succesful form submission.
     *
     * @param {object} data
     *
     */

    onSuccess(data) {

        alert(data.message); //temporary


        this.reset();

    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     *
     */

    onFail(errors) {
        this.errors.record(errors);
    }
}

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
            form: new Form({
                firts_name: '',
                last_name: '',
                middle_name: '',
                address: '',
                country_id: '',
                state_id: '',
                department_id: '',
                city_id: '',
                zip_code: '',
                birthdate: null,
                date_hired: null,
            })
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
            this.form.submit('post', '/api/employees')
                .then(data => console.log(data))
                .catch(errors => console.log(errors));
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
