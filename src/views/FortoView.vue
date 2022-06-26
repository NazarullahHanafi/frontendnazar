<template>
    <div class="container">

         
        <div class="card">
            <div class="card-header">
                Karyawan
            </div>
            <span class="tambah"><a class="btn btn-primary btn-lg" href="Crear" role="button" >Tambah</a>
            </span>
            <div class="card-body">
               <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>nama</th>
                        <th>email</th>
                        <th>Agama</th>
                        <th>Tempat Lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Alamat</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="datadiri in datadiri" :key="datadiri.id">
                        <td>{{datadiri.id}}</td>
                        <td>{{datadiri.nama}}</td>
                        <td>{{datadiri.email}}</td>
                        <td>{{datadiri.agama}}</td>
                        <td>{{datadiri.ttl}}</td>
                        <td>{{datadiri.tanggal}}</td>
                        <td>{{datadiri.alamat}}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="">


                                <router-link :to="{name:'EditarE',params:{id:datadiri.id}}" class="btn btn-info">Edit</router-link>


                                <button type="button" v-on:click="deleteData(datadiri.id)" class="btn btn-danger">Delete</button>
                                
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
                datadiri:[]
            }
        },


  created:function(){
    this.consultarEmpleados();
  },
  methods:{
    consultarEmpleados(){
      fetch('https://nazarullahhanafi12.000webhostapp.com/datadiri/index.php/')
      .then(respuesta=>respuesta.json())
      .then((datosRespuesta)=>{
        console.log(datosRespuesta)
        this.datadiri=[]
        if(typeof datosRespuesta[0].successs==='undefined')
        {
            this.datadiri=datosRespuesta;
        }
      })
      .catch(console.log)
    },
    deleteData(id){
        console.log(id);

        fetch('https://nazarullahhanafi12.000webhostapp.com/datadiri/index.php/?delete='+id)
      .then(respuesta=>respuesta.json())
      .then((datosRespuesta)=>{
        console.log(datosRespuesta)
        window.location.href="listar"
      })
      .catch(console.log)
    }
  }
}
</script>