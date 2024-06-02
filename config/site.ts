export type SiteConfig = typeof siteConfig;
import { itemsNavSolerPalau, itemsNavTempomatic, itemsNavZila } from "@/public/data/navbarData";

export const siteConfig = {
    name: "Electroterma - Soluciones en HVAC",
    description: "Soluciones en HVAC",
    navItems: [
        {
            label: "Inicio",
            href: "/",
			dropdown: false,
        },
        {
            label: "Soluciones en HVAC",
            href: "/solucionesHVAC",
			dropdown: false,
        },
        {
            label: "Soler&Palau",
            href: "/soler&palau",
			dropdown: true,
            dwData: itemsNavSolerPalau,
        },
        {
            label: "Tempomatic",
            href: "/tempomatic",
			dropdown: true,
            dwData: itemsNavTempomatic,
        },
        

        {
            label: "Zila",
            href: "/zila",
			dropdown: true,
            dwData: itemsNavZila,
        },
        {
            label: "Nosotros",
            href: "/nosotros",
			dropdown: false,

        },
        {
            label: "Tienda Online",
            href: "https://www.tiendaelectroterma.com.ar/",
			dropdown: false,

        },

    ],
    navMenuItems: [
        {
            label: "Inicio",
            href: "/",
        },
        {
            label: "Soluciones en HVAC",
            href: "/solucionesHVAC",
			dropdown: false,
        },
        {
            label: "Tempomatic",
            href: "/tempomatic",
			dropdown: true,

        },
        {
            label: "Soler&Palau",
            href: "/soler&palau",
            imgHref: "",
			dropdown: true,

        },

        {
            label: "Zila",
            href: "/zila",
			dropdown: true,

        },
        {
            label: "Nosotros",
            href: "/nosotros",
			dropdown: false,

        },
        {
            label: "Tienda Online",
            href: "/tiendaonline",
			dropdown: false,

        },
        {
            label: "Salir",
            href: "",
			dropdown: false,

        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
    },
};
