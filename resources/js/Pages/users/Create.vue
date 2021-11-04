<template>
  <div>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create User</h1>
    </div>
    <div class="card">
         <div class="card-header">Create User</div>
         <form @submit.prevent="storeUser" @keydown="form.errors.clear($event.target.name)">
            <div class="card-body">
                <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="username">Username</label>
                            <input v-model="form.username" id="username" name="username" type="text" class="form-control">
                             <div class="help is-danger"
                                v-if="form.errors.has('username')"
                                v-text="form.errors.get('username')"></div>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="first_name">First Name</label>
                            <input v-model="form.first_name" id="first_name" type="text" class="form-control" name="first_name">
                             <div class="help is-danger"
                                v-if="form.errors.has('first_name')"
                                v-text="form.errors.get('first_name')"></div>
                        </div>
                         <div class="form-group col-md-4">
                            <label for="last_name">Last Name</label>
                            <input v-model="form.last_name" id="last_name" type="text" class="form-control" name="last_name">
                            <div class="help is-danger"
                                v-if="form.errors.has('last_name')"
                                v-text="form.errors.get('last_name')"></div>
                        </div>
                </div>
                <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="email">Email</label>
                            <input v-model="form.email" id="email" type="email" class="form-control" name="email">
                            <div class="help is-danger"
                                v-if="form.errors.has('email')"
                                v-text="form.errors.get('email')"></div>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="password" >Password</label>
                            <input v-model="form.password" id="password" type="password" class="form-control" name="password">
                            <div class="help is-danger"
                                v-if="form.errors.has('password')"
                                v-text="form.errors.get('password')"></div>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="password-confirm">Confirm Password</label>
                            <input v-model="form.password_confirmation" id="password-confirm" type="password" class="form-control" name="password_confirmation">
                        </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">Create User</button>
                <router-link
                        :to="{ name: 'UsersIndex' }"
                        class="btn btn-secondary">
                        Back
                </router-link>
            </div>
        </form>
    </div>
  </div>
</template>

<script>

import Form from '../../core/Form';
export default {
    data() {
            return {
                form: new Form({
                    username: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                })
            };
        },
    methods: {
        storeUser() {
            this.form.submit('post', '/api/users')
                .then(
                    data => console.log(data),
                    this.$router.push({ name: "UsersIndex" })
                )
                .catch(errors => console.log(errors));
        },
    }
}
</script>

<style>

</style>
