  document.addEventListener('DOMContentLoaded', function() {
  // document tambahkan event/acara DOM lalu jalanakan fungsi berikut

  	// Side bar
    let elems = document.querySelectorAll('.sidenav');
    // document cari semua selector yang punya .sidenav
    let instances = M.Sidenav.init(elems);
    // M itu object punyae materialize
    // jadi materialize jalankan fitur Sidenav lalu insisialisasi variabel elems
    // Akhir Side bar

    // SLIDER
    let sliderkita = document.querySelectorAll('.slider');
    let inisialisasi = M.Slider.init(sliderkita, {
    	// kurung kurawal berati buat object
    	// Lalu kita atur gaya slidernya
    	indicators: false,
    	height: 400,
    	duration: 500,
    	interval: 3000
    	// 4 diatas didapatkan dari OPTIONS dari menu Javascript lalu Media
    });
    // materialize jalankan fitur slider lalu inisialisasi variabel ambil
    // Akhir slider

    // EFEK PARALLAX
    let efekParallax = document.querySelectorAll('.parallax');
    let inisialisasiParallax = M.Parallax.init(efekParallax);
    // panggil Object MATERIALIZE lalu jalankan fitur PARALLAX lalu inisialisasi VARIABEL berikut
  });