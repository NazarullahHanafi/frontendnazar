<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                Tambah Data
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="selectData">

                    <div class="form-group">
                      <label for="nama">Nomor ID:</label>
                      <input type="text"
                        class="form-control" required name="no_kk" v-model="kepala.no_kk" id="no_kk" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">ID Dong Bang </small>
                    </div>
                    <div class="form-group">
                      <label for="">Nama Ayah Siswa:</label>
                      <input type="text"
                        class="form-control" required name="kepala"  id="kepala" v-model="kepala.kepala" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Namanya Dong Bang</small>
                    </div>
                    <div class="form-group">
                      <label for="nama">Nama Ibu Siswa:</label>
                      <input type="text"
                        class="form-control" required name="desa"  id="desa" v-model="kepala.desa" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Namanya Dong Bang </small>
                    </div>
                    <div class="form-group">
                      <label for="">Tempat Tinggal:</label>
                      <input type="text"
                        class="form-control" required name="kec"  id="kec" v-model="kepala.kec" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">tempat Tinggalnya Dong Bang</small>
                    </div>
                    <div class="form-group">
                        <label for="">Anak Dari:</label>
                        <input type="text" class="form-control" required name="kab"  id="kab" v-model="kepala.kab" aria-describedby="kabupaten" placeholder="" >
                        <small id="helpId" class="form-text text-muted">Anak dari Berapa Bang</small>
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
    created:function(){
        this.obtenerInformacionID();

    },
    methods:{
        obtenerInformacionID(){
             
      fetch('https://nazarullah.000webhostapp.com/kepala/index.php/?select='+this.$route.params.id)
      .then(nazarlugas=>nazarlugas.json())
      .then((nazarLugas)=>{
        console.log(nazarLugas)
            this.kepala=nazarLugas[0];
        
      })
      .catch(console.log)
    }
    ,selectData(){

         var datosEnviar={no_kk:this.kepala.no_kk,kepala:this.kepala.kepala,desa:this.kepala.desa,kec:this.kepala.kec,kab:this.kepala.kab,prov:this.kepala.prov}

            fetch('https://nazarullah.000webhostapp.com/kepala/index.php/?update='+this.$route.params.id, {
                method:"POST",
                body:JSON.stringify(datosEnviar)

            })

            .then(nazarlugas=>nazarlugas.json())
            .then((lugasNazar=>{
                console.log(lugasNazar);
                window.location.href='../datakepala'
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