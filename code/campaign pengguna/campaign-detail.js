let nominalTerpilih = 0;

function changeImage(element, index) {
    document.getElementById('mainImg').src = element.src;
    document.getElementById('imgCounter').innerText = index + " / 5";
    
    const thumbnails = document.querySelectorAll('.thumb');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

function selectNominal(jumlah, element) {
    nominalTerpilih = jumlah;
    const tombols = document.querySelectorAll('.btn-nominal');
    tombols.forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
}

function prosesDonasi() {
    if (nominalTerpilih === 0) {
        alert("Silakan pilih salah satu nominal donasi terlebih dahulu!");
    } else if (nominalTerpilih === 'lainnya') {
        let nominalKustom = prompt("Masukkan nominal donasi kustom kamu (Contoh: 150000):");
        if(nominalKustom && !isNaN(nominalKustom)) {
            alert("Terima kasih! Donasi sebesar Rp " + parseInt(nominalKustom).toLocaleString('id-ID') + " berhasil diproses.");
        } else if (nominalKustom) {
            alert("Mohon masukkan nominal berupa angka saja!");
        }
    } else {
        alert("Terima kasih! Donasi sebesar Rp " + nominalTerpilih.toLocaleString('id-ID') + " berhasil diproses.");
    }
}