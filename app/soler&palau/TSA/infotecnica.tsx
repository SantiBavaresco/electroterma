import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/table";


export default function InfoTecnica() {

    return (
        <div className="flex flex-col gap-3 max-w-[320px] overflow-x-auto md:max-w-full">
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
        </div>
    );
}
