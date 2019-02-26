<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/perumnas-navbar.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="/">
                        <img src="img/brand/perumnas-navbar.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <a href="" v-show="!isLoggedIn" @click.prevent="toLogin"
                       class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon">
                        <i class="fa fa-sign-in" aria-hidden="true"></i> &nbsp;
                        </span>
                        <span class="nav-link-inner--text">login</span>
                    </a>
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">   
            </ul>
            <ul class="navbar-nav navbar-nav-hover ml-lg-auto">
                <li class="nav-item">
                    
                </li>
                <li class="nav-item">
                    
                </li>
                <li class="nav-item">
                    
                </li>
                <li class="nav-item">
                    
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4" >
                    <a href="" v-show="!isLoggedIn" @click.prevent="toLogin"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-sign-in" aria-hidden="true"></i> &nbsp;
                </span>
                        <span class="nav-link-inner--text">login</span>
                    </a>
                    <base-dropdown tag="li" class="nav-item" v-show="isLoggedIn">
                        <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                            <i class="ni ni-collection d-lg-none"></i>
                            <span class="nav-link-inner--text">{{user}}</span>
                        </a>
                        <router-link to="/admin" class="dropdown-item">Dashboard</router-link>
                        <a href="/"  @click.prevent="doLogout"><router-link to="/" class="dropdown-item">  Logout </router-link></a>
                    </base-dropdown>
                </li>
            </ul>
        </base-nav>
        <modal :show.sync="modals.login"
                body-classes="p-0"
                modal-classes="modal-dialog-centered modal-sm">
            <card type="secondary" shadow
                header-classes="bg-white pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0">
                <template>
                    <div class="text-muted text-center mb-3">
                        Sign in
                    </div>
                    <div class="text-center">
                        <img slot="icon" src="img/brand/perumnas-navbar.png" width="80px">                           
                    </div>
                </template>
                <template>
                    <div class="text-center text-muted mb-4">
                        
                    </div>
                    <form role="form">
                        <base-input alternative
                                    v-model="users.username"
                                    class="mb-3"
                                    placeholder="Username"
                                    addon-left-icon="ni ni-email-83">
                        </base-input>
                        <base-input alternative
                                    v-model="users.password"
                                    type="password"
                                    placeholder="Password"
                                    addon-left-icon="ni ni-lock-circle-open">
                        </base-input>
                        <base-checkbox>
                            Remember me
                        </base-checkbox>
                        <div class="text-center">
                            <base-button type="primary" @click.prevent="handleLogin" class="my-4">Sign In</base-button>
                        </div>
                    </form>
                </template>
            </card>
        </modal>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import Modal from "@/components/Modal.vue";
import {mapActions, mapState} from 'vuex'
export default {
    components: {
        BaseNav,
        CloseButton,
        BaseDropdown,
        Modal
    },
    data() {
        return {
            modals: {
                login: false
            },
            users: {}
        }
    },

    methods: {
        ...mapActions(['doLogin']),
        toLogin(){
            this.modals.login = true
        },

        handleLogin(){
            this.doLogin(this.users)
        },

        doLogout(){
            this.$store.dispatch('logout')
        },
    },

    computed: {
        ...mapState(['user']),
        isLoggedIn : function(){
            return this.$store.getters.isLoggedIn
        }
    },

};
</script>
<style>
.navbar-transparent {
    margin-top: 10px;
}
</style>
