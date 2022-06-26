<template>
    <div class="container">


        <div class="card">
            <div class="card-header">
                 Update Admin
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="selectData">

                    <div class="form-group">
                      <label for="nama">Nama Karyawan:</label>
                      <input type="text"
                        class="form-control" required name="nama" v-model="datadiri.nama" id="nama" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Namanya Dong Bang </small>
                    </div>
                    <div class="form-group">
                      <label for="">Email Karyawan:</label>
                      <input type="email"
                        class="form-control" required name="email"  id="email" v-model="datadiri.email" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Emailnya Dong Bang</small>
                    </div>
                    <div class="form-group">
                      <label for="">Agama Karyawan:</label>
                      <input type="text"
                        class="form-control" required name="agama"  id="agama" v-model="datadiri.agama" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Emailnya Dong Bang</small>
                    </div>
                    <div class="form-group">
                      <label for="">Tempat Lahir Karyawan:</label>
                      <input type="text"
                        class="form-control" required name="ttl"  id="ttl" v-model="datadiri.ttl" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Emailnya Dong Bang</small>
                    </div>
                    <div class="form-group">
                      <label for="">Tanggal Lahir Karyawan:</label>
                      <input type="date"
                        class="form-control" required name="tanggal"  id="tanggal" v-model="datadiri.tanggal" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Emailnya Dong Bang</small>
                    </div>
                    <div class="form-group">
                      <label for="">Alamat Karyawan:</label>
                      <input type="text"
                        class="form-control" required name="alamat"  id="alamat" v-model="datadiri.alamat" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Emailnya Dong Bang</small>
                    </div>

                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Modifikasi</button>
                        <router-link :to="{name:'DataAdmin'}" class="btn btn-danger" >Cancelled</router-link>
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
            datadiri:{}
        }
    },  
    created:function(){
        this.obtenerInformacionID();

    },
    methods:{
        obtenerInformacionID(){
             
      fetch('https://nazarullahhanafi12.000webhostapp.com/datadiri/index.php/?select='+this.$route.params.id)
      .then(nazarlugas=>nazarlugas.json())
      .then((nazarLugas)=>{
        console.log(nazarLugas)
            this.datadiri=nazarLugas[0];
        
      })
      .catch(console.log)
    }
    ,selectData(){

         var datosEnviar={nama:this.datadiri.nama,email:this.datadiri.email,agama:this.datadiri.agama,ttl:this.datadiri.ttl,tanggal:this.datadiri.tanggal,alamat:this.datadiri.alamat}

            fetch('https://nazarullahhanafi12.000webhostapp.com/datadiri/index.php/?update='+this.$route.params.id, {
                method:"POST",
                body:JSON.stringify(datosEnviar)

            })

            .then(nazarlugas=>nazarlugas.json())
            .then((lugasNazar=>{
                console.log(lugasNazar);
                window.location.href='../dataadmin'
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