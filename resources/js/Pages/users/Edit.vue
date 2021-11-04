<template>
  <div>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Edit User</h1>
    </div>
    <div class="card">
         <div class="card-header">Edit User</div>
          <form @submit.prevent="updateUser">
            <div class="card-body">
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="username">Username</label>
                        <input v-model="form.username" id="username" name="username" type="text" class="form-control">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="first_name">First Name</label>
                        <input v-model="form.first_name" id="first_name" type="text" class="form-control" name="first_name">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="last_name">Last Name</label>
                        <input v-model="form.last_name" id="last_name" type="text" class="form-control" name="last_name">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="email">Email</label>
                        <input v-model="form.email" id="email" type="email" class="form-control" name="email">
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">Update User</button>
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
export default {

    data() {
        return {
            form: {
               username: '',
                first_name: '',
                last_name: '',
                email: '',
            }
        };
    },
 created() {

        this.getUser();
    },
    methods: {
        getUser() {
            axios
                .get("/api/users/" + this.$route.params.id)
                .then(res => {
                    this.form = res.data.data;
                })
                .catch(error => {
                    console.log(console.error);
                });
        },
        updateUser() {
            axios
                .put("/api/users/" + this.$route.params.id, {
                    username: this.form.username,
                    first_name: this.form.first_name,
                    last_name: this.form.last_name,
                    email: this.form.email,
                })
                .then(res => {
                    this.$router.push({ name: "UsersIndex" });
                });
        },
    }
};
</script>

<style>

</style>
