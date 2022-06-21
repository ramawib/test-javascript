const nama = document.getElementById('nama').value;
const umur = document.getElementById('umur').value;
const jurusan = document.getElementById('jurusan').value;
const submit = document.getElementById('submit');

class Mahasiswa{
    constructor(nama, umur, jurusan){
        this.nama = nama;
        this.umur = umur;
        this.jurusan = jurusan;
    }
}

    let mhs1 = new Mahasiswa(nama, umur, jurusan);
    console.log(mhs1)

