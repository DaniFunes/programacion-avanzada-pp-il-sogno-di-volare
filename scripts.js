const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];


const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {

    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
        // this.allImagenes = [];

    }

    _getRandomIndex(length) {
        const index = Math.floor(Math.random() * length)
        return index;
    }

    getRandomCivil() {
        // const randomNumber = Math.floor(Math.random() * this.civilImages.length)
        return this.civilImages[this._getRandomIndex(this.civilImages.length)];
    }

    getRandomMilitary() {
        // const randomNumber = Math.floor(Math.random() * this.militaryImages.length)
        return this.militaryImages[this._getRandomIndex(this.militaryImages.length)];
    }

    getAll() {
        return this.civilImages.concat(this.militaryImages)

        //OTRA MANERA DE HACERLO
        // this.allImagenes = this.civilImages + "," + this.militaryImages;
        // this.allImagenes = this.allImagenes.split(",")

        return this.allImagenes;
    }


}

class Painter {


    constructor() {
        return this.createGallery();
    }

    createGallery() {
        const section = document.createElement("section");
        // this.gallery = document.createElement("section");
        document.body.appendChild(section);
        this.gallery = section;
    }


    createImageTag(imageUrl) {
        // OTRA FORMA DE HACERLO
        // const picture = document.createElement("picture");
        // const img = document.createElement("img");

        // img.src = imageUrl;
        // picture.appendChild(img)
        // return picture;

        return `<picture><img src="${imageUrl}"/></picture>`

    }

    paintSingleImage(imageUrl) {
        // OTRA FORMA DE HACERLO
        // this.gallery.appendChild(this.createImageTag(imageUrl));
        this.gallery.innerHTML = this.createImageTag(imageUrl)
    }

    paintMultipleImages(arrayOfImages) {
        for (let i = 0; i < arrayOfImages.length; i++) {
            this.gallery.innerHTML += this.createImageTag(arrayOfImages[i])
            //OTRA FORMA DE HACERLO
            // this.gallery.appendChild(this.createImageTag(arrayOfImages[i]));

        }


    }


}


const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

