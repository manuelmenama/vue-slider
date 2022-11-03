console.log('Ciao vuejs!');


const {createApp} = Vue;

createApp({
  data() {
    return {

      imagesCollection: [
        {
          countryName: "Svezia",
          description: "Der nun steigt bringt und meinem halbverklungnen erschüttert irren die, unbestimmten entwöhntes hören und äolsharfe ach die erste meinem klage.",
          imageLink: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg"
        },
        {
          countryName: "Perù",
          description: "Las lo para ilesa golondrina de con. De de mi para deja desnudo. Y que la pasan y dando. Mi.",
          imageLink: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg"
        },
        {
          countryName: "Cile",
          description: "Húmedo con que me en golondrina que, llanura de no faraón pero se aire, mío sangre apariencia atrás al, manecitas.",
          imageLink: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c"
        },
        {
          countryName: "Argentina",
          description: "Es diana con todo cosas viciosa y recodos mármol. Sin tierra llenando no brooklyn heridas, llenando nino los estremecidos bajaba..",
          imageLink: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg"
        },
        {
          countryName: "Colombia",
          description: "Baja un aire dios que bajaba estremecidos veces, huido de tierra bala para escaleras, árboles vilo ninos de larga loca..",
          imageLink: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop"
        }
      ],

      imageCounter: 0,
      myAutomatedCarousel: undefined

    }
  },
  methods: {
    fwdBack(isFwd) {
      //removeClassActive();
      if(isFwd){
        this.imageCounter++;
        if(this.imageCounter === this.imagesCollection.length) this.imageCounter = 0;
      }else{
        this.imageCounter--;
        if(this.imageCounter < 0) this.imageCounter = this.imagesCollection.length - 1;
      }
      //addClassActive();
    },
    automatedFwd() {
      this.myAutomatedCarousel = setInterval(() => {
        this.fwdBack(true);
      }, 2000)
    },
    stopInterval() {
      console.log("enter");
      clearInterval(this.myAutomatedCarousel)
    }
  },
  mounted() {
    console.log("Mounted 'vue-carousel'");
  },
  created() {
    console.log("Created 'vue-carousel'");
    this.automatedFwd();
  }
}).mount("#app");

