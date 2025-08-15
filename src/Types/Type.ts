export interface Aturan {
    id: number
    gejala: Gejala,
    adiksi: Adiksi,
    cf_pakar: number
}
interface Gejala {
    id: number,
    kode: string,
    nama: string,
}
interface Adiksi {
    id: number,
    kode: string,
    nama: string,
    solusi: string,
    deskripsi: string
}