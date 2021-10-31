<template>
    <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <Navbar></Navbar>
                <div class="container-fluid">
                     <router-view></router-view>
                </div>

            </div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
// import './Styles/app.scss'
export default {
    name: "app",
    components: {
        Navbar: () => import("./Components/Navbar.vue"),
        Sidebar: () => import("./Components/Sidebar.vue"),
        Footer: () => import("./Components/Footer.vue")
    }
};
</script>
