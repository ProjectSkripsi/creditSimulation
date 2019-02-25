<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/perumnas-navbar.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
            
            <!-- <div class="col-md-4"> -->

            <modal :show.sync="modals.login"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                    <template>
                        <div class="text-muted text-center mb-3">
                            <small>Sign in with</small>
                        </div>
                        <div class="btn-wrapper text-center">
                            <base-button type="neutral">
                                <img slot="icon" src="img/icons/common/github.svg">
                                Github
                            </base-button>

                            <base-button type="neutral">
                                <img slot="icon" src="img/icons/common/google.svg">
                                Google
                            </base-button>
                        </div>
                    </template>
                    <template>
                        <div class="text-center text-muted mb-4">
                            <small>Or sign in with credentials</small>
                        </div>
                        <form role="form">
                            <base-input alternative
                                        v-model="user.username"
                                        class="mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input alternative
                                        v-model="user.password"
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
        
                
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <!-- <i class="fa fa-facebook-square"></i> -->
                        <!-- <span class="nav-link-inner--text d-lg-none">Facebook</span> -->
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <!-- <i class="fa fa-instagram"></i> -->
                        <!-- <span class="nav-link-inner--text d-lg-none">Instagram</span> -->
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <!-- <i class="fa fa-twitter-square"></i> -->
                        <!-- <span class="nav-link-inner--text d-lg-none">Twitter</span> -->
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <!-- <i class="fa fa-github"></i> -->
                        <!-- <span class="nav-link-inner--text d-lg-none">Github</span> -->
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href=""  @click.prevent="toLogin"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-sign-in" aria-hidden="true"></i> &nbsp;
                </span>
                        <span class="nav-link-inner--text">login</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import Modal from "@/components/Modal.vue";
import {mapActions, mapGetters} from 'vuex'
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
            user: {}
        }
    },

    methods: {
        ...mapActions(['doLogin']),
        toLogin(){
            this.modals.login = true
        },

        handleLogin(){
            console.log(`user`,this.user);
            
        }

    },

};
</script>
<style>
.navbar-transparent {
    margin-top: 10px;
}
</style>
