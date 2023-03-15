function tambah(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 + a2;
    frm.hasil.value = total;
}

function kurang(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 - a2;
    frm.hasil.value = total;
}


function hitung() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;
    var operasi = document.getElementById("operasi").value;
    var hasil = "";
    if (angka1 == "" || angka2 == "") {
      hasil = "Maaf angka belum terisi";
    } else {
      if (operasi == "pembagian") {
        hasil = angka1 / angka2;
      } else if (operasi == "perkalian") {
        hasil = angka1 * angka2;
      } else if (operasi == "kurang") {
        hasil = angka1 - angka2;
      } else if (operasi == "tambah") {
        hasil = parseInt(angka1) + parseInt(angka2);
      } else if (operasi == "pangkat") {
        hasil = Math.pow(angka1, angka2);
      }
      
    }
    document.getElementById("hasil").innerHTML = hasil;
  }



// function hitung() {
//     const angka1 = document.getElementById("angka1").value;
//     const angka2 = document.getElementById("angka2").value;
//     const operasi = document.getElementById("operasi").value;

//     if (!angka1 || !angka2) {
//       document.getElementById("error").innerHTML =
//         "Maaf angka belum terisi";
//       return;
//     } else {
//       document.getElementById("error").innerHTML = "";
//     }

//     let hasil;

//     switch (operasi) {
//       case "pembagian":
//         hasil = angka1 / angka2;
//         break;
//       case "perkalian":
//         hasil = angka1 * angka2;
//         break;
//       case "pangkat":
//         hasil = Math.pow(angka1, angka2);
//         break;
//       case "tambah":
//         hasil = parseInt(angka1) + parseInt(angka2);
//         break;
//       case "kurang":
//         hasil = parseInt(angka1) - parseInt(angka2);
//         break;
//       default:
//         hasil = 0;
//     }

//     document.getElementById("hasil").value = hasil;
//   }



/*tugas ke 4 Javascript
1. Lengkapilah form dari latihan 15js menggunakan CSS dan table 
2. Perbagus tampilannya 
3. Lengkapi perhitungannya dengan:
- pembagian
- perkalian
- pangkat
4. jika form input dari angka 1 dan 2 kosong dan user klik button, 
maka tampilkan "Maaf angka belum terisi"


*/