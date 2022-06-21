// const nama = document.getElementById('nama').value;
// const umur = document.getElementById('umur').value;
// const jurusan = document.getElementById('jurusan').value;

// class Mahasiswa{
//     constructor(nama, umur, jurusan){
//         this.nama = nama;
//         this.umur = umur;
//         this.jurusan = jurusan;
//     }
// }

// let mahasiswa = {
//     nama: 'Dimas',
//     umur: 20,
//     jurusan: 'perpustakaan'
// }

// let mhs1 = new Mahasiswa(nama, umur);

const form = document.getElementsByTagName('form')[0];
const showForm = document.querySelector('.show');

showForm.addEventListener('click', function(){
    if(form.style.display == 'none'){
        form.style.display = 'block'
    }})
