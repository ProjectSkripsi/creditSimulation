<template>
    <div class="row justify-content-center" id="simulasi">
        <div class="col-lg-12">
            <!-- Tabs with icons -->
            <div class="mb-3">
                <small class="text-uppercase font-weight-bold"></small>
            </div>
            <tabs fill class="flex-column flex-md-row">
                <card shadow slot-scope="{activeTabIndex}">
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
                                        <p class="description">Lama Kredit: </p>
                                        <input type="number" class="form-control form-control-alternative" v-model="visit.tenor" placeholder="Lama Kredit">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <p class="description">Status Kredit Akhir: </p>
                                        <input type="text" class="form-control form-control-alternative" v-model="visit.statusKredit" placeholder="Lancar/Macet">
                                    </div>
                                </div>
                            </div><hr>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <button type="button" class="btn btn-outline-success" @click.prevent="findCreate" ><i class="fa fa-search" aria-hidden="true"></i> Cari</button>
                                </div>
                            </div>
                        </form>
                    </tab-pane>
                </card>
            </tabs>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import {mapActions, mapState} from 'vuex'
const baseUrl = `http://localhost:3000`
export default {
    components: {
        Tabs,
        TabPane
    },
    data() {
        return {
            visit: {}
        }
    },
    methods: {
        findCreate(){
            axios({
                url: baseUrl + `/api/visitor`,
                method: 'post',
                data: this.visit
            })
            .then(response =>{
                console.log(`ini`, response);
                this.visit = {}
            })
            .catch(err =>{
                console.log(`errrrr`,err);
                
            })
        }
    },

};
</script>
<style>
</style>
