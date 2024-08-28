interface generalDataType {
    email: string;
    whatsappNumber: string;
    whatsappMessage: string;
    whatsappLink: string;
    pageData: {
      products:{
        imgUrl: string,
        lable: string,
        title: string,
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
            imgUrl:"../../img/soluciones/home/Soluciones1.png",
            lable: "SOLUCIÓN ",
            title: "CLIMATIZACIÓN DE BARCOS",
            href: "/solucionesHVAC/barcos",
          },
          {
            imgUrl:"../../img/soluciones/home/Soluciones2.png",
            lable: "SOLUCIÓN ",
            title: "CALEFACCIÓN DE EDIFICIOS POR AGUA CALIENTE",
            href: "/solucionesHVAC/barcos",
          },
          {
            imgUrl:"../../img/soluciones/home/Soluciones3.png",
            lable: "SOLUCIÓN ",
            title: "EXTRACCIÓN DE AIRE LOCALIZADA",
            href: "/solucionesHVAC/barcos",
          },
          {
            imgUrl:"../../img/soluciones/home/Soluciones4.png",
            lable: "SOLUCIÓN ",
            title: "VENTILACIÓN EN OFICINAS Y ESPACIOS PÚBLICOS",
            href: "/solucionesHVAC/barcos",
          },
          {
            imgUrl:"../../img/soluciones/home/Soluciones5.png",
            lable: "SOLUCIÓN ",
            title: "VENTILACIÓN DE SALA DE TRANSFORMADORES",
            href: "/solucionesHVAC/barcos",
          },
          {
            imgUrl:"../../img/soluciones/home/Soluciones6.png",
            lable: "SOLUCIÓN ",
            title: "VENTILACIÓN NAVE INDUSTRIAL",
            href: "/solucionesHVAC/barcos",
          },
          {
            imgUrl:"../../img/soluciones/home/Soluciones7.png",
            lable: "SOLUCIÓN ",
            title: "CALEFACCIÓN DE LOCALES COMERCIALES CON UNIDADES MANEJADORAS DE AIRE",
            href: "/solucionesHVAC/barcos",
          },
          {
            imgUrl:"../../img/soluciones/home/Soluciones8.png",
            lable: "SOLUCIÓN ",
            title: "DUCTOS TEXTILES PARA MEJORAR LA DISTRIBUCIÓN DEL AIRE",
            href: "/solucionesHVAC/barcos",
          },
          {
            imgUrl:"../../img/soluciones/home/Soluciones9.png",
            lable: "SOLUCIÓN",
            title: "CALEFACCIÓN DE GIMNASIO POLIDEPORTIVO",
            href: "/solucionesHVAC/barcos",
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