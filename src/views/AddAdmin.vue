<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Admin
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="dataDiri">

                    <div class="form-group">
                      <label for="nama">Nama Admin:</label>
                      <input type="text"
                        class="form-control" required name="Nama" v-model="datadiri.nama" id="nama" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Namanya Dong Bang </small>
                    </div>
                    <div class="form-group">
                      <label for="">Email Admin:</label>
                      <input type="email"
                        class="form-control" required name="email"  id="email" v-model="datadiri.email" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Emailnya Dong Bang</small>
                    </div>
                    <div class="form-group">
                      <label for="nama">Agama Admin:</label>
                      <input type="text"
                        class="form-control" required name="agama"  id="agama" v-model="datadiri.agama" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Agamanya Dong Bang </small>
                    </div>
                    <div class="form-group">
                      <label for="">Tempat Lahir Admin:</label>
                      <input type="text"
                        class="form-control" required name="ttl"  id="ttl" v-model="datadiri.ttl" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Tempat Lahirnya Dong Bang</small>
                    </div>
                    <div class="form-group">
                        <label for="inputTgl">Tanggal Lahir Admin</label>
                        <input type="date" class="form-control" required name="tanggal"  id="tanggal" v-model="datadiri.tanggal" aria-describedby="tglLahir" >
                    </div>
                    <div class="form-group">
                        <label for="alamat">Alamat Admin</label>
                        <textarea class="form-control"  v-model="datadiri.alamat" name="" id="" cols="15" rows="5" required></textarea>
                    </div>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Agree</button>
                        <router-link :to="{name:'DataAdmin'}" class="btn btn-danger" >Cancel</router-link>
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
    methods:{
        dataDiri(){
            console.log(this.datadiri);

            var datadiri={nama:this.datadiri.nama,email:this.datadiri.email,agama:this.datadiri.agama,ttl:this.datadiri.ttl,tanggal:this.datadiri.tanggal,alamat:this.datadiri.alamat}

            fetch('https://nazarullahhanafi12.000webhostapp.com/datadiri/index.php/?tambah', {
                method:"POST",
                body:JSON.stringify(datadiri)

            })

            .then(nazarlugas=>nazarlugas.json())
            .then((lugasNazar=>{
                console.log(lugasNazar);
                window.location.href='dataadmin'
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
