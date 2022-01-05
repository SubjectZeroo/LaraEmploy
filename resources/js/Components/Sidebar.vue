<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
               <i class="fas fa-briefcase"></i>
            </div>
            <div class="sidebar-brand-text mx-3">LaraEmployees</div>
        </a>
        <hr class="sidebar-divider my-0">
        <li class="nav-item active">
            <!-- <a class="nav-link">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a> -->
            <router-link
                        :to="{ name: 'home' }"
                        class="nav-link">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>EDashboard</span>
            </router-link>
        </li>
        <hr class="sidebar-divider">
        <li class="nav-item">
            <!-- <a class="nav-link">
                <i class="fas fa-users"></i>
                <span>Employee Managament</span></a> -->
            <router-link
                        :to="{ name: 'EmployeesIndex' }"
                        class="nav-link">
                         <i class="fas fa-users"></i>
                        <span>Employee Managament</span>
            </router-link>
        </li>
        <hr class="sidebar-divider">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseManagaments"
                aria-expanded="true" aria-controls="collapseManagaments">
                <i class="fas fa-fw fa-wrench"></i>
                <span>System Management</span>
            </a>
            <div id="collapseManagaments" class="collapse" aria-labelledby="headingManagaments"
                data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link
                        :to="{ name: 'CountriesIndex' }"
                        class="collapse-item">

                        <span>Countries</span>
                    </router-link>
                    <router-link
                        :to="{ name: 'StatesIndex' }"
                        class="collapse-item">

                        <span>States</span>
                    </router-link>
                    <router-link
                        :to="{ name: 'CitiesIndex' }"
                        class="collapse-item">

                        <span>Cities</span>
                    </router-link>
                    <router-link
                        :to="{ name: 'DepartmentsIndex' }"
                        class="collapse-item">

                        <span>Departments</span>
                    </router-link>
                </div>
            </div>
        </li>
        <hr class="sidebar-divider d-none d-md-block">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-users-cog"></i>
                <span>User Managament</span>
            </a>
            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                     <router-link
                        :to="{ name: 'UsersIndex' }"
                        class="collapse-item">
                        <span>Users</span>
                    </router-link>
                    <!-- <a href="" class="collapse-item">User</a>
                    <a href="" class="collapse-item">Role</a>
                    <a href="" class="collapse-item">Permission</a> -->
                </div>
            </div>
        </li>
    </ul>

</template>

<script>
export default {
    name: 'sidebar'
}
</script>

<style>

</style>
