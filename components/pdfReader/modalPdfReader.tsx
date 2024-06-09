"use client";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

import { FaArrowRightToBracket } from "react-icons/fa6";
import { pdfjs } from "react-pdf";
import PdfReader from "./pdfReader";
// import { useDisclosure } from "@nextui-org/react";

interface Props {
    url: string;
    title: string;
    layer: string;
    primaryColor?: string;
    reflectionColor?: string;
    borderColor?: string;
    color: boolean;
}

const ModalPdf: React.FC<Props> = ({ url, title, layer, color, primaryColor, reflectionColor, borderColor}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const [scrollBehavior, setScrollBehavior] = React.useState("inside");

    // const [numPages, setNumPages] = useState<number>();
    // const [pageNumber, setPageNumber] = useState<number>(1);

    // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    //     setNumPages(numPages);
    // }

    return (
        <div>
            
            {color ? <button onClick={onOpen} className={`${layer} inline-flex animate-background-shine items-center justify-center rounded-md border border-high-orange bg-[linear-gradient(110deg,#4c3500,45%,#e5a100,55%,#4c3500)] bg-[length:200%_100%] text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50`}>
                {title} <FaArrowRightToBracket className="text-2xl m-auto" />{" "}
            </button> :
            <button onClick={onOpen} className={`${layer} inline-flex items-center justify-center rounded-md border border-blue-600 `}>
                {title} <FaArrowRightToBracket className="text-2xl m-auto" />{" "}
            </button>
    }

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" scrollBehavior="inside">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {title}
                            </ModalHeader>
                            <ModalBody>
                                <PdfReader url={url}/>
                                
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};
export default ModalPdf;