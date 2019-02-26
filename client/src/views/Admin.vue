<template>
    <div class="admin" v-show="isLoggedIn">
        <header class="header-global mb-5">
            <base-nav class="navbar-main" transparent type="primary" effect="transparent" expand>
                <a slot="brand" class="navbar-brand mr-lg-5" href="/">
                    <img src="img/brand/perumnas-navbar.png"> 
                </a>
                <div class="row" slot="content-header" slot-scope="{closeMenu}">
                    <div class="col-6 collapse-brand">
                        <a href="#">
                            <img src="img/brand/perumnas-navbar.png">
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <close-button @click="closeMenu"></close-button>
                    </div>
                </div>
                <ul class="navbar-nav navbar-nav-hover ml-lg-auto" >
                    <base-dropdown tag="li" class="nav-item">
                        <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                            <i class="ni ni-collection d-lg-none"></i>
                            <span class="nav-link-inner--text">{{user}}</span>
                        </a>
                        <router-link to="/" class="dropdown-item">Home</router-link>
                        <a href="/"  @click.prevent="doLogout"><router-link to="/" class="dropdown-item">  Logout </router-link></a>
                    </base-dropdown>
                </ul>
            </base-nav>
        </header>
        <section class="section section-components mt-5" id="admin">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="mb-3">
                            <small class="text-uppercase font-weight-bold"></small>
                        </div>
                        <tabs fill class="flex-column flex-md-row">
                            <card shadow slot-scope="{activeTabIndex}">
                                <tab-pane key="tab1">
                                    <template slot="title">
                                        <i class="fa fa-home" aria-hidden="true"></i> Data Rumah
                                    </template>
                                    <div class="row">
                                        <div class="col-md-6 pt-2">
                                            <h5>Data Spesifikasi Rumah</h5>
                                        </div>
                                    </div><hr>
                                    <div id="tabel" v-cloak>
                                        <v-client-table :columns="columns" :data="allHome" :options="options">
                                            <template slot="Tindakan" slot-scope="props" class="text-center">
                                                <a @click.prevent="view(props.row)" href="" class="fa fa-pencil-square-o"></a> &nbsp;
                                                <a @click.prevent="view(props.row)" href="" class="fa fa-eye"></a> &nbsp;
                                                <a @click.prevent="handleDelete(props.row._id)" href="" class="fa fa-trash-o"></a>&nbsp;
                                            </template>
                                            <div slot="child_row" slot-scope="props">
                                                <div class="row">
                                                    <div class="col-md-7">
                                                        <h6>Detail Spesifikasi Rumah {{ props.row.type }}</h6>
                                                    </div>
                                                </div>
                                                <tabs fill class="flex-column flex-md-row">
                                                    <card shadow slot-scope="{activeTabIndex}">
                                                        <tab-pane key="tab9">
                                                            <template slot="title">
                                                                <small class="text-uppercase"><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp; Spesifikasi Rumah</small>
                                                            </template>
                                                                <p class="description" v-html="props.row.specification"> </p>
                                                        </tab-pane>
                                                        <tab-pane key="tab8">
                                                            <template slot="title">
                                                                <small class="text-uppercase"><i class="fa fa-cloud-upload" aria-hidden="true"></i>&nbsp; Denah</small>
                                                            </template>
                                                                <div class="text-center mb-3">
                                                                    <img class="text-center" :src="props.row.plan">
                                                                </div>
                                                                <div class="custom-file">
                                                                    <input type="file" min="0" class="form-control" @change="getImage($event)">
                                                                </div>
                                                                <div class="text-center mt-4">
                                                                    <button type="button" @click.prevent="savePlan(props.row._id)" class="btn btn-outline-primary btn-sm"><i class="fa fa-cloud-upload" aria-hidden="true"></i> Upload</button>
                                                                </div>
                                                        </tab-pane>
                                                        <tab-pane key="tab7">
                                                            <template slot="title">
                                                                <small class="text-uppercase"><i class="fa fa-cloud-upload" aria-hidden="true"></i> &nbsp;Tampak Depan</small>
                                                            </template>
                                                                <div class="text-center mb-3">
                                                                    <img class="text-center" :src="props.row.frontView">
                                                                </div>
                                                                <div class="custom-file">
                                                                    <input type="file" min="0" class="form-control" @change="getPicture($event)">
                                                                </div>
                                                                <div class="text-center mt-4">
                                                                    <button type="button" @click.prevent="saveFront(props.row._id)" class="btn btn-outline-primary btn-sm"><i class="fa fa-cloud-upload" aria-hidden="true"></i> Upload</button>
                                                                </div>
                                                        </tab-pane>
                                                        
                                                    </card>
                                                </tabs>
                                                
                                            </div>
                                        </v-client-table>
                                    </div>
                                </tab-pane>

                                <tab-pane key="tab3">
                                    <template slot="title">
                                        <i class="fa fa-plus" aria-hidden="true"></i> Rumah
                                    </template>
                                    <div class="row">
                                        <div class="col-md-6 pt-2">
                                            <h5>FORM INPUT DATA RUMAH</h5>
                                        </div>
                                    </div><hr>
                                    <form>
                                        <div class="row">
                                            <div class="col-md-4 text-right pt-2">
                                                <label>Jenis Rumah :</label>   
                                            </div>
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <input type="text" v-model="home.type" class="form-control form-control-alternative" placeholder="Jenis Rumah">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4 text-right pt-2">
                                                <label>Tipe Rumah :</label>   
                                            </div>
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <input type="number" v-model="home.homeType" class="form-control form-control-alternative" placeholder="Tipe Rumah">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4 text-right pt-2">
                                                <label>Luas Bangunan :</label>   
                                            </div>
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <input type="text" v-model="home.buildingArea" class="form-control form-control-alternative" placeholder="Luas Bangunan">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4 text-right pt-2">
                                                <label>Luas Tanah :</label>   
                                            </div>
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <input type="text" v-model="home.surfaceArea" class="form-control form-control-alternative" placeholder="Luas Tanah">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4 text-right pt-2">
                                                <label>Jumlah Kamar :</label>   
                                            </div>
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <input type="number" v-model="home.bedroom" class="form-control form-control-alternative" placeholder="Jumlah Kamar">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4 text-right pt-2">
                                                <label>Jumlah WC :</label>   
                                            </div>
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <input type="number" v-model="home.manyToilet" class="form-control form-control-alternative" placeholder="Jumlah WC">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4 text-right pt-2">
                                                <label>Harga :</label>   
                                            </div>
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <input type="number" v-model="home.price" class="form-control form-control-alternative" placeholder="Harga">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 text-center mt-2">
                                                <label>Spesifikasi :</label>
                                                <wysiwyg v-model="home.specification"/>
                                                <button type="button" @click.prevent="handleSave" class="btn btn-success mt-3"><i class="fa fa-floppy-o" aria-hidden="true"></i> simpan</button>
                                            </div>
                                        </div>
                                    </form>
                                </tab-pane>

                                <tab-pane key="tab2">
                                    <template slot="title">
                                        <i class="fa fa-user" aria-hidden="true"></i> Data Visitor
                                    </template>
                                    <visitor/>
                                </tab-pane>
                            </card>
                        </tabs>
                    </div>
                </div>
            </div>
        </section>

        <!-- viewData -->
        <modal :show.sync="modals.detil"
                body-classes="p-0"
                modal-classes="modal-dialog-centered modal-sm">
                <h6 slot="header" class="modal-title" id="modal-title-default">Detail Spesifikasi Type {{ this.viewData.type }}</h6>
            <card type="secondary" shadow
                header-classes="bg-white pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0">
                <template>
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <th>Jenis</th>
                                <td> {{ viewData.type }}</td>
                            </tr>
                            <tr>
                                <th>Tipe</th>
                                <td> {{ viewData.homeType }}</td>
                            </tr>
                            <tr>
                                <th>Luas Bangunan</th>
                                <td> {{ viewData.buildingArea }}</td>
                            </tr>
                            <tr>
                                <th>Luas Tanah</th>
                                <td> {{ viewData.surfaceArea }}</td>
                            </tr>
                            <tr>
                                <th>Kamar</th>
                                <td> {{ viewData.bedroom }}</td>
                            </tr>
                            <tr>
                                <th>Toilet</th>
                                <td> {{ viewData.manyToilet }}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td> {{ viewData.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <label>Spesifikasi: </label>
                        <card id="wizi" v-html="viewData.specification"> </card>
                </template>
            </card>
        </modal>
        <footer class="footer has-cards">
            <div class="container">
                <div class="row row-grid align-items-center my-md">
                    <div class="col-lg-6">
                        <h4 class="text-primary font-weight-light mb-2">PERUMNAS REGIONAL 7</h4>
                        <h6 class="mb-0 font-weight-light">JL. Letjen Hertasning Kassi-Kassi Rappocini<br> Makassar Sulawesi Selatan 90222
                        <br> Tel. +62 411 845 121 <br> Fax. +62 411 862 238 <br>
                            customer.regional7@perumnas.co.id</h6>
                    </div>
                    <div class="col-lg-6 text-lg-center btn-wrapper">
                        <a target="_blank" rel="noopener" href="https://twitter.com/perumnas_reg7"
                        class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                        data-original-title="Follow us">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a target="_blank" rel="noopener" href="https://www.facebook.com/niaga.perumnastujuh/"
                        class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                        data-original-title="Like us">
                            <i class="fa fa-facebook-square"></i>
                        </a>
                    </div>
                </div>
                <hr>
                <div class="row align-items-center justify-content-md-between">
                    <div class="col-md-6">
                        <div class="copyright">
                            &copy; {{year}}
                            <a href="http://reg7.perumnas.co.id/" target="_blank" rel="noopener">Perumnas</a>.
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="nav nav-footer justify-content-end">
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import BaseDropdown from "@/components/BaseDropdown";
import Tabs from "@/components/Tabs/Tabs.vue";
import axios from 'axios'
import Visitor from "./components/visitor";
import TabPane from "@/components/Tabs/TabPane.vue";
import {mapActions, mapState} from 'vuex'
const baseUrl = `http://35.187.245.180`
// const baseUrl = `http://localhost:3000`
export default {
    components: {
        BaseNav,
        CloseButton,
        BaseDropdown,
        Tabs,
        TabPane,
        Modal,
        Visitor
    },

    data() {
        return {
            year: new Date().getFullYear(),
            plan: '',
            frontView: '',
            modals: {
                detil: false
            },
            viewData: [],
            home: {},
            columns: ['type', 'homeType', 'buildingArea','surfaceArea', 'bedroom', 'manyToilet', 'price', 'Tindakan'],
            options: {
                headings: {
                    type: 'Jenis',
                    homeType: 'Tipe',
                    buildingArea: 'Luas Bangunan',
                    surfaceArea: 'Luas Tanah',
                    bedroom: 'Kamar Tidur',
                    manyToilet: 'WC',
                    price: 'Harga', 
                    _id: '_id',
                },
                requestAdapter(data) {
                    return {
                        sort: data.orderBy ? data.orderBy : 'type',
                        direction: data.ascending ? 'asc' : 'desc'
                    }
                },
                templates: {
                    // createdAt: function(row) {
                    //     return moment(row.createdAt).format('DD-MM-YYYY');
                    // },
                },
                uniqueKey: '_id',
                perPage: 10,
                perPageValues:[10],
                sortable: ['homeType', 'buildingArea', 'surfaceArea', 'bedroom', 'price'],
                filterable: ['type', 'homeType', 'price']
            }
        }
    },

    methods: {
        getImage(link) {
            let input = link.target
            this.plan = link.target.files[0]
        },

        getPicture(link){
            let input = link.target
            this.frontView = link.target.files[0]
        },

        doLogout(){
            this.$store.dispatch('logout')
        },

        saveFront(id){
            if(this.plan === ''){
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'warn',
                    text: 'Silahkan pilih gambar terlebih dahulu',
                });
            } else {
                let formPicture = new FormData()
                formPicture.append('image', this.frontView)
                axios.post(baseUrl+`/api/home/upload`, formPicture,{})
                .then(response =>{
                    axios({
                        url:  baseUrl + `/api/home/front/${id}`,
                        method: 'PATCH',
                        data: {
                            frontView: response.data.link
                        },
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(res =>{
                        this.$store.dispatch('getHome')
                        this.$notify({
                            group: 'foo',
                            title: 'Pemberitahuan!',
                            type: 'success',
                            text: 'Sukses upload Rumah tampak depan',
                            duration: 3000,
                        });
                    })
                    .catch(err =>{
                        this.$notify({
                            group: 'foo',
                            title: 'Pemberitahuan!',
                            type: 'warn',
                            text: 'Upload Gagal, Silahkan coba beberapa saat lagi',
                        });
                    })
                })
                .catch(err =>{
                    this.$notify({
                        group: 'foo',
                        title: 'Pemberitahuan!',
                        type: 'warn',
                        text: 'Gagal Uploud, Silahkan coba beberapa saat lagi',
                        duration: 3000,
                    });
                })
            }
        },

        savePlan(id){
            if(this.plan === ''){
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'warn',
                    text: 'Silahkan pilih gambar terlebih dahulu',
                });
            } else {
                let formPicture = new FormData()
                formPicture.append('image', this.plan)
                axios.post(baseUrl+`/api/home/upload`, formPicture,{})
                .then(response =>{
                    axios({
                        url:  baseUrl + `/api/home/plan/${id}`,
                        method: 'PATCH',
                        data: {
                            plan: response.data.link
                        },
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(res =>{
                        this.$store.dispatch('getHome')
                        this.$notify({
                            group: 'foo',
                            title: 'Pemberitahuan!',
                            type: 'success',
                            text: 'Sukses upload Denah Rumah',
                            duration: 3000,
                        });
                    })
                    .catch(err =>{
                        this.$notify({
                            group: 'foo',
                            title: 'Pemberitahuan!',
                            type: 'warn',
                            text: 'Upload Gagal, Silahkan coba beberapa saat lagi',
                        });
                    })
                })
                .catch(err =>{
                    this.$notify({
                        group: 'foo',
                        title: 'Pemberitahuan!',
                        type: 'warn',
                        text: 'Gagal Uploud, Silahkan coba beberapa saat lagi',
                        duration: 3000,
                    });
                })
            }
        },

        handleSave(){
            if(this.home.type === undefined || this.home.homeType === undefined || this.home.buildingArea === undefined || this.home.surfaceArea === undefined || this.home.manyToilet === undefined|| this.home.price === undefined){
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'warn',
                    text: 'Silahkan mengisi data dengan lengkap',
                });
                this.home = {}
            } else {
                axios({
                    url: baseUrl + `/api/home`,
                    method: 'post',
                    data: this.home,
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then(response =>{
                    this.home = {}
                    this.$store.dispatch('getHome')
                    this.$notify({
                        group: 'foo',
                        title: 'Pemberitahuan!',
                        type: 'success',
                        text: 'Sukses menambahkan data rumah',
                        duration: 3000,
                    });
                })
                .catch(err =>{
                    this.$notify({
                        group: 'foo',
                        title: 'Pemberitahuan!',
                        type: 'warning',
                        text: 'Gagal menambahkan data rumah, Silahkan relogin!',
                        duration: 3000,
                    });
                })
            }
        },

        handleDelete(id){
            swal({
                title: "Warning",
                text: "Yakin hapus data rumah?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then(willDelete =>{
                if(willDelete){
                    axios({
                        url: baseUrl + `/api/home/${id}`,
                        method: `delete`,
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(response =>{
                        this.$store.dispatch('getHome')
                        this.$notify({
                            group: 'foo',
                            title: 'Pemberitahuan!',
                            type: 'error',
                            text: 'Sukses menghapus data',
                            duration: 3000,
                        });
                    })
                    .catch(err =>{
                        this.$notify({
                            group: 'foo',
                            title: 'Pemberitahuan!',
                            type: 'error',
                            text: 'Gagal menghapus, Silahkan login dahulu',
                            duration: 3000,
                        });
                    })
                } else {
                    this.$notify({
                        group: 'foo',
                        title: 'Pemberitahuan!',
                        type: 'warn',
                        text: 'Batal menghapus data',
                        duration: 3000,
                    });
                }
            })
            .catch(err =>{
                console.log(err);
            })  
        },

        view(data){
            this.viewData = data
            this.modals.detil = true
        },
    },

    computed: {
        ...mapState(['allHome', 'user']),
        isLoggedIn : function(){
            return this.$store.getters.isLoggedIn
        }
    },

    mounted() {
        this.$store.dispatch('getHome')
    },
}
</script>

<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

VuePagination {
  text-align: center;
  font-size: 12px;
}

.vue-pagination-ad {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.card-body {
    font-size: 12px;
}
/* .form-control {
    font-size: 12px;
} */

.col-md-12 {
    font-size: 12px;
}

#wizi{
    font-size: 12px;
}


th:nth-child(5) {
  text-align: center;
}

.ff{
    font-size: 13px;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
.img-fluid{
    max-width: 100%; 
    height: auto;
}

.modal-body {
    font-size: 12px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

[v-cloak] {
  display:none;
}

.panel-body {
    padding: 15px;
}

</style>
