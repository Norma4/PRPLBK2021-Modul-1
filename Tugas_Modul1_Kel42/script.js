var inArray = [];

const angkaKuadrat = () => {
    var angka = document.getElementById("angkaInput").value.trim();
    var hasil;
    hasil = angka.length > 0 ? inArray.push(angka) : "";

    document.getElementById("angkaHasil").value = angka*angka;
}

const angkaReset = () => {
    document.getElementById("angkaInput").value = "";
    document.getElementById("angkaHasil").value = "";
}

const tampilkanRiwayat = () => {
    var histori = inArray.length === 0 ? "riwayat kosong" : "";

    if (histori != "riwayat kosong") {
        const outArr = inArray.map(myFunction);
        function myFunction(num) {
            return num+"^2="+num * num;
        }
        histori = outArr.join('<br/>');
        
    }
    document.getElementById("angkaRiwayat").innerHTML = histori;
}