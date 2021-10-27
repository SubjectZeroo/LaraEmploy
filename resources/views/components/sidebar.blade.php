<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
        <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <li class="nav-item">
        <a class="nav-link" href="index.html">
            <i class="fas fa-users"></i>
            <span>Employee Managament</span></a>
    </li>

     <!-- Divider -->
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
                <a href="" class="collapse-item" href="utilities-color.html">Country</a>
                <a href="" class="collapse-item" href="utilities-border.html">State</a>
                <a href="" class="collapse-item" href="utilities-animation.html">Department</a>
                <a href="" class="collapse-item" href="utilities-other.html">City</a>
            </div>
        </div>
    </li>

    <!-- Divider -->
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
                <a href="{{ route('users.index') }}" class="collapse-item" href="utilities-color.html">User</a>
                <a href="" class="collapse-item" href="utilities-border.html">Role</a>
                <a href="" class="collapse-item" href="utilities-animation.html">Permission</a>
            </div>
        </div>
    </li>
</ul>
<!-- End of Sidebar -->