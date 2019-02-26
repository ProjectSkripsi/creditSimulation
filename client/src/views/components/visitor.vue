<template>
    <div id="visitorr">
        <div class="row">
            <div class="col-md-6 pt-2">
                <h5>Data Visitor</h5>
            </div>
        </div><hr>
        <div id="tabel-visitor" v-cloak>
            <v-client-table :columns="columns" :data="allVisitor" :options="options">
                <template slot="Tindakan" slot-scope="props" class="text-center">
                    <a @click.prevent="handleDelete(props.row._id)" href="" class="fa fa-trash-o"></a>&nbsp;
                </template>
                
            </v-client-table>
        </div>
    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import BaseDropdown from "@/components/BaseDropdown";
import Tabs from "@/components/Tabs/Tabs.vue";
import axios from 'axios'
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
        Modal
    },
    data() {
        return {
            allVisitor: [],
            columns: ['name', 'address', 'contact','email', 'income', 'tanggungan', 'tenor', 'statusKredit', 'Tindakan'],
            options: {
                headings: {
                    name: 'Nama',
                    address: 'Alamat',
                    contact: 'Kontak',
                    email: 'Email',
                    income: 'Income',
                    tanggungan: 'Tanggungan',
                    tenor: 'Tenor', 
                    statusKredit: 'Status Kredit',
                    _id: '_id',
                },
                requestAdapter(data) {
                    return {
                        sort: data.orderBy ? data.orderBy : 'name',
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
                sortable: ['income', 'tanggungan', 'tenor'],
                filterable: ['name', 'address', 'contact', 'email']
            }
        }
    },

    methods: {
        getVisitor(){
            axios({
                url: baseUrl + `/api/visitor`,
                method: 'get',
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(response =>{
                this.allVisitor = response.data
            })
            .catch(err =>{
                console.log(err);
            })
        },

        handleDelete(id){
            swal({
                title: "Warning",
                text: "Yakin hapus data visitor?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then(willDelete =>{
                if(willDelete){
                    axios({
                        url: baseUrl + `/api/visitor/${id}`,
                        method: `delete`,
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(response =>{
                        this.getVisitor()
                        this.$notify({
                            group: 'foo',
                            title: 'Pemberitahuan!',
                            type: 'error',
                            text: 'Sukses menghapus data visitor',
                            duration: 3000,
                        });
                    })
                    .catch(err =>{
                        this.$notify({
                            group: 'foo',
                            title: 'Pemberitahuan!',
                            type: 'error',
                            text: 'Gagal menghapus, Silahkan coba beberapa saat lagi',
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
        }
    },

    computed: {
        ...mapState(['allHome', 'user']),
        // isLoggedIn : function(){
        //     return this.$store.getters.isLoggedIn
        // }
    },

    mounted() {
        this.getVisitor()
    },
}
</script>

<style>

</style>
