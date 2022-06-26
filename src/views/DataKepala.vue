<template>
    <div class="container"> 
        <div class="card">
            <div class="card-header">
                Data Keluarga Siswa
            </div>
            <span class="tambah"><a class="btn btn-primary btn-lg" href="AddKepala" role="button" >Tambah data</a>
            </span>
            <div class="card-body">
               <table class="table">
                <thead>
                    <tr>
                        <th>Nomor</th>
                        <th>Nomor ID Keluarga</th>
                        <th>Nama Ayah </th>
                        <th>Nama Ibu</th>
                        <th>Tempat Tinggal</th>
                        <th>Anak Dari</th>
                        <th>Agama</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="kepala in kepala" :key="kepala.id">
                        <td>{{kepala.id}}</td>
                        <td>{{kepala.no_kk}}</td>
                        <td>{{kepala.kepala}}</td>
                        <td>{{kepala.desa}}</td>
                        <td>{{kepala.kec}}</td>
                        <td>{{kepala.kab}}</td>
                        <td>{{kepala.prov}}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="">


                                <router-link :to="{name:'EditKepala',params:{id:kepala.id}}" class="btn btn-info">Edit</router-link>


                                <button type="button" v-on:click="deleteData(kepala.id)" class="btn btn-danger">Delete</button>
                                
                            </div>
                            
                        </td>
                    </tr>
                    
                </tbody>
               </table>
            </div>
        </div>

    </div>
</template>

<script>
export default {
        data(){
            return{
                kepala:[]
            }
        },


  created:function(){
    this.consultarEmpleados();
  },
  methods:{
    consultarEmpleados(){
      fetch('https://nazarullah.000webhostapp.com/kepala/index.php/')
      .then(nazarlugas=>nazarlugas.json())
      .then((nazarLugas)=>{
        console.log(nazarLugas)
        this.kepala=[]
        if(typeof nazarLugas[0].successs==='undefined')
        {
            this.kepala=nazarLugas;
        }
      })
      .catch(console.log)
    },
    deleteData(id){
        console.log(id);

        fetch('https://nazarullah.000webhostapp.com/kepala/index.php/?delete='+id)
      .then(nazarlugas=>nazarlugas.json())
      .then((nazarLugas)=>{
        console.log(nazarLugas)
        window.location.href="datakepala"
      })
      .catch(console.log)
    }
  }
}
</script>

<style>
        .card{
            margin-top: 100px;
        }
        .btn{
            padding: 10px;
        }
        .tambah{
            justify-content: left;
            width: 20px;
            font-size: 12px;
        }
</style>