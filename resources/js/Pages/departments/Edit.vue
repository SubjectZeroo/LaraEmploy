<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Edit Department</h1>
    </div>
    <div class="card">
        <div class="card-header">Edit Department</div>
        <form @submit.prevent="updateDepartment">
            <div class="card-body">
                <div class="form-group">
                    <label for="name">Department Name</label>
                    <input type="text" class="form-control" name="name" v-model="form.name">
                </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">
                    Update Department
                </button>
                <router-link
                            :to="{ name: 'DepartmentsIndex' }"
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
               name: '',
            }
        };
    },
 created() {

        this.getDepartment();
    },
    methods: {
        getDepartment() {
            axios
                .get("/api/departments/" + this.$route.params.id)
                .then(res => {
                    this.form = res.data.data;
                })
                .catch(error => {
                    console.log(console.error);
                });
        },
        updateDepartment() {
            axios
                .put("/api/departments/" + this.$route.params.id, {
                    name: this.form.name,
                })
                .then(res => {
                    this.$router.push({ name: "DepartmentsIndex" });
                });
        },
    }
};
</script>

<style>

</style>
