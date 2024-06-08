interface generalDataType {
    email: string;
    whatsappNumber: string;
    whatsappMessage: string;
    whatsappLink: string;
    pageData: {
      title1: string;
      p1: string;
      p2: string;
      p3: string;
      subTitle: string;

    };
    videoYoutube1: string;
    videoYoutube2: string;

  }

  export const generalData: generalDataType  = {
    email: "",
    whatsappLink: "https://wa.me/",
    whatsappNumber: "5492236356756",
    whatsappMessage: "?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion.",

    pageData: {
        title1: "Hábitat",
        p1: "Integramos los espacios considerando cada detalle de calidad y confort para ofrecer bienestar y seguridad.",
        p2: "Nuestra amplia gama de productos de ventilación y extractores de baño helicocentrífugos Soler & Palau, proporciona soluciones adecuadas para todo tipo de necesidades, ya sea en entornos domésticos o industriales.",
        p3: "No solo facilitamos a nuestros usuarios la elección del modelo ideal, sino también el diseño preciso para realizar instalaciones de manera cómoda, segura y con garantías.",
        subTitle: "Nos importa que disfrutes de tus momentos",

    },

    videoYoutube1: "https://www.youtube.com/watch?v=uMn8YFVzBkE",
    videoYoutube2: "https://www.youtube.com/watch?v=ea8KWDyYWcA",

   
}