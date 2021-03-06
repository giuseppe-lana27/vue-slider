/* creazione slider immagini */
var app = new Vue ({
  el: '#app',
  data: {
    images: [
      {
        img: 'https://siviaggia.it/wp-content/uploads/sites/2/2020/07/scala-dei-turchi.jpg',
        name: 'La Scala dei Turchi',
      },
      {
        img: 'https://sicilyintour.com/wp-content/uploads/2020/05/65911.jpg',
        name: 'Punta Bianca',
      },
      {
        img: 'https://www.archeome.it/wp-content/uploads/2020/06/valle-dei-templi.jpg',
        name: 'Tempio della Concordia',
      },
      {
        img: 'https://www.10cose.it/wp-content/uploads/2015/09/taormina.jpg',
        name: 'Teatro Greco di Taormina',
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cattedrale_di_Palermo._-_panoramio.jpg/1280px-Cattedrale_di_Palermo._-_panoramio.jpg',
        name: 'Cattedrale di Palermo',
      },
      {
        img: 'https://www.10cose.it/wp-content/uploads/2015/09/catania.jpg',
        name: 'Piazza Duomo di Catania',
      },
  ],
  imgIndex: 0,
 },  
  methods: {
    // scorro alla prossima immagine
    nextImage: function(){
      this.imgIndex++;
      if (this.imgIndex == this.images.length){
        this.imgIndex = 0;
      }
    },
    // scorro all'immagine precedente
    prevImage: function(){
      this.imgIndex--;
      if (this.imgIndex < 0){
        this.imgIndex = this.images.length - 1;
      }
    },
    // scorro le immagini attraverso i bullets
    bulletImage: function(i){
      this.imgIndex = i;
    },
  }
}
);
