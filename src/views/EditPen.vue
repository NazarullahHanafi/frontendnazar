<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                Tambah Data
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="selectData">

                    <div class="form-group">
                      <label for="nama">NIK Siswa:</label>
                      <input type="number"
                        class="form-control" required name="nik" v-model="penduduk.nik" id="nik" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Niknya Dong Bang </small>
                    </div>
                    <div class="form-group">
                      <label for="">Nama Siswa:</label>
                      <input type="text"
                        class="form-control" required name="nama"  id="nama" v-model="penduduk.nama" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Namanya Dong Bang</small>
                    </div>
                    <div class="form-group">
                      <label for="nama">Tempat Lahir Siswa:</label>
                      <input type="text"
                        class="form-control" required name="agama"  id="agama" v-model="penduduk.tempat_lh" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Tempat Lahirnya Dong Bang </small>
                    </div>
                    <div class="form-group">
                      <label for="">Tanggal Lahir Siswa:</label>
                      <input type="date"
                        class="form-control" required name="tgl_lh"  id="tgl_lh" v-model="penduduk.tgl_lh" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Tanggal Lahirnya Dong Bang</small>
                    </div>
                    <div class="form-group">
                        <label for="">Jenis Kelamin Siswa</label>
                        <input type="text" class="form-control" required name="jekel"  id="jekel" v-model="penduduk.jekel" aria-describedby="helpId" placeholder="" >
                        <small id="helpId" class="form-text text-muted">Jenis Kelaminnya Dong Bang</small>
                    </div>
                    <div class="form-group">
                        <label for="">Desa Penduduk</label>
                        <input type="text" class="form-control" required name="desa"  id="desa" v-model="penduduk.desa" aria-describedby="helpId" placeholder="" >
                        <small id="helpId" class="form-text text-muted">Desanya Dong Bang</small>
                    </div>
                    <div class="form-group">
                        <label for="">Tempat Tinggal Siswa</label>
                        <input type="text" class="form-control" required name="agama"  id="agama" v-model="penduduk.agama" aria-describedby="helpID" placeholder="" >
                        <small id="helpId" class="form-text text-muted">Tempat Tinggalnya Dong Bang</small>
                    </div>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Agree</button>
                        <router-link :to="{name:'DataPen'}" class="btn btn-danger" >Cancel</router-link>
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
            penduduk:{}
        }
    },  
    created:function(){
        this.obtenerInformacionID();

    },
    methods:{
        obtenerInformacionID(){
             
      fetch('https://nazarullah.000webhostapp.com/index.php/?select='+this.$route.params.id)
      .then(nazarlugas=>nazarlugas.json())
      .then((nazarLugas)=>{
        console.log(nazarLugas)
            this.penduduk=nazarLugas[0];
        
      })
      .catch(console.log)
    }
    ,selectData(){

         var penduduk={nik:this.penduduk.nik,nama:this.penduduk.nama,tempat_lh:this.penduduk.tempat_lh,tgl_lh:this.penduduk.tgl_lh,jekel:this.penduduk.jekel,desa:this.penduduk.desa,agama:this.penduduk.agama}

            fetch('https://nazarullah.000webhostapp.com/index.php/?update='+this.$route.params.id, {
                method:"POST",
                body:JSON.stringify(penduduk)

            })

            .then(nazarlugas=>nazarlugas.json())
            .then((datosResquesta=>{
                console.log(datosResquesta);
                window.location.href='../datapen'
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