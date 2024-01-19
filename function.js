const getInitials = (...rest) => {
    return rest.map(name => name[0]).join('');
  };
  
  console.log(getInitials("Inka", "Bella"));

function tampilkan() {
    console.log("Halo!");
  }
  
  tampilkan();
  
  function munculkanAngkaDua() {
    return 2;
  }
  

  
 
  function tampilAngka(angkaPertama, angkaKedua) {
    var hasil = angkaPertama + angkaKedua;
  
    if (hasil > 10) {
      return "Hasil lebih besar dari 10";
    } else if (hasil > 0 && hasil < 10) {
      return "Hasil lebih kecil dari 10";
    } else if (hasil === 0) {
      return "Hasil 0";
    } else {
      return "Tidak ada nilai dari parameter";
    }
  }
  
  console.log(tampilAngka(7, 5));
  
  function looping(iteration) {
    for (var i = 0; i < iteration; i++) {
      console.log("Iterasi ke-" + i);
    }
  }
  
  looping(3);