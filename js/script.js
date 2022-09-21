function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}


function checkradiobutton(){
    var c1 = document.getElementById('cat1');
    var c2 = document.getElementById('cat2');
    var c3 = document.getElementById('cat3');
    var c4 = document.getElementById('cat4');
    var c5 = document.getElementById('cat5');

    var checked = -1;
    if(c1.checked){
        checked = 1;
    }
    else if(c2.checked){
        checked = 2;
    }
    else if(c3.checked){
        checked = 3;
    }
    else if(c4.checked){
        checked = 4;
    }
    else if(c5.checked){
        checked = 5;
    }
    // alert(checked);
    return checked;
}

function get_date(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    var databula = [
        "Invalid"
        ,"Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus"
        ,"September"
        ,"Oktober"
        ,"November",
        "Desember"
    ]

    today = dd + ' ' + databula[parseInt(mm)] + ' ' + yyyy;
    return today;
}


function validate(){
    var tanggalisi = document.getElementById("tanggalisi");
    tanggalisi.innerHTML ="Surabaya, " + get_date();
    // alert("clicked");
    var nama = document.getElementById("data_nama").value;
    var tempatLahir = document.getElementById("data_tempat_lahir").value;
    // is astring
    var tanggalLahir = document.getElementById('data_tgl_lahir').value;
    var unit = document.getElementById("data_unit");
    var desa = document.getElementById("data_desa");
    var kecamatan = document.getElementById("data_kecamatan");
    var telp = document.getElementById("data_telp");
    var catlomba = checkradiobutton();

    var letters = /^[A-Za-z]+$/
    var numbers = /^[0-9]+$/
    var alphanum = /^[0-9a-zA-Z]+$/

    if(nama=='' 
    || tempatLahir == '' 
    || tanggalLahir == '' 
    || unit == ''
    || desa == ''
    || kecamatan == ''
    ||telp == ''
    || catlomba == -1){
        alert("Isi seluruh form dengan benar terlebih dahulu");
    }

    else if(!letters.test(nama)){
        alert("Nama hanya dapat diisi dengan huruf");
    }
    else if(! letters.test(tempatLahir)){
        alert("Tempat lahir hanya dapat diisi dengan huruf");
    }
    else if(getAge(tanggalLahir) < 18){
        alert("Harus berumur paling tidak 18 tahun");
    }
    else if(! alphanum.test(unit)){
        alert("Unit hanya dapat diisi dengan alphanumerik");
    }
    else if(!letters.test(desa)){
        alert("Desa hanya dapat diisi dengan huruf");
    }
    else if(! letters.test(kecamatan)){
        alert("Kecamatan hanya dapat diisi dengan huruf");
    }
    else if(numbers.test(telp)){
        alert("Nomor telepon hanya dapat diisi dengan angka");
    }

    else{
        alert("Berhasil mendaftar");
    }


    // checkradiobutton();
    
    // var cp = document.getElementById('p2').value;
    // alert(tanggalLahir);
    // console.log(tanggalLahir);
    // alert(typeof(tanggalLahir));
}

var tanggalisi = document.getElementById("tanggalisi");
tanggalisi.innerHTML ="Surabaya, " + get_date();