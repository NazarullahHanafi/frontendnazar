<template>
  <section class="site-banner">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <span class="badge badge-info">Data Tables</span>
                    </div>
                </div>
                
                <table class="table ">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Nama</th>
                        <th scope="col">NIK</th>
                        <th scope="col">Alamat</th>
                        <th scope="col">Jenis Kelamin</th>
                        <th scope="col">Agama</th>
                        <th scope="col">Tanggal Lahir</th>
                        <th scope="col">Tempat Lahir</th>
                        <th scope="col">Aksi</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Nurul Ramadiah</td>
                        <td>150403170000002</td>
                        <td>Jambi</td>
                        <td>Perempuan</td>
                        <td>Islam</td>
                        <td>12/12/2002</td>
                        <td>Jambi</td>
                        <td>
                            <a href="#" class="badge badge-success">edit</a>
                            <a href="#" class="badge badge-danger">delete</a>
                        </td>
                        </tr>
                        
                    </tbody>
                    <tbody>
                        <tr>
                        <th scope="row">2</th>
                        <td>Ahmad Ramadhan</td>
                        <td>150403170000001</td>
                        <td>Jambi</td>
                        <td>Laki-laki</td>
                        <td>Islam</td>
                        <td>12/12/2003</td>
                        <td>Jambi</td>
                        <td>
                            <a href="Map" class="badge badge-success">edit</a>
                            <a href="#" class="badge badge-danger">delete</a>
                        </td>
                        </tr>
                       
                    </tbody>
                </table>
                <a class="btn btn-primary" href="Map" role="button">Tambah Data</a>

            </div>
        </section>
</template>>


<style scoped>
  .card{
    margin-top: 100px;
  }
</style>