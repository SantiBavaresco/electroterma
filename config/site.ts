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
            label: "Tempomatic",
            href: "/tempomatic",
			dropdown: true,
            dwData: itemsNavTempomatic,
        },
        {
            label: "Soler & Palau",
            href: "/soler&palau",
			dropdown: true,
            dwData: itemsNavSolerPalau,
        },
        {
            label: "DTI",
            href: "/dti",
			dropdown: false,
        },

        {
            label: "Zila",
            href: "/zila",
			dropdown: false,
            dwData: itemsNavZila,
        },
        {
            label: "Soluciones en HVAC",
            href: "/solucionesHVAC",
			dropdown: false,
        },
        // {
        //     label: "Nosotros",
        //     href: "/nosotros",
		// 	dropdown: false,

        // },
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
			dropdown: false,
        },


        {
            label: "Tempomatic",
            href: "/tempomatic",
			dropdown: true,
            dwData: itemsNavTempomatic,
        },
        {
            label: "Soler & Palau",
            href: "/soler&palau",
			dropdown: true,
            dwData: itemsNavSolerPalau,
        },
        {
            label: "DTI",
            href: "/dti",
			dropdown: false,
        },

        {
            label: "Zila",
            href: "/zila",
			dropdown: false,
            dwData: itemsNavZila,
        },
        {
            label: "Soluciones en HVAC",
            href: "/solucionesHVAC",
			dropdown: false,
        },
        // {
        //     label: "Nosotros",
        //     href: "/nosotros",
		// 	dropdown: false,

        // },
        {
            label: "Tienda Online",
            href: "https://www.tiendaelectroterma.com.ar/",
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
