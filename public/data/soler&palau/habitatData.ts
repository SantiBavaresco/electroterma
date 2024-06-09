
interface habitatDataType {
    email: string;
    tiendaOnline: string;
    whatsappNumber: string;
    whatsappMessage: string;
    whatsappLink: string;
    pageData: {
      title1: string;
      p1: string;
      p2: string;
      p3: string;
      subTitle: string;
      mobileSpecsExtractor: string[];
      mobileSpecsInline: string[];

    };
    videoYoutubeId1: string;
    videoYoutubeId2: string;

    urltdaImageDemo: string;
    demoImageNames: string[];
    urlImageBanner: string;
    bannerImageInfo: {
      imgName: string;
      imgLable: {
        textLable: string;
        textColor?: string; // Optional property for text color
      }[];
    }[];
  }

export const habitatData: habitatDataType  = {
    email: "",
    tiendaOnline: "https://www.tiendaelectroterma.com.ar/",
    whatsappLink: "https://wa.me/",
    whatsappNumber: "5492234365978",
    whatsappMessage: "?text=¡Hola!%20Estoy%20en%20la%20tienda%20ELECTROTERMA%20y%20quiero%20pedir%20más%20información.",
    pageData: {
        title1: "Hábitat",
        p1: "Integramos los espacios considerando cada detalle de calidad y confort para ofrecer bienestar y seguridad.",
        p2: "Nuestra amplia gama de productos de ventilación y extractores de baño helicocentrífugos Soler & Palau, proporciona soluciones adecuadas para todo tipo de necesidades, ya sea en entornos domésticos o industriales.",
        p3: "No solo facilitamos a nuestros usuarios la elección del modelo ideal, sino también el diseño preciso para realizar instalaciones de manera cómoda, segura y con garantías.",
        subTitle: "Nos importa que disfrutes de tus momentos",
        mobileSpecsExtractor: ["Perfil extraplano","Alto poder de aspiración",
            "Fácil limpieza e instalación","Silencioso",
            "Seguridad eléctrica total","Funcionamiento en cualquier posición"],

        mobileSpecsInline: ["Fabricación den material plástico","Juntas de goma en impulsión y descarga para absorber las vibraciones",
            "Fácil limpieza e instalación","Silencioso",
            "Seguridad eléctrica total"],

    },

    videoYoutubeId1: "uMn8YFVzBkE",
    videoYoutubeId2: "ea8KWDyYWcA",

    urltdaImageDemo: "../img/solerpalau/habitat/imgDemo/",
    demoImageNames: ["1", "2", "3", "1", "2", "3"],

    urlImageBanner: "../img/solerpalau/imgbanner/",
    bannerImageInfo: [
        {
            imgName:"1",
            imgLable:[
                {   
                    textLable:"Componente de",
                    textColor:""
                },
                {   
                    textLable:"equipo tempomatic",
                    textColor:""
                },
            ],
        },
        {
            imgName:"2",
            imgLable:[
                {   
                    textLable:"Es ideal para",
                    textColor:"stone-300"
                },
                {   
                    textLable:"Extracción localizada",
                    textColor:""
                },
                {   
                    textLable:"en procesos de",
                    textColor:""
                },
                {   
                    textLable:"industria",
                    textColor:""
                },
            ],
        },
        {
            imgName:"3",
            imgLable:[
                {   
                    textLable:"Es ideal para",
                    textColor:"stone-100"
                },
                {   
                    textLable:"Áreas de proceso",
                    textColor:""
                },
                {   
                    textLable:"donde se requiera",
                    textColor:""
                },
                {   
                    textLable:"renovaión de aire",
                    textColor:""
                },
            ],
        }
        
    ],


}
