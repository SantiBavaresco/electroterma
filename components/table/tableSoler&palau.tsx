import React from "react";
import { rlsData } from "@/public/data/soler&palau/rlsData";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";



export default function TableSolerPalau() {
  return (
    <Table aria-label="Tabla de caracteristicas"
        classNames={{
            td:"text-center text-xs lg:text-xl 2xl:text-3xl",
            // thead: "bg-green-500", // This would set the background color of the header
            th: "border-r-4  border-white rounded-2xl rounded-t-none text-xl bg-livered-title text-white",
            // thead: " border-b-[20px] space-x-1 ",
            tr: "even:bg-gray-200 bg-gray-100 ",
        }}
        >
      <TableHeader columns={rlsData.tableData.columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rlsData.tableData.rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
