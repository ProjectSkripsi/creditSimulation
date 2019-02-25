import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
const baseUrl = `http://localhost:3000`
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allHome: []
    },
    mutations: {
        LIST_HOME(state, home){
            state.allHome = home
        }
    },

    actions: {
        doLogin({commit}, payload){
            console.log('store',payload);
        },

        getHome({commit}, payload){
            axios({
                url: baseUrl + `/api/home`,
                method: 'get'
            })
            .then(response =>{
                let home = response.data
                commit('LIST_HOME', home)
            })
        }
    }


})