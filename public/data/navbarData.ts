interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}


export const itemsNavSolerPalau: ItemsNavbar[] = [
        {
            key: "first",
            label: ["Ventilador Centrífugo", "Autolimitante - RLS"],
            labelShort: "RLS",
            img: "../img/navbar/NavBarRLS1SolerPalau.png",
            href: "/soler&palau/RLS",
        },
        {
            key: "copy",
            label: ["Ventilador Centrífugo", "Multipala - TSA"],
            labelShort: "TSA",
            img: "../img/navbar/NavBarTSA1SolerPalau.png",
            
            href: "/soler&palau/TSA",
        },
        {
            key: "edit",
            label: ["Ventilador ","Centrífugo - TDA"],
            labelShort: "TDA",
            img: "../img/navbar/NavBarTDA1SolerPalau.png",
            href: "/soler&palau/TDA",
        },
        {
            key: "last",
            label: ["Hábitat"],
            labelShort: "Hábitat",
            img: "../img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/soler&palau/habitat",
        },
    ];

export const itemsNavTempomatic: ItemsNavbar[] = [
        {
            key: "1",
            label: ["Caja Ventiladora",],
            labelShort: "CV",
            img: "../img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/tempomatic/CajaVentiladora",
        },
        {
            key: "2",
            label: ["UTA"],
            labelShort: "UTA",
            img: "../img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/tempomatic/TSA",
        },
        {
            key: "3",
            label: ["Calefactor eléctrico"],
            labelShort: "CE",
            img: "../img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/tempomativ/CalefactorElectrico",
        },
        {
            key: "4",
            label: ["Unidad manejadora de aire"],
            labelShort: "UMDA",
            img: "../img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/tempomatic/UnidadManejadoraAire",
        },
        {
            key: "5",
            label: ["Generador de aire caliente"],
            labelShort: "GDAC",
            img: "../img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/tempomatic/GeneradorAireCaliente",
        },
        {
            key: "last",
            label: ["Caldera para calefacción"],
            labelShort: "CC",
            img: "../img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/tempomatic/CalderaParaCalefaccion",
        },
    ];