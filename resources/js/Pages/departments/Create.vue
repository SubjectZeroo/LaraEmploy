<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Create Department</h1>
        </div>
        <div class="card">
                <div class="card-header">Create Department</div>
                <form @submit.prevent="storeDepartment" @keydown="form.errors.clear($event.target.name)">
                    <div class="card-body">
                            <div class="form-group">
                                <label for="name">Department Name</label>
                                <input type="text" class="form-control" name="name" v-model="form.name">
                                <div class="help is-danger"
                                v-if="form.errors.has('name')"
                                v-text="form.errors.get('name')"></div>
                            </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">
                            Create Department
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

import Form from '../../core/Form';
export default {
    data() {
            return {
                form: new Form({
                    name: ''
                })
            };
        },
    methods: {
        storeDepartment() {
            this.form.submit('post', '/api/departments')
                .then(
                    data => console.log(data),
                    this.$router.push({ name: "DepartmentsIndex" })
                )
                .catch(errors => console.log(errors));
        },
    }
}
</script>

<style>

</style>
