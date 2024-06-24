import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/table";
import { Accordion, AccordionItem } from "@nextui-org/react";



export default function InfoTecnica() {

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

        
    const itemClasses = {
        base: "py-4 bg-red-500 w-full opacity-95",
        title: "font-normal text-2xl",
        trigger:
            "px-2 py-2 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-xl px-2",
    };

    return (
        <div className="flex flex-col gap-3 max-w-[320px] overflow-x-auto md:max-w-full">


                <Accordion
                    variant="splitted"
                    itemClasses={itemClasses}
                    selectionMode="multiple"
                >
                    <AccordionItem
                        key="facil"
                        aria-label=""
                        startContent={

                            <div className="w-full grid grid-cols-6">
                                <div className="bg-orange-500 text-white">
                                    MODELO TSA
                                </div>
                                <div className="bg-orange-500 text-white text-xs">
                                    QMIN[m3/h]
                                </div>
                                <div className="bg-orange-500 text-white text-xs">
                                    Ap[mmca]
                                </div>
                                <div className="bg-orange-500 text-white text-xs">
                                    Q[m3/h]
                                </div>
                                <div className="bg-orange-500 text-white text-xs">
                                    Ap Max[mmca]
                                </div>
                                <div className="bg-orange-500 text-white text-xs">
                                    QMAX[m3/h]
                                </div>
                                <div  className="bg-orange-500 text-white text-xs">
                                    Ap Min[mmca]
                                </div>
                            </div>
                        }
                        // indicator={<FacilInstalacion />}
                        title=""
                    >
                        <Table
                color="warning"
                selectionMode="single"
                defaultSelectedKeys={["2"]}
                aria-label="Example static collection table"

            >
                <TableHeader>
                    <TableColumn className="bg-orange-500 text-white">
                        MODELO TSA
                    </TableColumn>
                    <TableColumn className="bg-orange-500 text-white text-xs">
                        QMIN[m3/h]
                    </TableColumn>
                    <TableColumn className="bg-orange-500 text-white text-xs">
                        Ap[mmca]
                    </TableColumn>
                    <TableColumn className="bg-orange-500 text-white text-xs">
                        Q[m3/h]
                    </TableColumn>
                    <TableColumn className="bg-orange-500 text-white text-xs">
                        Ap Max[mmca]
                    </TableColumn>
                    <TableColumn className="bg-orange-500 text-white text-xs">
                        QMAX[m3/h]
                    </TableColumn>
                    <TableColumn  className="bg-orange-500 text-white text-xs">
                        Ap Min[mmca]
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>TSA 9/4 - 4P</TableCell>
                        <TableCell>700</TableCell>
                        <TableCell>38</TableCell>
                        <TableCell>1150</TableCell>
                        <TableCell>42</TableCell>
                        <TableCell>2500</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>TSA 10/5 - 4P</TableCell>
                        <TableCell>800</TableCell>
                        <TableCell>48</TableCell>
                        <TableCell>1500</TableCell>
                        <TableCell>55</TableCell>
                        <TableCell>3600</TableCell>
                        <TableCell>28</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>TSA 12/6 - 4P</TableCell>
                        <TableCell>1350</TableCell>
                        <TableCell>68</TableCell>
                        <TableCell>2600</TableCell>
                        <TableCell>78</TableCell>
                        <TableCell>4500</TableCell>
                        <TableCell>65</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>TSA 15/7 - 6P</TableCell>
                        <TableCell>1400</TableCell>
                        <TableCell>40</TableCell>
                        <TableCell>3000</TableCell>
                        <TableCell>48</TableCell>
                        <TableCell>5800</TableCell>
                        <TableCell>38</TableCell>
                    </TableRow>
                    <TableRow key="5">
                        <TableCell>TSA 15/7 - 4P</TableCell>
                        <TableCell>2200</TableCell>
                        <TableCell>95</TableCell>
                        <TableCell>5000</TableCell>
                        <TableCell>110</TableCell>
                        <TableCell>7000</TableCell>
                        <TableCell>100</TableCell>
                    </TableRow>
                    <TableRow key="6">
                        <TableCell>TSA 18/9 - 6P</TableCell>
                        <TableCell>2300</TableCell>
                        <TableCell>58</TableCell>
                        <TableCell>5500</TableCell>
                        <TableCell>65</TableCell>
                        <TableCell>9000</TableCell>
                        <TableCell>55</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
                    </AccordionItem>
                    
                </Accordion>
                
            
        </div>
    );
}
