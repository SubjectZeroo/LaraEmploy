<template>
   <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Edit Country</h1>
        </div>
        <div class="card">
             <div class="card-header">Edit Country</div>
            <form @submit.prevent="updateCountry">
                <div class="card-body">
                        <div class="form-group">
                            <label for="country_code">Country Code</label>
                            <input id="country_code" type="text" class="form-control" name="country_code" v-model="form.country_code">
                        </div>
                        <div class="form-group row">
                            <label for="name">Country Name</label>

                                <input id="name" type="text" class="form-control" name="name" v-model="form.name">

                        </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Update Country
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
export default {

    data() {
        return {
            form: {
               country_code: '',
               name: '',
            }
        };
    },
 created() {

        this.getCountry();
    },
    methods: {
        getCountry() {
            axios
                .get("/api/countries/" + this.$route.params.id)
                .then(res => {
                    this.form = res.data.data;
                })
                .catch(error => {
                    console.log(console.error);
                });
        },
        updateCountry() {
            axios
                .put("/api/countries/" + this.$route.params.id, {
                    country_code: this.form.country_code,
                    name: this.form.name,
                })
                .then(res => {
                    this.$router.push({ name: "CountriesIndex" });
                });
        },
    }
};
</script>

<style>

</style>
