<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Tambah Data
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="dataDiri">

                    <div class="form-group">
                      <label for="nama">Nomor ID Keluarga:</label>
                      <input type="text"
                        class="form-control" required name="no_kk" v-model="kepala.no_kk" id="no_kk" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Nomornya Dong Bang </small>
                    </div>
                    <div class="form-group">
                      <label for="">Nama Ayah:</label>
                      <input type="text"
                        class="form-control" required name="kepala"  id="kepala" v-model="kepala.kepala" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Namanya Dong Bang</small>
                    </div>
                    <div class="form-group">
                      <label for="nama">Nama Ibu:</label>
                      <input type="text"
                        class="form-control" required name="desa"  id="desa" v-model="kepala.desa" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Namanya Dong Bang </small>
                    </div>
                    <div class="form-group">
                      <label for="">Tempat Tinggal:</label>
                      <input type="text"
                        class="form-control" required name="kec"  id="kec" v-model="kepala.kec" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Tempat Tinggalnya Dong Bang</small>
                    </div>
                    <div class="form-group">
                        <label for="">Anak Dari:</label>
                        <input type="text" class="form-control" required name="kab"  id="kab" v-model="kepala.kab" aria-describedby="kabupaten" placeholder="" >
                        <small id="helpId" class="form-text text-muted">Anak Dari Berapa Bang</small>
                    </div>
                    <div class="form-group">
                        <label for="">Agama</label>
                        <input type="text" class="form-control" required name="prov"  id="prov" v-model="kepala.prov" aria-describedby="provinsi" placeholder="" >
                        <small id="helpId" class="form-text text-muted">Agamanya Dong Bang</small>
                    </div>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Agree</button>
                        <router-link :to="{name:'DataKepala'}" class="btn btn-danger" >Cancel</router-link>
                    </div>

                </form>
            </div>
            
        </div>


    </div>
</template>

<script>
export default {
    data(){
        return{
            kepala:{}
        }
    },  
    methods:{
        dataDiri(){
            console.log(this.kepala);

            var kepala={no_kk:this.kepala.no_kk,kepala:this.kepala.kepala,desa:this.kepala.desa,kec:this.kepala.kec,kab:this.kepala.kab,prov:this.kepala.prov}

            fetch('https://nazarullah.000webhostapp.com/kepala/index.php/?tambah',{
                method:"POST",
                body:JSON.stringify(kepala)

            })
            .then(nazarlugas=>nazarlugas.json())
            .then((nazarLugas=>{
                console.log(nazarLugas);
                window.location.href='datakepala'
            }))

        }
    }
}
</script>


<style>
        .card{
            margin-top: 100px;
        }
</style>
