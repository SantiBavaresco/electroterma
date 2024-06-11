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
import { Download } from "@/public/svg/download";
// import { useDisclosure } from "@nextui-org/react";

interface Props {
    url: string;
    title: string;
    layer: string;
    bigScreen: boolean;
}

const ModalPdf: React.FC<Props> = ({ url, title, layer, bigScreen, }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const [scrollBehavior, setScrollBehavior] = React.useState("inside");

    // const [numPages, setNumPages] = useState<number>();
    // const [pageNumber, setPageNumber] = useState<number>(1);

    // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    //     setNumPages(numPages);
    // }

    return (
        <div>
            

            <Button  size={bigScreen ? "lg" : "sm"} radius="full" onClick={onOpen} className={`${layer} `}>
                {title} <Download/> {" "}
            </Button>

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