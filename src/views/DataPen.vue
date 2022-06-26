<template>
    <div class="container"> 
        <div class="card">
            <div class="card-header">
                Siswa
            </div>
            <span class="tambah"><a class="btn btn-primary btn-lg" href="AddPen" role="button" >Tambah data</a>
            </span>
            <div class="card-body">
               <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>nik</th>
                        <th>nama</th>
                        <th>tempat_lh</th>
                        <th>Tanggal lahir</th>
                        <th>Jenis Kelamin</th>
                        <th>Desa</th>
                        <th>Tempat Tinggal</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="penduduk in penduduk" :key="penduduk.id">
                        <td>{{penduduk.id}}</td>
                        <td>{{penduduk.nik}}</td>
                        <td>{{penduduk.nama}}</td>
                        <td>{{penduduk.tempat_lh}}</td>
                        <td>{{penduduk.tgl_lh}}</td>
                        <td>{{penduduk.jekel}}</td>
                        <td>{{penduduk.desa}}</td>
                        <td>{{penduduk.agama}}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="">


                                <router-link :to="{name:'EditPen',params:{id:penduduk.id}}" class="btn btn-info">Edit</router-link>


                                <button type="button" v-on:click="deleteData(penduduk.id)" class="btn btn-danger">Delete</button>
                                
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
                penduduk:[]
            }
        },


  created:function(){
    this.consultarEmpleados();
  },
  methods:{
    consultarEmpleados(){
      fetch('https://nazarullah.000webhostapp.com/index.php/')
      .then(nazarlugas=>nazarlugas.json())
      .then((nazarLugas)=>{
        console.log(nazarLugas)
        this.penduduk=[]
        if(typeof nazarLugas[0].successs==='undefined')
        {
            this.penduduk=nazarLugas;
        }
      })
      .catch(console.log)
    },
    deleteData(id){
        console.log(id);

        fetch('https://nazarullah.000webhostapp.com/index.php/?delete='+id)
      .then(nazarlugas=>nazarlugas.json())
      .then((nazarLugas)=>{
        console.log(nazarLugas)
        window.location.href="datapen"
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