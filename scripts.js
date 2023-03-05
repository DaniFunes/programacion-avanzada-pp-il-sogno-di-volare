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

// const pruebaArray = [['assets/avion-civil-1.jpg',
// 'assets/avion-civil-2.jpg',
// 'assets/avion-civil-3.jpg',
// 'assets/avion-civil-4.jpg',
// 'assets/avion-civil-5.jpg'],['assets/avion-militar-1.jpg',
// 'assets/avion-militar-2.jpg',
// 'assets/avion-militar-3.jpg',
// 'assets/avion-militar-4.jpg',
// 'assets/avion-militar-5.jpg']]



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
        this.allImagenes = [];

    }
    
    getRandomCivil() {
        const randomNumber = Math.floor(Math.random() * this.civilImages.length)
        return this.civilImages[randomNumber];
    }
    
    getRandomMilitary() {
        const randomNumber = Math.floor(Math.random() * this.militaryImages.length)
        return this.militaryImages[randomNumber];
    }
    
    getAll() {

            this.allImagenes = this.civilImages + "," + this.militaryImages;
            this.allImagenes = this.allImagenes.split(",")
            
            return this.allImagenes;
        }       
  
    
}

class Painter {
    
    
    constructor() {
        return this.createGallery();  
    }

    createGallery() {
        this.gallery = document.createElement("section");
        document.body.appendChild(this.gallery);
    }


    createImageTag(imageUrl) {
        return `<picture><img src="${imageUrl}"/></picture>`

    }

    paintSingleImage(imageUrl) {
        this.gallery += this.createImageTag(imageUrl);
        return this.gallery;
    }

    paintMultipleImages(arrayOfImages) {
        for(let i=0; i<arrayOfImages.length ;i++) {
            // console.log(arrayOfImages)
            this.gallery += this.createImageTag(arrayOfImages[i])
            return this.gallery;

         }
        
         
    }


}


const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

// console.log (aircrafts.militaryImages[4])
// console.log (helicopters.getAll());
// painter.createGallery();
// painter.paintSingleImage('assets/helicoptero-civil-4.jpg');
// painter.paintSingleImage('assets/helicoptero-civil-3.jpg')
// console.log(painter.gallery)
// painter.paintMultipleImages(militaryAircrafts)
// console.log(painter.paintSingleImage(aircrafts.getRandomCivil()))
// console.log(painter.gallery)

// console.log(aircrafts.getAll())
// console.log(typeof aircrafts.getAll())
// console.log()
// console.log(aircrafts.getAll())
console.log(painter.paintMultipleImages(aircrafts.getAll()))
// console.log(painter.paintSingleImage(aircrafts.getRandomCivil()))

// console.log(aircrafts.getAll())
// let arrayVacio = [[],[]];
// for (let i=0; i<pruebaArray.length; i++){
//     for(let j=0; j<pruebaArray[i].length; j++) {
//         console.log(pruebaArray[i][j]);
//         arrayVacio [i][j] = pruebaArray[i][j];
//     }
    
// }

// console.log(aircrafts)
// aircrafts.getAll()
console.log (aircrafts.getAll())
// console.log(helicopters.getAll())
console.log(typeof gallery)
