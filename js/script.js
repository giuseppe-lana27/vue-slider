/* creazione slider immagini */
var app = new Vue ({
  el: '#app',
  data: {
    images: ['https://siviaggia.it/wp-content/uploads/sites/2/2020/07/scala-dei-turchi.jpg',
    'https://sicilyintour.com/wp-content/uploads/2020/05/65911.jpg',
    'https://www.archeome.it/wp-content/uploads/2020/06/valle-dei-templi.jpg'
  ],
  imgIndex: 0
 },
  methods: {
    nextImage: function (){
      this.imgIndex++;
      if (this.imgIndex == this.images.length){
        this.imgIndex = 0;
      }
    },
    prevImage: function (){
      this.imgIndex--;
      if (this.imgIndex < 0){
        this.imgIndex = this.images.length - 1;
      }
    },
  }
}

);
