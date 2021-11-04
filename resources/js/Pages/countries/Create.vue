<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Create Country</h1>
        </div>
        <div class="card">
             <div class="card-header">Create Country</div>
             <form @submit.prevent="storeCountry" @keydown="form.errors.clear($event.target.name)">
                <div class="card-body">
                        <div class="form-group">
                            <label for="country_code">Country Code</label>
                            <input id="country_code" type="text" class="form-control" name="country_code" v-model="form.country_code">
                             <div class="help is-danger"
                                v-if="form.errors.has('country_code')"
                                v-text="form.errors.get('country_code')"></div>
                        </div>
                        <div class="form-group">
                            <label for="name">Country Name</label>
                            <input id="name" type="text" class="form-control" name="name" v-model="form.name">
                            <div class="help is-danger"
                                v-if="form.errors.has('name')"
                                v-text="form.errors.get('name')"></div>
                        </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Create Country
                    </button>
                    <router-link
                            :to="{ name: 'CountriesIndex' }"
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
                    country_code: '',
                    name: ''
                })
            };
        },
    methods: {
        storeCountry() {
            this.form.submit('post', '/api/countries')
                .then(
                    data => console.log(data),
                    this.$router.push({ name: "CountriesIndex" })
                )
                .catch(errors => console.log(errors));
        },
    }
}
</script>


<style>

</style>
