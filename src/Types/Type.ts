export interface Aturan {
    id: number;
    gejala: Gejala;
    adiksi: Adiksi;
    cf_pakar: number;
}

export interface Answer {
    gejala_id: number;
    adiksi_id: number;
    cf_kombinasi: number;
    cf_user: number;
    cf_pakar: number;
}

interface Gejala {
    id: number;
    kode: string;
    nama: string;
}
interface Adiksi {
    id: number;
    kode: string;
    nama: string;
    solusi: string;
    deskripsi: string;
}
