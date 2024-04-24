import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import clsx from "clsx";

import { Button } from "@nextui-org/button";

export default function ImgDisplay({
    item, 
    // children,
}:  
{
    item: any;
    // children: React.ReactNode;
}) {
    return (
        
        <Card
            shadow="sm"
            key={item.key}
            isPressable
            onPress={() => console.log("item pressed")}
            className={clsx(
                "ml-1 data-[active=true]:text-primary data-[active=true]:font-medium hover:bg-orange-400 hover:text-black "

                
            )}
        >
            <CardBody className="flex items-center w-500px overflow-auto p-0 ">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="50%"
                    alt={item.label1}
                    className="p-1 w-[240px] object-contain h-[140px]"
                    src={item.img}
                />
            </CardBody>

            <CardFooter className="flex text-small text-white/80 justify-center bg-livered hover:bg-midgray ">
                <div className="">
                    <p className="">{item.label1}</p>
                    <p className="">{item.label2}</p>
                </div>
            </CardFooter>
        </Card>
    );
}
