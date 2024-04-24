"use client";
import React from "react";
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

import { useState } from "react";

import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";

import icono from "../electroterma-logo.png"

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
import ImgDisplay from "./imgdisplay(deprecated)";
import { Children } from "react";
import CardDisplay from "./cardDisplay";


interface ItemsNavbar{
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}



export const Navbar = () => {
    const [firstDropdownOpen, setFirstDropdownOpen] = useState(false);
    const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);
  
    const handleSecondDropdownClick = () => {
      setFirstDropdownOpen(false);
      setSecondDropdownOpen(false);
    };

    const items:ItemsNavbar[] = [
        {
            key: "first",
            label: ["Ventilador Centrifigo", "Autolimitantes - RSL"],
            labelShort: "RSL",
            img: "../img/navbar/NavBarRSLSolerPalau.png",
            href: "/soler&palau/RSL",
        },
        {
            key: "copy",
            label: ["Ventilador Centrifigo", "Multipala - TSA"],
            labelShort: "TSA",
            img: "../img/navbar/NavBarTSA1SolerPalau.png",
            href: "/soler&palau/TSA",
        },
        {
            key: "edit",
            label: ["Ventilador Centrifigo - TDA", "TDA"],
            labelShort: "TDA",
            img: "../img/navbar/NavBarTDA1SolerPalau.png",
            href: "/soler&palau/TDA",
        },
        {
            key: "last",
            label: ["Habitat"],
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
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <NextUINavbar maxWidth="full" className="px-10 flex justify-center items-center" position="sticky">
            <NavbarBrand>
                <NextLink
                    className="flex justify-center items-center gap-1"
                    href="/"
                >
                    <Image
                        // className="sm:w-[180px]"
                        src="../img/electrotermalogoletrasNoPadding.png"
                        // height={50}
                        width={200}
                        alt="hola"
                    />
                    {/* <p className="font-bold text-inherit">Electroterma</p> */}
                </NextLink>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {/* <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page" color="secondary">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem> */}
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom" className="bg-[#EF771C] !important translate-y-[-1.7%] rounded-none rounded-bl-[64px]" 
                    // isOpen={firstDropdownOpen} onOpenChange={setFirstDropdownOpen}
                >
                    <DropdownTrigger className="bg-red-500">
                        
                    {/* <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7C0 3.13401 3.13401 0 7 0H40C40 3.86599 36.866 7 33 7H0Z" fill="white"/>
                    <path d="M0 22C0 18.134 3.13401 15 7 15H40C40 18.866 36.866 22 33 22H0Z" fill="white"/>
                    <path d="M0 37C0 33.134 3.13401 30 7 30H40C40 33.866 36.866 37 33 37H0Z" fill="white"/>
                    </svg> */}

            <div className="w-[263px] h-[100%] min-w-64 flex items-center justify-center bg-[#EF771C]">
                <svg width="35" height="33" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7C0 3.13401 3.13401 0 7 0H40C40 3.86599 36.866 7 33 7H0Z" fill="white"/>
                    <path d="M0 22C0 18.134 3.13401 15 7 15H40C40 18.866 36.866 22 33 22H0Z" fill="white"/>
                    <path d="M0 37C0 33.134 3.13401 30 7 30H40C40 33.866 36.866 37 33 37H0Z" fill="white"/>
                </svg>
            </div>

                        {/* <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="../img/electrotermalogoletrasNoPadding.png"
                        /> */}
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat" className="bg-[#EF771C] !important mb-10">
                        {/* <ul className="hidden md:flex gap-4 justify-around pl-1 ml-1"> */}
                            {siteConfig.navItems.map((item) => (
                                
                                        <DropdownItem key={item.label} isReadOnly className="h-[38px] gap-2 flex justify-center text-center  ">
                                            
                                            {item.dropdown ? (
                                                <Dropdown key={item.label} placement="left" className="rounded-[34px] !important shadow-lg border-1 border-[#F5F4F4] 
                                                        bg-[#e1e1e1] translate-x-[-1.5%]"
                                                        // isOpen={secondDropdownOpen} onOpenChange={handleSecondDropdownClick}
                                                        >
                                                    <DropdownTrigger>
                                                        <p className="font-nunito text-white text-2xl ">{item.label}</p>
                                                    </DropdownTrigger>
                                                    <DropdownMenu aria-label="Profile Actions" variant="flat" items={items} 
                                                        className="force-row ">
                                                    
                                                    {(item) => (
                                                        <DropdownItem
                                                            key={item.key}
                                                            className={`rounded-none `}
                                                            // color={item.key === "delete" ? "danger" : "default"}
                                                            // className={item.key === "delete" ? "text-danger" : ""}
                                                        >
                                                            <NextLink
                                                                className=""
                                                                color="foreground"
                                                                href={item.href}
                                                            >
                                                                {/* <ImgDisplay item={item}/>
                                                                    <p>{item.label1}</p> */}
                                                                <CardDisplay data={item}/>
                                                                
                                                            </NextLink>
                                                        </DropdownItem>
                                                    )}
                                                        {/* {items.map((element)=>{
                                                            <DropdownItem key={element.key} >
                                                                <p>TEXTOOO</p>
                                                            </DropdownItem>
                                                        })} */}
                                                       
                                                        
                                                    </DropdownMenu>
                                                 </Dropdown>
                    
                                            ): (
                                                <p className={`font-nunito text-white text-2xl`}>{item.label}</p>
                                            )}
                                        </DropdownItem>
                            ))}
                        {/* </ul> */}
                        {/* <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">
                            Team Settings
                        </DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">
                            Configurations
                        </DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem> */}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </NextUINavbar>
    );
};
