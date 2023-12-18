import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Information from '../views/Information.vue'
import Products from '../views/Products.vue'
import Materials from '../views/Materials.vue'
import Accessories from '../views/Accessories.vue'
import Orders from '../views/Orders.vue'
import Profile from '../views/Profile.vue'
import OrderDetails from '../views/OrderDetails.vue'
import AccessoriesDetail from '../views/AccessoriesDetail.vue'
import MaterialDetail from '../views/MaterialDetail.vue'
import ProductDetail from '../views/ProductDetail.vue'
import AddAccessory from "../views/AddAccessory";
import AddMaterial from "../views/AddMaterial";
import AddProduct from "../views/AddProduct";
import MaterialsArrival from "../views/MaterialsArrival";

const routes = [
    {
        path: '/',
        name: 'Information',
        component: Information
    },
    {
        path: '/log-in',
        name: 'Login',
        component: Login
    },
    {
        path: '/nomenclature/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/nomenclature/products/:id',
        name: 'Products details',
        component: ProductDetail
    },
    {
        path: '/nomenclature/materials',
        name: 'Materials',
        component: Materials
    },
    {
        path: '/nomenclature/materials/:id',
        name: 'Materials details',
        component: MaterialDetail
    },
    {
        path: '/nomenclature/accessories',
        name: 'Accessories',
        component: Accessories
    },
    {
        path: '/nomenclature/accessories/:id',
        name: 'Accessories detail',
        component: AccessoriesDetail
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    {
        path: '/orders/:id',
        name: 'Orders details',
        component: OrderDetails
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/add/accessory',
        name: 'Add accessory',
        component: AddAccessory
    },
    {
        path: '/add/material',
        name: 'Add material',
        component: AddMaterial
    },
    {
        path: '/add/product',
        name: 'Add product',
        component: AddProduct
    },
    {
        path: '/add/materials_arrival',
        name: 'Учесть прибытие материалов',
        component: MaterialsArrival
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
