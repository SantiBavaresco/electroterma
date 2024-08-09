"use client"
import { Link } from "@nextui-org/link";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { Image } from "@nextui-org/image";

const handleEmailClick = () => {
    const email = 'info@electroterma.com.ar';
    const subject = 'Consulta sobre equipamiento';
    const body = 'Hola! Me gustaria hacer una consulta sobre equipamiento de Electroterma';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;

    // window.location.href = mailtoLink;
    window.open(mailtoLink, '_blank');
};

export default function Footer() {
	return (
		<footer className="w-full flex flex-col text-xs md:text-base items-center justify-center py-3 bg-[#eeeeee]">
		<div className="flex flex-col justify-center items-center ">
		<span className="font-lexeng-bolder font-bold">Calle 5 entre 6 y 8</span>
		<span className="font-lexeng-bold text-[10px] xm:text-xs lg:text-lg">Parque Industrial Mar del Plata - Batán</span>
		<div className="my-1">
			<span className="flex items-center justify-center font-lexeng-bolder font-bold text-center"> <h1 className="pr-4">223-4649999</h1> 

			<a className="font-normal flex flex-row items-center justify-center rounded-md pr-2 hover:bg-midgray" onClick={handleEmailClick} >
				<IoMailOutline className="mx-2 text-orange-600 text-xl" /> 
				info@electroterma.com.ar
			</a>
			</span>
			
		</div>

		<div className="flex flex-row gap-4 items-center justify-center text-orange-600 text-2xl">

			<Link  isExternal  href="https://www.linkedin.com/company/electroterma/" title="Linkedin de Electroterma">
				{/* <CiLinkedin className="text-orange-600 hover:text-blue-700 text-2xl" href=""/>  */}
				<svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7 14.0011V10.5011V7.0011" stroke="#EF771C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M11 14.0011V10.7511M11 10.7511V7.0011M11 10.7511C11 7.0011 17 7.0011 17 10.7511V14.0011" stroke="#EF771C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M7 4.01111L7.01 4" stroke="#EF771C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				<rect x="0.75" y="0.75" width="22.5" height="17.5" rx="4.25" stroke="#EF771C" stroke-width="1.5"/>
				</svg>

			</Link>
			<Link  isExternal  href="https://www.instagram.com/electroterma/" title="Instragram de Electroterma">
				{/* <IoLogoInstagram className="text-orange-600 hover:text-pink-600 text-2xl" /> */}
				<svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 13.5011C14.2091 13.5011 16 11.7102 16 9.5011C16 7.29196 14.2091 5.5011 12 5.5011C9.79086 5.5011 8 7.29196 8 9.5011C8 11.7102 9.79086 13.5011 12 13.5011Z" stroke="#EF771C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M17.5 4.01111L17.51 4" stroke="#EF771C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				<rect x="0.75" y="0.75" width="22.5" height="17.5" rx="4.25" stroke="#EF771C" stroke-width="1.5"/>
				</svg>

			</Link>
			<Link  isExternal  href="https://www.facebook.com/Electroterma/" title="Facebook de Electroterma">
				{/* <svg width="12" height="20" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.375 1.66675H12.25C10.4266 1.66675 8.67789 2.36912 7.38869 3.61937C6.09932 4.86961 5.375 6.56531 5.375 8.33341V12.3334H1.25V17.6667H5.375V28.3334H10.875V17.6667H15L16.375 12.3334H10.875V8.33341C10.875 7.97979 11.0199 7.64065 11.2777 7.3906C11.5356 7.14056 11.8854 7.00008 12.25 7.00008H16.375V1.66675Z" stroke="#EF771C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg> */}
				<div  className="text-orange-600 hover:text-blue-500 text-xl" >
				<svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.75" y="0.75" width="22.5" height="17.5" rx="4.25" stroke="#EF771C" stroke-width="1.5"/>
				<path d="M16 3H13.8182C12.8537 3 11.9288 3.33363 11.2469 3.9275C10.5649 4.52136 10.1818 5.32682 10.1818 6.16667V8.06667H8V10.6H10.1818V15.6667H13.0909V10.6H15.2727L16 8.06667H13.0909V6.16667C13.0909 5.99869 13.1676 5.83761 13.3039 5.71883C13.4403 5.60006 13.6253 5.53333 13.8182 5.53333H16V3Z" stroke="#EF771C" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>

				</div>
			</Link>

			<Link  isExternal  href="https://www.youtube.com/@electroterma849" title="Youtube de Electroterma">
				{/* <AiOutlineYoutube className="text-orange-600 hover:text-livered text-2xl"/> */}
				<svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.5 10L10 12V8L13.5 10Z" fill="#EF771C" stroke="#EF771C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				<rect x="0.75" y="0.75" width="22.5" height="17.5" rx="4.25" stroke="#EF771C" stroke-width="1.5"/>
				</svg>

			</Link>
		</div>

		
		</div>
		<div className=" -mt-20 absolute right-0 md:right-24 w-[60px] md:w-[90px]">
			<Link href="/" target="_top">
				<Image
				src="../../electroterma-logo.png"
				// height={50}
				
				width="100%"
				alt="hola"
				/>
			</Link>
		</div>
		<div className="w-full px-[3%] py-2 mt-2 flex flew-row justify-between bg-[#D9D9D9]">
			<Link
				isExternal
				className="flex items-center gap-1 text-current pt-2"
				href="https://santiagobavaresco.ar"
				title="Bavaresco Santiago Portfolio"
				>
					<p className="text-primary text-sm">
						Bavaresco Santiago
					</p>
					<span className="text-default-600 text-sm">
						© 2024 
					</span>
			</Link>
			<Link
				isExternal
				className="flex items-center gap-1 text-current pt-2 w-[70px] mr-[3.5%]"
				href="https://tandemasesoria.ar/"
				title="Tandem"
				
			>
				<Image
					src="../img/tandem.png"
					// height={50}
					radius="none"
					width="100%"
					alt="hola"
					/>
		    
			
			</Link>
		</div>
	</footer>
	);
}
