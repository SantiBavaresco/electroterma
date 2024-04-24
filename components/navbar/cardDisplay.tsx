import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import clsx from "clsx";

import { Button } from "@nextui-org/button";

interface ItemsNavbar {
    data:{
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
    }
}
const CardDisplay: React.FC<ItemsNavbar> = ({ data }) => {
    // const modifiedArrays = data.lable
    return (
        
        <main className={`bg-white 
            data-[selectable=true]:focus:bg-blue-500 !important 
            data-[hover=true]:bg-orange-500 !important
            group group-hover:bg-gray-5 gap-3
            ${data.key==="first" ? "rounded-tl-[28px] rounded-bl-[28px] hover:bg-none !important" : "" } 
            ${data.key==="last" ? "rounded-tr-[28px] rounded-br-[28px] hover:bg-none !important" : "" } 
        `}>
            <div className={``}>
             <Image
                    // shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={data.key}
                    className="p-1 w-[240px] object-contain h-[140px] gap-3 shadow-lg"
                    src={data.img}
                />
            <div className={`min-h-10 h-16 text-center flex flex-col  justify-center text-white font-nunito bg-livered-title group-hover:bg-[#B2B2B2]
                ${data.key==="first" ? "rounded-bl-[28px]" : ""} 
                ${data.key==="last" ? "rounded-br-[28px]" : ""} 
            `}>
                {data?.label?.map((description:string)=>(
                    <p className="   gap-3">{description}</p>
         
                ))}

            </div>
                {/* <p className="bg-livered-title group-hover:bg-midgray gap-3 min-h-10 h-10">{typeof(data.label)}</p> */}
                </div>
        </main>
        // <Card
        //     shadow="sm"
        //     key={item.key}
        //     isPressable
        //     onPress={() => console.log("item pressed")}
        //     className={clsx(
        //         "ml-1 data-[active=true]:text-primary data-[active=true]:font-medium hover:bg-orange-400 hover:text-black "
        //     )}
        // >
        //     <CardBody className="flex items-center w-500px overflow-auto p-0 ">
        //         <Image
        //             shadow="sm"
        //             radius="lg"
        //             width="50%"
        //             alt={item.label1}
        //             className="p-1 w-[240px] object-contain h-[140px]"
        //             src={item.img}
        //         />
        //     </CardBody>

        //     <CardFooter className="flex text-small text-white/80 justify-center bg-livered hover:bg-midgray ">
        //         <div className="">
        //             <p className="">{item.label1}</p>
        //             <p className="">{item.label2}</p>
        //         </div>
        //     </CardFooter>
        // </Card>
    );
}
export default CardDisplay;