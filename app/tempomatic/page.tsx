"use client"
import { title } from "@/components/primitives";
import React, { useEffect } from 'react';
// import { useEffect, useState } from "react";
import "./styles1.css";

export default function TempomaticPage( ) {

	useEffect(() => {

        require("./scrubbing1");

        // Devolver una función de limpieza
        return () => {
            // Cualquier limpieza que se necesite al desmontar el componente
        };
    }, []);
	return (

			<section>
				<canvas id="hero-lightpass" className="mb-16"/>
			</section>

	);
}
