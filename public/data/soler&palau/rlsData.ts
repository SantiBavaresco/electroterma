import { ventDataType } from "@/types/ventData";

export const rlsData: ventDataType  = {
    email: "",
    whatsapp: "",
    whatsappMessage: "",
    pageData: {
        preTitle: "VENTILADOR ",
        title1: "CENTRÍFUGO",
        title2: "AUTOLIMITANTE - RLS",
        subTitle: "DE SIMPLE ASPIRACIÓN",
        description: "",

    },

    tableData: {
        rows:[ 
            
            {
                key: "1",
                modelo: "RLS 355 - 4P",
                qimn: 2000,
                ap: 22,
                omax: 3400,
                apmin: 15,
            },
            {
                key: "2",
                modelo: "RLS 400 - 4P",
                qimn: 2700,
                ap: 52,
                omax: 5400,
                apmin: 23,
            },
            {
                key: "3",
                modelo: "RLS 450 - 4P",
                qimn: 3700,
                ap: 65,
                omax: 7700,
                apmin: 25,
            },
            {
                key: "4",
                modelo: "RLS 500 - 4P",
                qimn: 5000,
                ap: 80,
                omax: 10200,
                apmin: 36,
            },
            {
                key: "5",
                modelo: "RLS 560 - 4P",
                qimn: 7000,
                ap: 100,
                omax: 14000,
                apmin: 40,
            },
            {
                key: "6",
                modelo: "RLS 630 - 4P",
                qimn: 10000,
                ap: 130,
                omax: 20000,
                apmin: 55,
            },
            {
                key: "7",
                modelo: "RLS 710 - 4P",
                qimn: 14000,
                ap: 160,
                omax: 28000,
                apmin: 65,
            },
            
        ],
        columns: [
            {
                key: "modelo",
                label: "MODELO RLS",
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
                key: "omax",
                label: "OMAX[m3/h]",
            },
            {
                key: "apmin",
                label: "ApMIN[mmca]",
            },

        ],
        
    },

    urltdaImageDemo: "../img/solerpalau/rls/imgDemo/",
    demoImageNames: ["1", "2", "3",],

    urlImageBanner: "../img/solerpalau/rls/imgbanner/",
    bannerImageInfo: [
        {
            imgName:"1",
            imgLable:[
                {   
                    textLable:"Renovación",
                    textColor:""    
                },
                {   
                    textLable:"de Aire ",
                    textColor:""
                },
            ],
        },
        {
            imgName:"2",
            imgLable:[
                {   
                    textLable:"Extracción e inyección",
                    textColor:"stone-300"
                },
                {   
                    textLable:"cocina restaurante",
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
                    textLable:"Equipo de secado y",
                    textColor:"stone-100"
                },
                {   
                    textLable:"almacenaje de granos",
                    textColor:""
                },
                // {   
                //     textLable:"donde se requiera",
                //     textColor:""
                // },
                // {   
                //     textLable:"renovaión de aire",
                //     textColor:""
                // },
            ],
        },
        {
            imgName:"4",
            imgLable:[
                {   
                    textLable:"Extracción e inyección",
                    textColor:"stone-100"
                },
                {   
                    textLable:"en procesos industriales",
                    textColor:""
                },
                // {   
                //     textLable:"donde se requiera",
                //     textColor:""
                // },
                // {   
                //     textLable:"renovaión de aire",
                //     textColor:""
                // },
            ],
        }
        
    ],


}
