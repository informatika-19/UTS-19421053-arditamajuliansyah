const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listrik = new Schema({
    id_pelanggan: {
        type: String
    },
    bulan: {
        type: String
    },
    bulan_awal: {
        type: String
    },
    bulan_akhir: {
        type: String
    },
    jumlah_master: {
        type: String
    },
    tarif_Kwh: {
        type: String
    },
    jumlah_bayar: {
        type: String
    },
    aksi: {
        type: String
    }
    
    
}) 

module.exports = mongoose.model('listrik', listrik)