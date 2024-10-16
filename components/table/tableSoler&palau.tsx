import React from "react";
import { rlsData } from "@/public/data/soler&palau/rlsData";
import { ventDataType } from "@/types/ventData";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

interface DataType {
  // Define the structure of rlsData here
  tableData: {
    rows: {
      key: string;
      modelo?: string;
      A?: number;
      B?: number;
      D?: number;
      E?: number;
      F?: number;
      G?: number;
      H?: number;
      I?: number;
      J?: number;
      K?: number;
      L?: number;
      M?: number;
      R?: number;
      X?: number;
      Y?: number;
      Z?: number;
      nxp?: string;
      O?: number;
      peso?: string;

      qimn?: number; // Assuming numerical values for these properties
      ap?: number;
      omax?: number;
      apmin?: number;
      qm3?: number,
      apmax?: number,
      qmax?: number,
    }[];
    columns: {
      key: string;
      label: string;
    }[];
  };
}

export const TableSolerPalau: React.FC<DataType> = ({ tableData, ...props }) => {
// export default function TableSolerPalau() {
  return (
    <Table aria-label="Tabla de caracteristicas"
        classNames={{
            td:"text-center min-w-[4vw] text-sm lg:text-md 2xl:text-xl  3xl:text-2xl",
            // thead: "bg-green-500", // This would set the background color of the header
            th: "text-center border-r-4  border-white rounded-2xl rounded-t-none  text-sm lg:text-md xl:text-lg bg-livered-title text-white",
            // thead: " border-b-[20px] space-x-1 ",
            tr: "even:bg-gray-200 bg-gray-100 ",
        }}
        >
      <TableHeader columns={tableData.columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={tableData.rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
