<template>

  <section id="block" class="main-grey">
    <div class="container text-center py-5 mt-5">
      <h2 class="main-judul">ABOUT US</h2>
      <p>Ini Merupakan Website Kami Berdua.</p>
      <div class="row text-start">
        <div class="col-md-4 mb-2">
          <div class="card border-0 shadow-sm w-100">
            <img src="../img/lugas.jpeg" class="card-img-top" alt="Penjelasan Dari Thumbneil" />
            <div class="card-body">
              <h5 class="card-title"><a href="blog-detail.html">LUGAS PASIOLO</a></h5>
              <p class="card-text">Merupakan Pembuat Frontend.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-1">
          <div class="card border-0 shadow-sm w-100">
            <img src="../img/nazar.jpeg" class="card-img-top" alt="Penjelasan Dari Thumbneil" />
            <div class="card-body">
              <h5 class="card-title"><a href="blog-detail.html">Nazarullah Hanafi</a></h5>
              <p class="card-text">Merupakan Pembuat Backend.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="main-kolaborasi">
    <div class="container py-5 mt-5">
      <h2 class="text-center main-judul">Kolaborasi Kami Dengan Institusi dan Perusahaan</h2>
      <div class="text-center py-3">
        <a href=""><img src="../img/uinsuka.jpeg" /></a>
        <a href=""><img src="../img/ugm.jpeg" /></a>
        <a href=""><img src="../img/google.jpeg" /></a>
        <a href=""><img src="../img/ibm.jpeg" /></a>
        <a href=""><img src="../img/oracle.jpeg" /></a>
      </div>
    </div>
  </section>

</template>
<style>
/* Header */
.main-nav {
  background-color: #354f52;
}
.main-nav .navbar-nav a.nav-link {
  color: #ffffff;
  font-weight: 600;
}
.main-nav .navbar-nav a.nav-link.active,
.main-nav .navbar-nav .nav-link:hover {
  color: #84a98c;
}
.navbar.scrolled {
  background-color: #ffffff;
}
.navbar img,
main-logo {
  color: #666;
  max-width: 150px;
}

/* untuk global */
.main-biru {
  background-color: #2f3e46;
  color: #ffffff;
}
button.btn-success {
  background-color: #52796f;
  color: #ffffff;
}
h2.main-judul ::after {
  margin: auto;
  margin-top: 20px;
  display: block;
  border-bottom: 10px solid #52796f;
  width: 100px;
  border-radius: 25px;
  content: " ";
}
.main-grey {
  background-color: #cad2c5;
}
.main-atas-judul {
  color: #2f3e46;
  font-size: 22px;
  font-weight: 600;
}

/* untuk kolaborasi */
#main-kolaborasi img {
  max-height: 50px;
  max-width: 150px;
}
#main-kolaborasi a {
  display: inline-block;
  word-spacing: 20px;
  margin-right: 20px;
  margin-left: 20px;
}

/* untuk blog */
.main-blog-info img {
  width: 50px;
  border-radius: 50%;
  float: left;
}
.main-blog-info {
  color: #2f3e46;
  position: relative;
}
.main-blog-info a {
  padding-right: 15px;
  color: #2f3e46;
  text-decoration: none;
}
.main-blog-info a:hover {
  color: #52796f;
}
#blog .main-blog-info span {
  font-size: 18px;
  padding-left: 15px;
}
#blog a {
  text-decoration: none;
  color: #2f3e46;
}
#blog a:hover {
  color: #52796f;
}

/* Footer */
.main-footer-menu h3 {
  color: #cccc;
  margin-bottom: 15px;
}
.main-footer-menu a {
  color: #ffffff;
  text-decoration: none;
}
.main-footer-menu a:hover {
  color: #52796f;
}
.main-footer-menu ul {
  list-style-type: none;
  padding-left: 0px;
  margin-left: 0px;
}
.main-footer-menu ul li {
  margin-bottom: 10px;
}
</style>