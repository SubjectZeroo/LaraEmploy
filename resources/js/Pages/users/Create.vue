<template>
  <div>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create Users</h1>
    </div>
    <div class="card">
            <div class="card-body">
                <form>
                    <div class="form-group row">
                        <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>

                        <div class="col-md-6">
                            <input id="username" type="text" class="form-control" name="username"  required autocomplete="username" autofocus>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="first_name" class="col-md-4 col-form-label text-md-right">First Name</label>

                        <div class="col-md-6">
                            <input id="first_name" type="text" class="form-control" name="first_name" required autocomplete="first_name" autofocus>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="last_name" class="col-md-4 col-form-label text-md-right">Last Name</label>

                        <div class="col-md-6">
                            <input id="last_name" type="text" class="form-control" name="last_name" required autocomplete="last_name" autofocus>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                        <div class="col-md-6">
                            <input id="email" type="email" class="form-control" name="email"  required autocomplete="email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                        <div class="col-md-6">
                            <input id="password" type="password" class="form-control" name="password" required autocomplete="new-password">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                        <div class="col-md-6">
                            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                        </div>
                    </div>
                    <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <button type="submit" class="btn btn-primary">
                                Register User
                            </button>
                            <router-link
                        :to="{ name: 'UsersIndex' }"
                        class="btn btn-secondary"
                    >
                        Back
                    </router-link>
                        </div>
                    </div>
                </form>
            </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
            return {
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
    methods: {
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
                .then(res => {
                    this.$router.push({ name: "EmployeesIndex" });
                });
        }
    }
}
</script>

<style>

</style>
