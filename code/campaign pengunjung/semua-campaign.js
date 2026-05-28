function keHalamanDetail() {
    window.location.href = 'campaign-detail.html';
}

function filterKategori(kategori, element) {
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
    console.log("Kategori dipilih: " + kategori);
}