<template>
    <div id="app">
        <router-view name="header"></router-view>
        <notifications group="foo" position="top right"/>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>

        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    FadeTransition
  },
  computed: {
    ...mapState(['user', 'token']),
    isLoggedIn : function(){
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
		cekLogin() {
      let token = localStorage.getItem('token')
      if(!token) {
        this.$router.push('/')
      } 
    },
  },
  
  mounted() {
    this.cekLogin()
    
  },
	
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err;
      });
    });
    this.$store.dispatch('cekLogin')
  },


};
</script>
<style lang="scss">
  .vue-notifyjs.notifications{
    .list-move {
      transition: transform 0.3s, opacity 0.4s;
    }
    .list-item {
      display: inline-block;
      margin-right: 10px;

    }
    .list-enter-active {
      transition: transform 0.2s ease-in, opacity 0.4s ease-in;
    }
    .list-leave-active {
      transition: transform 1s ease-out, opacity 0.4s ease-out;
    }

    .list-enter {
      opacity: 0;
      transform: scale(1.1);

    }
    .list-leave-to {
      opacity: 0;
      transform: scale(1.2, 0.7);
    }
  }
</style>