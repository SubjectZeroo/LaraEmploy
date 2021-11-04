<template>
  <div>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create City</h1>
    </div>
    <div class="card">
            <div class="card-header">Create City</div>
            <form  @submit.prevent="storeCity" @keydown="form.errors.clear($event.target.name)">
                <div class="card-body">
                    <div class="form-group">
                        <label for="state_id">Select State</label>
                        <select
                                v-model="form.state_id"
                                class="custom-select"
                                name="state">
                               <option value="" selected>Select State</option>
                               <option
                                    v-for="state in states"
                                    :key="state.id"
                                    :value="state.id">
                                    {{ state.name }}
                                </option>
                        </select>
                        <div class="help is-danger" v-if="form.errors.has('state_id')" v-text="form.errors.get('state_id')"></div>
                    </div>
                    <div class="form-group">
                        <label for="name">State Name</label>
                        <input type="text" class="form-control" name="name"  v-model="form.name">
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Create City</button>
                    <router-link
                                :to="{ name: 'CitiesIndex' }"
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
            states: [],
            form: new Form({
                state_id: '',
                name: '',
            })
        };
    },
    created() {
        this.getStates();
    },

    methods: {
        getStates() {
            axios
                .get("/api/employees/states")
                .then(res => {
                    this.states = res.data;
                })
                .catch(error => {
                    console.log(console.error);
                });
        },

        storeCity() {
            this.form.submit('post', '/api/cities')
                .then(
                    data => console.log(data),
                     this.$router.push({ name: "CitiesIndex" })
                )
                .catch(errors => console.log(errors));
        },

    }
};
</script>

<style>

</style>
