export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Electroterma - Soluciones en HVAC",
    description: "Soluciones en HVAC",
    navItems: [
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
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
    },
};
