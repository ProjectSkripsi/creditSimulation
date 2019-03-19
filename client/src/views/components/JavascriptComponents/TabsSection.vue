<template>
<div>
    <div class="bg-secondary" v-show="result !== '' ">
        <div class="container">
            <card id="result">
                <div class="text-center">
                <h6>Rekomendasi Rumah</h6>
                </div> <hr>
                <div class="row row-grid align-items-center" >
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="result.frontView" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                        class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h6 class="display-3 font-weight-bold text-white">Tampak Depan</h6>
                            </blockquote> 
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <h3>Model {{result.type}}</h3><hr>
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>Tipe</th>
                                        <td> {{ result.homeType }}</td>
                                    </tr>
                                    <tr>
                                        <th>Luas Bangunan</th>
                                        <td> {{ result.buildingArea }} m2</td>
                                    </tr>
                                    <tr>
                                        <th>Luas Tanah</th>
                                        <td> {{ result.surfaceArea }} m2</td>
                                    </tr>
                                    <tr>
                                        <th>Kamar</th>
                                        <td> {{ result.bedroom }}</td>
                                    </tr>
                                    <tr>
                                        <th>Toilet</th>
                                        <td> {{ result.manyToilet }}</td>
                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <td> Rp {{ (result.price) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row row-grid align-items-center" >
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="result.plan" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                        class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h6 class="display-3 font-weight-bold text-white">Denah</h6>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <h3>Detil Spesifikasi</h3>
                            <p v-html="result.specification"></p>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-12">
                        <table class="table table-bordered" v-show="this.smartResult !== {}">
                            <tr>
                                <th class="bg-secondary">Proker</th>
                                <th class="bg-secondary">K1</th>
                                <th class="bg-secondary">K2</th>
                                <th class="bg-secondary">K3</th>
                                <th class="bg-secondary">K4</th>
                                <th class="bg-secondary">C1</th>
                                <th class="bg-secondary">C2</th>
                                <th class="bg-secondary">C3</th>
                                <th class="bg-secondary">C4</th>
                                <th class="bg-secondary">Total</th>
                            </tr>
                            <tr>
                                <td>{{smartResult.name}}</td>
                                <td>{{smartResult.income}}</td>
                                <td>{{smartResult.tanggungan}}</td>
                                <td>{{smartResult.tenor * 12}}</td>
                                <td>{{smartResult.statusKredit}}</td>
                                <td>{{smartResult.c1}}</td>
                                <td>{{smartResult.c2}}</td>
                                <td>{{smartResult.c3}}</td>
                                <td>{{smartResult.c4}}</td>
                                <td>{{smartResult.total}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </card>
        </div>
    </div>
    <div class="container">
        <h3 class="h4 text-success font-weight-bold mb-4 pt-5">Simulasi</h3>
        <div class="row justify-content-center" id="simulasi">
            <div class="col-lg-12">
                <!-- Tabs with icons -->
                <div class="mb-3">
                    <small class="text-uppercase font-weight-bold"></small>
                </div>
                <tabs fill class="flex-column flex-md-row">
                    <card shadow >
                        <tab-pane key="tab1">
                            <template slot="title">
                                <i class="fa fa-calculator" aria-hidden="true"></i> Simulasi
                            </template>
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="description">Nama Lengkap: </p>
                                            <input type="text" class="form-control form-control-alternative" v-model="visit.name" placeholder="Nama Lengkap">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="description">Alamat: </p>
                                            <input type="text" class="form-control form-control-alternative" v-model="visit.address" placeholder="Alamat">
                                        </div>
                                    </div>
                                </div><hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="description">No. Handphone </p>
                                            <input type="text" class="form-control form-control-alternative" v-model="visit.contact" placeholder="No. Handphone">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="description">Email: </p>
                                            <input type="text" class="form-control form-control-alternative" v-model="visit.email" placeholder="Email">
                                        </div>
                                    </div>
                                </div><hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="description">Total Pendapatan: </p>
                                            <input type="text" class="form-control form-control-alternative" v-model="visit.income" placeholder="Total Pendapatan">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="description">Jumlah Tanggungan: </p>
                                            <input type="text" class="form-control form-control-alternative" v-model="visit.tanggungan" placeholder="Jumlah Tanggungan">
                                        </div>
                                    </div>
                                </div><hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="description">Lama Kredit(Tahun): </p>
                                            <input type="number" min="5" class="form-control form-control-alternative" v-model="visit.tenor" placeholder="Lama Kredit">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="description">Status Kredit Akhir: </p>
                                            <select class="form-control form-control-alternative" v-model="visit.statusKredit">
                                                <option value="">Pilih</option>
                                                <option value="Dalam Perhatian Khusus">Dalam Perhatian Khusus</option>
                                                <option value="Kredit Diragukan">Kredit Diragukan</option>
                                                <option value="Kredit Lancar">Kredit Lancar</option>
                                                <option value="Kredit Tidak Lancar">Kredit Tidak Lancar</option>
                                            </select>
                                        </div>
                                    </div>
                                </div><hr>
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <button type="button" class="btn btn-outline-success" v-scroll-to="'#recom'" @click.prevent="findCreate" ><i class="fa fa-search" aria-hidden="true"></i> Cari</button>
                                    </div>
                                </div>
                            </form>
                        </tab-pane>
                    </card>
                </tabs>
            </div>
        </div>
    </div>
    
        
</div>
</template>
<script>
import axios from 'axios'
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import {mapActions, mapState} from 'vuex'
const baseUrl = `http://35.187.245.180`
// const baseUrl = `http://localhost:3000`
export default {
    components: {
        Tabs,
        TabPane
    },
    data() {
        return {
            visit: {},
            result: '',
            simulate: {},
            smartResult: {},
        }
    },
    computed: {
        ...mapState(['allHome']),
        
    },

    mounted() {
        this.$store.dispatch('getHome')
    },

    methods: {
        findCreate(){
            if(this.visit.name === undefined || this.visit.address === undefined 
            || this.visit.contact === undefined || this.visit.email === undefined 
            || this.visit.income === undefined || this.visit.tanggungan === undefined 
            || this.visit.tenor === undefined || this.visit.statusKredit === undefined ){
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'warn',
                    text: 'Silahkan mengisi data dengan lengkap',
                });
                this.visit = {}
            } else {
                this.result = ''
                axios({
                    url: baseUrl + `/api/visitor`,
                    method: 'post',
                    data: this.visit
                })
                .then(response =>{
                    let user = response.data._id
                    let income = response.data.income
                    let tanggung = response.data.tanggungan
                    let durasi = response.data.tenor * 12
                    let status = response.data.statusKredit
                    this.simulate.k1 = income
                    this.simulate.k2 = tanggung
                    this.simulate.k3 = durasi
                    this.simulate.k4 = status
                    if(income >= 8000001){
                        this.simulate.c1 = 0.457
                    } else if(income <= 8000000 && income >= 6000001) {
                        this.simulate.c1 = 0.257
                    } else if(income <= 6000000 && income >= 4000001) {
                        this.simulate.c1 = 0.157
                    } else if(income <= 4000000 && income >= 3000001) {
                        this.simulate.c1 = 0.09
                    } else if(income <= 3000000 && income >= 2000000) {
                        this.simulate.c1 = 0.004
                    } else {
                        this.simulate.c1 = 0
                    }

                    if(tanggung > 4){
                        this.simulate.c2 = 0.111
                    } else if(tanggung >= 3 && tanggung <= 4){
                        this.simulate.c2 = 0.278
                    } else if(tanggung >= 0 && tanggung <= 2){
                        this.simulate.c2 = 0.611
                    }

                    if(durasi > 180){
                        this.simulate.c3 = 0.611
                    } else if(durasi >= 121 && durasi <= 180){
                        this.simulate.c3 = 0.278
                    } else if(durasi >= 72 && durasi <= 120){
                        this.simulate.c3 = 0.111
                    } else {
                        this.simulate.c3 = 0
                    }

                    if(status === 'Kredit Lancar'){
                        this.simulate.c4 = 0.521
                    } else if(status === 'Kredit Diragukan'){
                        this.simulate.c4 = 0.271
                    } else if(status === 'Dalam Perhatian Khusus'){
                        this.simulate.c4 = 0.116
                    } else if(status === 'Kredit Tidak Lancar'){
                        this.simulate.c4 = 0.063
                    }
                    this.simulate.total = this.simulate.c1 + this.simulate.c2 + this.simulate.c3 + this.simulate.c4
                    axios({
                        url: baseUrl + `/api/visitor/${user}`,
                        method: `put`,
                        data: this.simulate
                    })
                    .then(result =>{
                        let simId = result.data._id
                        axios({
                            url: baseUrl + `/api/visitor/result/${simId}`,
                            method: `get`
                        })
                        .then(response =>{
                            this.smartResult = response.data
                            for(let i in this.allHome){
                                if(this.smartResult.total >= 1.40 && this.allHome[i].price >= 600000000){
                                    this.result = this.allHome[i]
                                } else if((this.smartResult.total >= 1.10 && this.smartResult.total <= 1.30 )&& (this.allHome[i].price >= 370000000 && this.allHome[i].price < 600000000)){
                                    this.result = this.allHome[i]
                                } else if((this.smartResult.total >= 0.800 && this.smartResult.total <= 1.00 )&& (this.allHome[i].price >= 300000000 && this.allHome[i].price < 370000000)){
                                    this.result = this.allHome[i]
                                } else if((this.smartResult.total >= 0.500 && this.smartResult.total <= 0.700 )&& (this.allHome[i].price >= 250000000 && this.allHome[i].price < 300000000)){
                                    this.result = this.allHome[i]
                                } else if((this.smartResult.total >= 0.200 && this.smartResult.total <= 0.400 )&& (this.allHome[i].price >= 180000000 && this.allHome[i].price < 250000000)){
                                    this.result = this.allHome[i]
                                }
                            }  
                            console.log(this.smartResult);
                            
                        })
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                    
                })
                .catch(err =>{
                    console.log(`errrrr`,err);
                })

            }
        },

        toIdr(a){
           return "IDR " + a.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
        }
    },

};
</script>
<style lang="scss" scoped>
.section{
    padding-bottom: 1rem;
}
</style>

