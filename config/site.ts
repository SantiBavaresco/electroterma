export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Electroterma - Soluciones en HVAC",
    description: "Soluciones en HVAC",
    // navItems: [
    // 	{
    // 		label: "Home",
    // 		href: "/",
    // 	},
    // {
    //   label: "Docs",
    //   href: "/docs",
    // },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // }
    // ],
    navItems: [
        {
            label: "Nosotros",
            href: "/nosotros",
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
            label: "DTI",
            href: "/dti",
			dropdown: true,

        },
        {
            label: "Zila",
            href: "/zila",
			dropdown: true,

        },
        {
            label: "Asesoramiento",
            href: "/asesoramiento",
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
            label: "Nosotros",
            href: "/nosotros",
        },
        {
            label: "Tempomatic",
            href: "/tempomatic",
        },
        {
            label: "Soler&Palau",
            href: "/soler&palau",
        },
        {
            label: "DTI",
            href: "/dti",
        },
        {
            label: "Zila",
            href: "/zila",
        },
        {
            label: "Asesoramiento",
            href: "/asesoramiento",
        },
        {
            label: "Tienda Online",
            href: "/tiendaonline",
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
