<template>
  <div class="sidebar-wrapper">
    <ul class="nav" id="nav">
      <li>
        <router-link to="/table">
          <i><ion-icon name="home-outline"></ion-icon></i>
          <p style="color: aqua">Dashboard</p>
        </router-link>
      </li>
      <li>
        <router-link to="/dataadmin">
          <i><ion-icon name="person-add-sharp"></ion-icon></i>
          <p style="color: aqua">Data Admin</p>
        </router-link>
      </li>
      <li>
        <router-link to="/datapen">
          <i><ion-icon name="person-circle-sharp"></ion-icon></i>
          <p style="color: aqua">Data Siswa</p>
        </router-link>
      </li>
      <li>
        <router-link to="/datakepala">
          <i><ion-icon name="people-circle-sharp"></ion-icon></i>
          <p style="color: aqua">Data Keluarga Siswa</p>
        </router-link>
      </li>
      <li>
        <router-link to="/me">
          <i><ion-icon name="body-sharp"></ion-icon></i>
          <p style="color: aqua">About Me</p>
        </router-link>
      </li>
      <!-- <li>
        <router-link to="/datakepala">
          <i><ion-icon name="home-outline"></ion-icon></i>
          <p style="color: aqua">Dashboard</p>
        </router-link>
      </li>
      <li>
        <router-link to="/addkepala">
          <i><ion-icon name="home-outline"></ion-icon></i>
          <p style="color: aqua">Dashboard</p>
        </router-link>
      </li><li>
        <router-link to="/editkepala">
          <i><ion-icon name="home-outline"></ion-icon></i>
          <p style="color: aqua">Dashboard</p>
        </router-link>
      </li> -->
      <!-- <li>
        <router-link to="/listar">
          <i><ion-icon name="logo-tux"></ion-icon></i>
          <p style="color: aqua">Data Diri</p>
        </router-link>
      </li>
      <li>
        <router-link to="/user">
          <i><ion-icon name="logo-stencil"></ion-icon></i>
          <p style="color: aqua">Al-Bayyinah</p>
        </router-link>
      </li>
      <li>
        <router-link to="/me">
          <i class="nc-icon nc-tile-56"></i>
          <p style="color: aqua">Ayat Kursi</p>
        </router-link>
      </li>
      <li>
        <router-link to="/forto">
          <i class="nc-icon nc-caps-small"></i>
          <p style="color: aqua">Daftar Surah</p>
        </router-link>
      </li>
      <li>
        <router-link to="/hobi">
          <i class="nc-icon nc-diamond"></i>
          <p style="color: aqua">Al-Fatihah</p>
        </router-link>
      </li>
      <li>
        <router-link to="/icon">
          <i class="nc-icon nc-bell-55"></i>
          <p style="color: aqua">Ar-Rum</p>
        </router-link>
      </li> -->
    </ul>
  </div>
</template>
<style>
nav a.router-link-exact-active {
  color: #42b983;
  opacity: 1;
}
</style>


