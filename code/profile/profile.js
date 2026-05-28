const btnUpdate = document.getElementById('btnUpdate');
const btnSave = document.getElementById('btnSave');
const btnKeluar = document.getElementById('btnKeluar');
const btnCancel = document.getElementById('btnCancel');
const btnConfirmLogout = document.getElementById('btnConfirmLogout');
const modalLogout = document.getElementById('modalLogout'); 
const displayName = document.getElementById('displayName');
const formFieldset = document.getElementById('formFieldset');  

const savedData = {
    namaLengkap: '',
    email: '',
    telepon: '',
    tanggalLahir: '',
    jenisKelamin: '',
    alamat: '',
};

let isEditing = false;

function setEditing(val) {
    isEditing = val;
    formFieldset.disabled = !val; 

    btnUpdate.textContent = val ? 'Batal' : 'Update';
    btnUpdate.setAttribute('aria-pressed', val ? 'true' : 'false');
    btnUpdate.classList.toggle('editing', val);
    btnSave.classList.toggle('hidden', !val);

    if (!val) loadSavedData();  
}

function loadSavedData() { 
    document.getElementById('namaLengkap').value = savedData.namaLengkap;
    document.getElementById('email').value = savedData.email;
    document.getElementById('telepon').value = savedData.telepon;
    document.getElementById('tanggalLahir').value = savedData.tanggalLahir;
    document.getElementById('jenisKelamin').value = savedData.jenisKelamin;
    document.getElementById('alamat').value = savedData.alamat;
}

function saveData() { 
    savedData.namaLengkap = document.getElementById('namaLengkap').value.trim(); 
    savedData.email = document.getElementById('email').value.trim();
    savedData.telepon = document.getElementById('telepon').value.trim();
    savedData.tanggalLahir = document.getElementById('tanggalLahir').value;
    savedData.jenisKelamin = document.getElementById('jenisKelamin').value;
    savedData.alamat = document.getElementById('alamat').value.trim();

    setEditing(false); 
    showToast('Profil berhasil disimpan!');
}

document.querySelectorAll('button.payment-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('button.payment-btn').forEach((b) => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
    });
});

btnUpdate.addEventListener('click', () => setEditing(!isEditing));
btnSave.addEventListener('click', () => saveData());
btnKeluar.addEventListener('click', () => modalLogout.showModal());
btnCancel.addEventListener('click', () => modalLogout.close());

modalLogout.addEventListener('click', (e) => {
    const rect = modalLogout.getBoundingClientRect();
    const isOutside =
        e.clientX < rect.left || e.clientX > rect.right ||
        e.clientY < rect.top || e.clientY > rect.bottom;
    if (isOutside) modalLogout.close();
});

btnConfirmLogout.addEventListener('click', () => {
    modalLogout.close();
    showToast('Kamu telah keluar dari akun.');
    }
);