import { ventDataType } from "@/types/ventData";

export const tsaData: ventDataType  = {
    email: "",
    whatsapp: "",
    whatsappMessage: "",
    pageData: {
        preTitle: "VENTILADOR ",
        title1: "CENTRÍFUGO",
        title2: "MULTIPALA - TSA",
        subTitle: "DE SIMPLE ASPIRACIÓN",
        description: "",

    },

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
                label: "MODELO TSA",
            },
            {
                key: "qimn",
                label: "QIMN[m3/h]",
            },
            {
                key: "ap",
                label: "Ap[mmca]",
            },
            {
                key: "qm3",
                label: "Q[m3/h]",
            },
            {
                key: "apmax",
                label: "ApMAX[mmca]",
            },
            {
                key: "qmax",
                label: "QMAX[m3/h]",
            },
            {
                key: "apmin",
                label: "ApMIN[mmca]",
            },

        ],
        
    },

    urltdaImageDemo: "../img/solerpalau/tsa/imgDemo/",
    demoImageNames: ["1", "2", "3",],

    urlImageBanner: "../../img/solerpalau/tsa/imgbanner/",
    bannerImageInfo: [
        {
            imgName:"1",
            imgLable:[
                {   
                    textLable:"Sistemas de ventilación",
                    textColor:"stone-100"
                },
                {   
                    textLable:"en áreas de procesos",
                    textColor:""
                },
            ],
        },
        {
            imgName:"2",
            imgLable:[
                {   
                    textLable:"Renovación de aire",
                    textColor:"stone-300"
                },
                {   
                    textLable:"por medio de inyección",
                    textColor:""
                },
                // {   
                //     textLable:"en procesos de",
                //     textColor:""
                // },
                // {   
                //     textLable:"industria",
                //     textColor:""
                // },
            ],
        },
        {
            imgName:"3",
            imgLable:[
                {   
                    textLable:"Extracción de aire ",
                    textColor:"stone-100"
                },
                {   
                    textLable:"en lavaderos industriales",
                    textColor:""
                },
                // {   
                //     textLable:"donde se requiera",
                //     textColor:""
                // },
                // {   
                //     textLable:"renovación de aire",
                //     textColor:""
                // },
            ],
        },
        {
            imgName:"4",
            imgLable:[
                {   
                    textLable:"Sistemas de extracción",
                    textColor:"stone-100"
                },
                {   
                    textLable:" localizada de procesos",
                    textColor:""
                },
                {   
                    textLable:"de industria",
                    textColor:""
                },
                // {   
                //     textLable:"renovación de aire",
                //     textColor:""
                // },
            ],
        }

    ],


}
