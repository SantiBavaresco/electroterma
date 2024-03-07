"use client";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
} from "@nextui-org/dropdown";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import ImgDisplay from "./imgdisplay";
import { Children } from "react";

export const Navbar = () => {
    const items = [
        {
            key: "new",
            label1: "Ventilador Centrifigo",
            label2: "Autolimitantes - RSL",
            labelShort: "RSL",
            img: "../img/navbar/NavBarRSLSolerPalau.png",
            href: "/soler&palau/RSL",
        },
        {
            key: "copy",
            label1: "Ventilador Centrifigo",
            label2: "Miltipala - TSA",
            labelShort: "TSA",
            img: "../img/navbar/NavBarTSA1SolerPalau.png",
            href: "/soler&palau/TSA",
        },
        {
            key: "edit",
            label1: "Ventilador Centrifigo - TDA",
            label2: "TDA",
            labelShort: "TDA",
            img: "../img/navbar/NavBarTDA1SolerPalau.png",
            href: "/soler&palau/TDA",
        },
        {
            key: "delete",
            label1: "Habitat",
            label2: "Habitat",
            labelShort: "Habitat",
            img: "../img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/soler&palau/habitat",
        },
    ];

    const searchInput = (
        <Input
            aria-label="Buscar"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Buscar..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
        />
    );

    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        <Image
                            // className="sm:w-[180px]"
                            src="../img/electrotermalogoletrasNoPadding.png"
                            // height={50}
                            width={145}
                            alt="hola"
                        />
                        {/* <p className="font-bold text-inherit">Electroterma</p> */}
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden md:flex gap-4 justify-around pl-10 ml-1">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            {item.dropdown ? (
                                <Dropdown backdrop="opaque">
                                    <DropdownTrigger>
                                        <a
                                            className="hover:bg-orange-600 hover:text-white p-2"
                                            // className={clsx(
                                            //     linkStyles({
                                            //         color: "foreground",
                                            //     }),
                                            //     "data-[active=true]:text-primary data-[active=true]:font-medium hover:bg-orange-600 hover:text-white p-2"
                                            // )}
                                            color="foreground"
                                            // href={item.href}
                                        >
                                            {/* <Button color="warning" variant="ghost" >Soler & palau</Button> */}
                                            {item.label}
                                        </a>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        className="force-row"
                                        aria-label="Dynamic Actions"
                                        items={items}
                                    >
                                        {(item) => (
                                            <DropdownItem
                                                key={item.key}
                                                // color= "success"
                                                className="rounded-none"
                                            >
                                                <NextLink
                                                    className=""
                                                    color="foreground"
                                                    href={item.href}
                                                >
                                                    <ImgDisplay item={item}/>
                                                    {/* <Button color="warning" variant="ghost" >Soler & palau</Button> */}
                                                    {/* <div className="">
                                                        <p className="">
                                                            {item.label1}
                                                        </p>
                                                        <p className=" ">
                                                            {item.label2}
                                                        </p>
                                                    </div> */}
                                                </NextLink>
                                            </DropdownItem>
                                        )}
                                    </DropdownMenu>
                                </Dropdown>
                            ) : (
                                <NextLink
                                    className={clsx(
                                        linkStyles({ color: "foreground" }),
                                        "data-[active=true]:text-primary data-[active=true]:font-medium hover:bg-orange-600 hover:text-white p-2"
                                    )}
                                    color="foreground"
                                    href={item.href}
                                >
                                    {/* <Button color="warning" variant="ghost" >Soler & palau</Button> */}
                                    {item.label}
                                </NextLink>
                            )}
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            {/* <NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
            isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Sponsor
					</Button>
				</NavbarItem>
			</NavbarContent> */}

            <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
                {/* <Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch /> */}
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 3
                                        ? "primary"
                                        : index ===
                                          siteConfig.navMenuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
