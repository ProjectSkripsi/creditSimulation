import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import router from './router'
import { log } from 'util';
// const baseUrl = `http://localhost:3000`
const baseUrl = `http://35.187.245.180`
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allHome: [],
        user: '',
        token: localStorage.getItem('token') || '',
        status: '',
    },
    mutations: {
        LIST_HOME(state, home){
            state.allHome = home
        },
        SET_USER(state, user){
            state.user = user
        },
        AUTH_SUCCESS(state, token){
            state.status = 'success'
            state.token = token
        },
        auth_request(state){
			state.status = 'loading'
        },
        auth_error(state){
	    	state.status = 'error'
        },
        logout(state){
	    	state.status = ''
	    	state.token = ''
        },
    },

    actions: {
        getHome({commit}, payload){
            axios({
                url: baseUrl + `/api/home`,
                method: 'get',
            })
            .then(response =>{
                let home = response.data
                commit('LIST_HOME', home)
            })
            .catch(err =>{
                console.log(err);
                
            })
        },

        doLogin({commit}, payload){
            return new Promise((resolve, reject) =>{
                commit('auth_request')
                axios({
                    url: baseUrl + `/api/users/signin`,
                    method: `post`,
                    data: payload
                })
                .then(response =>{
                    let token = response.data.token
                    let userx = response.data.user
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('AUTH_SUCCESS', token, userx)
                    window.location = '/#/admin'
                    resolve(response)
                })
                .catch(err => {
                    commit('auth_error')
                    swal({
                        title: "Username/Password Salah!",
                        text: "Silhakan masukkan username & password dengan benar",
                        icon: "error",
                    });
	            })
            })
        },
        cekLogin({commit}){
			axios({
				url: baseUrl + `/api/users/`,
				method: 'GET',
				headers: {
					token: localStorage.getItem('token')
				}
			})
			.then(response => {
                let user = response.data.user
                commit('SET_USER', user)
			})
			.catch(err =>{
                commit('SET_USER', '')
                commit('logout')
                // console.log(err);
                
			})
        },
        
        logout({commit, dispatch}){
			return new Promise((resolve, reject) => {
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                commit('logout')
                resolve()
		  	})
		},
    },
    getters : {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
	}


})