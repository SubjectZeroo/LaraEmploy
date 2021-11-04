const routes = [
    {
      path: '/home',
      component: () => import('../Pages/Home.vue'),
      name: 'home'
    },
    {
        path: '/employees',
        component: () => import('../Pages/employees/Index.vue'),
        name: 'EmployeesIndex'
    },
    {
        path: '/employees/create',
        component: () => import('../Pages/employees/Create.vue'),
        name: 'EmployeesCreate'
    },
    {
        path: '/employees/:id',
        component: () => import('../Pages/employees/Edit.vue'),
        name: 'EmployeesEdit'
    },
    ,
    {
        path: '/countries',
        component: () => import('../Pages/countries/Index.vue'),
        name: 'CountriesIndex'
    },
    {
        path: '/countries/create',
        component: () => import('../Pages/countries/Create.vue'),
        name: 'CountriesCreate'
    },
    ,
    {
        path: '/states',
        component: () => import('../Pages/states/Index.vue'),
        name: 'StatesIndex'
    },
    {
        path: '/states/create',
        component: () => import('../Pages/states/Create.vue'),
        name: 'StatesCreate'
    },
    ,
    {
        path: '/cities',
        component: () => import('../Pages/cities/Index.vue'),
        name: 'CitiesIndex'
    },
    {
        path: '/cities/create',
        component: () => import('../Pages/cities/Create.vue'),
        name: 'CitiesCreate'
    },
    ,
    {
        path: '/departments',
        component: () => import('../Pages/departments/Index.vue'),
        name: 'DepartmentsIndex'
    },
    {
        path: '/departments/create',
        component: () => import('../Pages/departments/Create.vue'),
        name: 'DepartmentsCreate'
    },
    {
        path: '/users',
        component: () => import('../Pages/users/Index.vue'),
        name: 'UsersIndex'
    },
    {
        path: '/users/create',
        component: () => import('../Pages/users/Create.vue'),
        name: 'UsersCreate'
    },
  ]

  export default routes;
