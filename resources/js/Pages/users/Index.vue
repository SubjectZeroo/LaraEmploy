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
                <div
                    class="d-flex justify-content-between justify-content-center align-items-center">
                   <input type="text" class="forms-control col-md-3" placeholder="Search" v-model="search">
                    <router-link
                        :to="{ name: 'UsersCreate' }"
                        class="btn btn-primary"
                        >Create User</router-link
                    >
                </div>
            </div>
            <div class="card-body">

                <table class="table">
                        <thead>
                            <tr>
                                <!-- <th>
                                    <a href="#" @click.prevent="change_sort('id')">ID</a>
                                    <span v-if="this.params.sort_field == 'id' && this.params.sort_direction == 'asc'"></span>
                                    <span v-if="this.params.sort_field == 'id' && this.params.sort_direction == 'desc'"></span>
                                </th> -->
                                <th>
                                    <a href="#" @click.prevent="change_sort('username')">Username</a>
                                    <span v-if="this.params.sort_field == 'username' && this.params.sort_direction == 'asc'"></span>
                                    <span v-if="this.params.sort_field == 'username' && this.params.sort_direction == 'desc'"></span>
                                </th>
                                <th>
                                    <a href="#" @click.prevent="change_sort('email')">Email</a>
                                    <span v-if="this.params.sort_field == 'email' && this.params.sort_direction == 'asc'"></span>
                                    <span v-if="this.params.sort_field == 'email' && this.params.sort_direction == 'desc'"></span>
                                </th>
                                <th>
                                    <a href="#" @click.prevent="change_sort('created_at')">Created Date</a>
                                    <span v-if="this.params.sort_field == 'created_at' && this.params.sort_direction == 'asc'"></span>
                                    <span v-if="this.params.sort_field == 'created_at' && this.params.sort_direction == 'desc'"></span>
                                </th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <!-- <th>
                                    <input type="text" class="form-input w-100" v.model="params.id">
                                </th> -->
                                 <th>
                                    <input type="text" class="form-input w-100" v-model="params.username">
                                </th>
                                 <th>
                                    <input type="text" class="form-input w-100" v-model="params.email">
                                </th>
                                 <th>
                                    <input type="text" class="form-input w-100" v-model="params.created_at">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr v-for="user in users.data"
                                :key="user.id">
                                    <!-- <td>#{{ user.id }}</td> -->
                                    <td>{{ user.username }}</td>
                                    <td>{{ user.email }}</td>
                                     <td>{{ user.created_at }}</td>
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
                <pagination :data="users" @pagination-change-page="getResults"></pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: {},
            params: {
                sort_field: 'created_at',
                sort_direction: 'desc',
                // id:'',
                username:'',
                email:'',
                created_at:''
            },
            search:''
        };
    },
    mounted() {
       this.getResults()
    },
    watch: {
        params: {
            handler () {
                this.getResults();
            },
            deep: true
        },
        search (val, old) {
            if (val.length >= 4 || old.length >= 4) {
                this.getResults();
            }
        }
    },
    methods: {

        deleteUser(id) {
            axios.delete("api/users/" + id).then(res => {
                this.showMessage = true;
                this.message = res.data;
                this.getResults();
            });
        },

        change_sort(field) {
            if(this.params.sort_field === field) {
                this.params.sort_direction = this.params.sort_direction === 'asc' ? 'desc' : 'asc';

            }else{
                this.params.sort_field = field;
                this.params.sort_direction = 'asc';
            }
            // this.getResults();
        },

        // getResults(page = 1) {
        //     axios
        //         .get('/api/users?page=' + page
        //         + '&sort_field=' + this.sort_field
        //         + '&sort_direction=' + this.sort_direction)
        //         .then(response => {
        //             this.users = res.data.data;
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // }
         getResults(page = 1) {
            axios
                .get('/api/users', {
                    params: {
                        page,
                        search: this.search.length >= 4 ? this.search : '',
                        ...this.params
                    }
                })
                .then(response => {
                    this.users = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style></style>
