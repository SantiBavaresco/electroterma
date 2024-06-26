interface generalDataType {
    email: string;
    whatsappNumber: string;
    whatsappMessage: string;
    whatsappLink: string;
    pageData: {
      products:{
        imgUrl: string,
        lable: string,
        href?: string,
      }[];
      title1: string;
      p1: string;
      p2: string;
      p3: string;
      subTitle: string;

    };
    videoYoutube1: string;
    videoYoutube2: string;

  }

  export const solucionesGeneralData: generalDataType  = {
    email: "",
    whatsappLink: "https://wa.me/",
    whatsappNumber: "5492236356756",
    whatsappMessage: "?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion.",

    pageData: {
        products:[
          {
            imgUrl:"../../img/soluciones/imgBanner/Soluciones1.png",
            lable: "SOLUCIÓN CLIMATIZACIÓN DE BARCOS",
            href: "/solucionesHVAC/barcos",
          },
          {
            imgUrl:"../../img/soluciones/imgBanner/Soluciones2.png",
            lable: "",
            href: "/soler&palau/habitat/extractor",
          },
          {
            imgUrl:"../../img/soluciones/imgBanner/Soluciones3.png",
            lable: "",
            href: "/soler&palau/habitat/extractor",
          },
          {
            imgUrl:"../../img/soluciones/imgBanner/Soluciones4.png",
            lable: "",
            href: "/soler&palau/habitat/extractor",
          },
          {
            imgUrl:"../../img/soluciones/imgBanner/Soluciones5.png",
            lable: "",
            href: "/soler&palau/habitat/extractor",
          },
          {
            imgUrl:"../../img/soluciones/imgBanner/Soluciones6.png",
            lable: "",
            href: "/soler&palau/habitat/extractor",
          },
        ],
        title1: "",
        p1: "",
        p2: "",
        p3: "",
        subTitle: "",

    },

    videoYoutube1: "https://www.youtube.com/watch?v=uMn8YFVzBkE",
    videoYoutube2: "https://www.youtube.com/watch?v=ea8KWDyYWcA",

   
}