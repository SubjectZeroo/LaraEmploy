<template>
  <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Registered Users</h1>
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
                <form method="GET" action="">
                    <div class="form-row align-items-center">
                      <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">Name</label>
                        <input type="search" name="search" class="form-control mb-2" id="inlineFormInput" placeholder="Search by Name or Email">
                      </div>
                      <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                      </div>
                    </div>
                </form>
                <router-link
                        :to="{ name: 'UsersCreate' }"
                        class="btn btn-primary"
                        >Create User</router-link
                    >
            </div>

        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                       <tr v-for="user in users"
                            :key="user.id">
                                <th>#{{ user.id }}</th>
                                <td>{{ user.username }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <router-link
                                        :to="{
                                            name: 'UsersEdit',
                                            params: { id: user.id }
                                        }"
                                        class="btn btn-primary"
                                        >Edit</router-link
                                    >
                                    <button
                                        class="btn btn-danger"
                                        @click="deleteUser(user.id)"
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
            users: [],
            showMessage: false,
            message: "",
            search: null,
        };
    },
    watch: {
        search() {
            this.getUsers();
        }
    },
    created() {
        this.getUsers();
    },
    methods: {
        getUsers() {
            axios
                .get("/api/users", {
                    params: {
                        search: this.search,
                    }
                })
                .then(res => {
                    this.users = res.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        deleteUser(id) {

            axios.delete("api/users/" + id).then(res => {
                this.showMessage = true;
                this.message = res.data;
                this.getUsers();
            });
        }
    }
};
</script>

<style>

</style>
