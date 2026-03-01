import {createRouter, createWebHistory} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Login from '../features/auth/pages/LoginPage.vue'
// import Signup from '../features/auth/pages/RegisterPage.vue'
import MainLayout from '../layouts/MainLayout.vue' 
import AuthLayout from '../layouts/AuthLayout.vue' 

import HomePage from '../features/home/pages/HomePage.vue'
import LoginPage from '../features/auth/pages/LoginPage.vue'
import RegisterPage from '../features/auth/pages/RegisterPage.vue'
import ProductsPage from '../features/products/pages/ProductsPage.vue'
import ProductDetailsPage from '../features/products/pages/ProductDetailsPage.vue'

const router = createRouter({
    history: createWebHistory(),
    // routes: [
    //     {
    //         path: '/',
    //         name: 'home',
    //         component: HomeView
    //     },
    //     {
    //         path: '/login',
    //         name: 'login',
    //         component: Login
    //     },
    //     {
    //         path: '/signup',
    //         name: 'signup',
    //         component: Signup
    //     },

    // ]
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomePage
                },
                {
                    path: 'products',
                    component: ProductsPage
                },
                {
                    path: 'products/:id', // dynamic route
                    component: ProductDetailsPage
                }
            ]
        },
        {
            path: '/',
            component: AuthLayout,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: LoginPage
                },
                {
                    path: 'signup',
                    name: 'signup',
                    component: RegisterPage
                }
            ]
        }
    ]
})

export default router