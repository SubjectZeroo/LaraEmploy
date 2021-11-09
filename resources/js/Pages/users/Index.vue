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
                <!-- <form method="GET" action="">
                    <div class="form-row align-items-center">
                      <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">Name</label>
                        <input type="search" name="search" class="form-control mb-2" id="inlineFormInput" placeholder="Search by Name or Email">
                      </div>
                      <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                      </div>
                    </div>
                </form> -->
                <router-link
                        :to="{ name: 'UsersCreate' }"
                        class="btn btn-primary"
                        >Create User</router-link
                    >
            </div>

        </div>
        <div class="card-body">
            <!-- <div class="table-responsive">
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
            </div> -->
            <vue-good-table
                    mode="remote"
                    @on-page-change="onPageChange"
                    @on-sort-change="onSortChange"
                    @on-column-filter="onColumnFilter"
                    @on-per-page-change="onPerPageChange"
                    :totalRows="totalRecords"
                    :isLoading.sync="isLoading"
                    :pagination-options="{
                        enabled: true,
                    }"
                    :rows="rows"
                    :columns="columns"/>



        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            columns: [
                {
                        label: 'ID',
                        field: 'id',
                        // filterable: true
                    },
                    {
                        label: 'User Name',
                        field: 'username',
                        // filterable: true
                    },
                    {
                        label: 'Email Address',
                        field: 'email',
                        // filterable: true
                    }

            ],
            rows: [],
            totalRecords: 0,
            serverParams: {
                columnFilters: {
                    field:'username'
                },
                sort: [
                    {
                    field: '',
                    type: ''
                    }
                ],
                page: 1,
                perPage: 10
            },

            showMessage: false,
            message: ""
        };
    },
    created() {
        this.getUsers();
    },
    methods: {
        getUsers() {
            axios
                .get("/api/users")
                .then(res => {
                     this.rows = res.data.data;
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
        },

    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    onPageChange(params) {
      this.updateParams({page: params.currentPage});
      this.loadItems();
    },

    onPerPageChange(params) {
      this.updateParams({perPage: params.currentPerPage});
      this.loadItems();
    },

    onSortChange(params) {
      this.updateParams({
        sort: [{
          type: params.sortType,
          field: this.columns[params.columnIndex].field,
        }],
      });
      this.loadItems();
    },

    onColumnFilter(params) {
      this.updateParams(params);
      this.loadItems();
    },

    // load items is what brings back the rows from server
    loadItems() {
      getFromServer(this.serverParams).then(response => {
         this.totalRecords = response.totalRecords;
         this.rows = response.rows;
      });
    }
    }
};
</script>

<style>

</style>
