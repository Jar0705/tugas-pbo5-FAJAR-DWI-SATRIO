class Orangtua {
    constructor(jenis) {
        if (this.constructor === Orangtua) {
            throw new Error("Kelas Orangtua adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bekerjak() {
        throw new Error("Metode 'bekerja' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Ibu extends Orangtua {
    constructor() {
        super('Ibu');
    }

    bekerja() {
        console.log(`${this.jenis} bekerja di rumah.`);
    }
}

class Ayah extends Orangtua {
    constructor() {
        super('Ayah');
    }

    bekerja() {
        console.log(`${this.jenis} bekerja di kantor.`);
    }
}

// Penggunaan
const ibu = new Ibu();
ibu.bekerja();

const ayah = new Ayah();
ayah.bekerja();
