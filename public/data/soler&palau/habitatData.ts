
interface habitatDataType {
    email: string;
    tiendaOnline: string;
    whatsappNumber: string;
    whatsappNumber1: string;
    whatsappMessageHabitat: string;
    whatsappMessageExtractor: string;
    whatsappMessageInline: string;
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

    inlineData: {
        title: string;
        subTitle1: string;
        subTitle2: string;
        p1: string;
        p2: string;
        p3: string;
    }; 

    extractorData: {
        title: string;
        subTitle1: string;
        subTitle2: string;
        p1: string;
        p2: string;

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

    tableData: {
        rows: {
          key: string;
          modelo: string;
          qimn?: number; // Assuming numerical values for these properties
          ap?: number;
          omax?: number;
          apmin?: number;
          qm3?: number,
          apmax?: number,
          qmax?: number,
        }[];
        columns: {
          key: string;
          label: string;
        }[];
      };
  }

export const habitatData: habitatDataType  = {
    email: "",
    tiendaOnline: "https://www.tiendaelectroterma.com.ar/",
    whatsappLink: "https://wa.me/",
    whatsappNumber: "5492235506880",
    whatsappNumber1: "5492235506880",
    whatsappMessageHabitat: "?text=Hola.%20Quiero%20más%20información%20sobre%20los%20productos%20de%20la%20línea%20Hábitat%20de%20Soler%20%26%20Palau.",
    whatsappMessageExtractor: "?text=Hola.%20Quiero%20más%20información%20sobre%20los%20extractores%20de%20la%20línea%20Hábitat%20de%20Soler%20&%20Palau.",
    whatsappMessageInline: "?text=Hola.%20Quiero%20más%20información%20sobre%20los%20ventiladores%20de%20la%20línea%20Hábitat%20de%20Soler%20&%20Palau.",
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

    inlineData: {
        title: "VENTILADORES",
        subTitle1: "HELICOCENTRÍFUGOS EN LÍN",
        subTitle2: "EA",
        p1: "La amplitud de la gama convierte a la serie TD-MIXVENT en una solución ",
        p2: "eficaz para todo tipo de instalaciones de ventilación doméstica y comercial",
        p3: "",
        
    },

    extractorData: {
        title: "VENTILADORES",
        subTitle1: "EXTRACTORES DE BA",
        subTitle2: "ÑO",
        p1: "Diseñados para ofrecer una ventilación eficiente y confortable en cuartos de baño ",
        p2: "y pequeñas estancias tanto de locales residenciales como comerciales.",
        // p3: "No solo facilitamos a nuestros usuarios la elección del modelo ideal, sino también el diseño preciso para realizar instalaciones de manera cómoda, segura y con garantías.",
    },

    videoYoutubeId1: "uMn8YFVzBkE",
    videoYoutubeId2: "ea8KWDyYWcA",

    urltdaImageDemo: "../img/solerpalau/habitat/imgDemo/",
    demoImageNames: ["1", "2", "3", "1", "2", "3"],

    urlImageBanner: "../../img/solerpalau/imgbanner/",
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

    tableData: {
        rows:[ 
            
            {
                key: "1",
                modelo: "TSA 7/3 - 4P",
                qimn: 500,
                ap: 27,
                qm3: 1000,
                apmax: 24,
                qmax: 1400,
                apmin: 20,
            },
            {
                key: "2",
                modelo: "TSA 9/4 - 4P",
                qimn: 700,
                ap: 38,
                qm3: 1150,
                apmax: 42,
                qmax: 2500,
                apmin: 20,
            },
            {
                key: "3",
                modelo: "TSA 10/5 - 4P",
                qimn: 1000,
                ap: 48,
                qm3: 1500,
                apmax: 54,
                qmax: 3600,
                apmin: 28,
            },
            {
                key: "4",
                modelo: "TSA 12/6 - 4P",
                qimn: 1500,
                ap: 68,
                qm3: 2600,
                apmax: 78,
                qmax: 4500,
                apmin: 65,
            },
            {
                key: "5",
                modelo: "TSA 15/7 - 6P",
                qimn: 2000,
                ap: 40,
                qm3: 3000,
                apmax: 48,
                qmax: 5800,
                apmin: 38,
            },
            {
                key: "6",
                modelo: "TSA 18/9 - 6P",
                qimn: 2500,
                ap: 58,
                qm3: 5500,
                apmax: 65,
                qmax: 9000,
                apmin: 55,
            },
            
        ],
        columns: [
            {
                key: "modelo",
                label: "TD-MIXVENT",
            },
            {
                key: "qimn",
                label: "Velocidad (rpm)",
            },
            {
                key: "ap",
                label: "Potencia absorbida máxima (W)",
            },
            {
                key: "qm3",
                label: "Intensidad absorbida máxima (A)",
            },
            {
                key: "apmax",
                label: "Caudal en descarga libre (m3/h)",
            },
            {
                key: "qmax",
                label: "Temperatura de trabajo (°C)",
            },
            {
                key: "apmin",
                label: "Nivel de presión sonora* (dB(A))",
            },
            {
                key: "apmin",
                label: "Ø conducto (mm)",
            },
            {
                key: "apmin",
                label: "Peso (kg)",
            },



        ],
        
    },


}
