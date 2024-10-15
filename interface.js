// Definisi antarmuka menggunakan kelas abstrak
class Makanan {
    dimakan() {
        throw new Error("Metode 'dimakan()' harus diimplementasikan.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Pizza extends Makanan {
    dimakan() {
        console.log("Pizza dimakan dengan tangan.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Sup extends Makanan {
    dimakan() {
        console.log("Sup dimakan dengan sendok.");
    }
}

// Penggunaan
const pizza = new Pizza();
pizza.dimakan(); // Output: Pizza dimakan dengan tangan.

const sup = new Sup();
sup.dimakan(); // Output: Sup dimakan dengan sendok.
