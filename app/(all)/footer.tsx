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
		<footer className="w-full flex flex-col text-xs md:text-base items-center justify-center py-3 bg-[#D9D9D9]">
		<div className="flex flex-col justify-center items-center ">
		<span className="font-lexeng-bolder font-bold">Calle 5 entre 6 y 8</span>
		<span className="font-lexeng-bold text-[10px] xm:text-xs">Parque Industrial Mar del Plata - Batán</span>
		<div className="my-2">
			<span className="flex items-center justify-center font-lexeng-bolder font-bold text-center">223-4649999</span>
			<span className="flex flex-row items-center justify-center rounded-md pr-2 hover:bg-midgray" onClick={handleEmailClick} >
				<IoMailOutline className="mx-2 text-orange-600 text-xl" /> 
				info@electroterma.com.ar
			</span>
		</div>
		<div className="flex flex-row gap-4 items-center justify-center text-orange-600 text-2xl">

			<Link  isExternal  href="https://www.linkedin.com/company/electroterma/" title="Linkedin de Electroterma">
				<CiLinkedin className="text-orange-600 hover:text-blue-700 text-2xl" href=""/> 
			</Link>
			<Link  isExternal  href="https://www.instagram.com/electroterma/" title="Instragram de Electroterma">
				<IoLogoInstagram className="text-orange-600 hover:text-pink-600 text-2xl" />
			</Link>
			<Link  isExternal  href="https://www.facebook.com/Electroterma/" title="Facebook de Electroterma">
				{/* <svg width="12" height="20" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.375 1.66675H12.25C10.4266 1.66675 8.67789 2.36912 7.38869 3.61937C6.09932 4.86961 5.375 6.56531 5.375 8.33341V12.3334H1.25V17.6667H5.375V28.3334H10.875V17.6667H15L16.375 12.3334H10.875V8.33341C10.875 7.97979 11.0199 7.64065 11.2777 7.3906C11.5356 7.14056 11.8854 7.00008 12.25 7.00008H16.375V1.66675Z" stroke="#EF771C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg> */}
				<div  className="text-orange-600 hover:text-blue-500 text-xl" >
				<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.75" y="0.75" width="19.5" height="19.5" rx="5.25" stroke="#EF771C" stroke-width="1.5"/>
				<path d="M14 4H12.3636C11.6403 4 10.9466 4.31607 10.4352 4.87868C9.9237 5.44129 9.63636 6.20435 9.63636 7V8.8H8V11.2H9.63636V16H11.8182V11.2H13.4545L14 8.8H11.8182V7C11.8182 6.84087 11.8757 6.68826 11.9779 6.57573C12.0802 6.46322 12.219 6.4 12.3636 6.4H14V4Z" stroke="#EF771C" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>


				
				</div>
				</Link>
			<Link  isExternal  href="https://www.youtube.com/@electroterma849" title="Youtube de Electroterma">
				<AiOutlineYoutube className="text-orange-600 hover:text-livered text-2xl"/></Link>
		</div>
		
		</div>
		<div className=" -mt-20 absolute right-0 md:right-24 w-[60px] md:w-[90px]">
			<Link href="/" target="_top">
				<Image
				src="../electroterma-logo.png"
				// height={50}
				
				width="100%"
				alt="hola"
				/>
			</Link>
		</div>

		<div>
			
		</div>
	</footer>
	);
}
