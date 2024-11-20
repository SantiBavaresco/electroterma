"use client"
import React from 'react';
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
// import React from 'react';
// import './index.css';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Menu, Button, Divider, theme  } from 'antd';
import { Select } from 'antd';
import { BsArrowBarLeft } from "react-icons/bs";
import { siteConfig } from "@/config/site";
import { itemsNavSolerPalau as Soler, itemsNavTempomatic as Tempomatic } from "@/public/data/navbarData";
import { Image } from "@nextui-org/image";


import NextLink from "next/link";
import CardDisplay from './cardDisplay';





const Burger =  
  <div className="w-[22vw] 2xl:w-[15vw] px-auto h-[150%] md:min-w-64 flex items-center justify-center p-[18px] bg-[#EF771C]">
    <svg
        width="30"
        height="28"
        viewBox="0 0 40 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0 7C0 3.13401 3.13401 0 7 0H40C40 3.86599 36.866 7 33 7H0Z"
            fill="white"
        />
        <path
            d="M0 22C0 18.134 3.13401 15 7 15H40C40 18.866 36.866 22 33 22H0Z"
            fill="white"
        />
        <path
            d="M0 37C0 33.134 3.13401 30 7 30H40C40 33.866 36.866 37 33 37H0Z"
            fill="white"
        />
    </svg>
  </div>



const items: MenuProps['items'] = [
  {
    key: '1',
    type: 'group',
    style: { backgroundColor: "#EF771C", borderTopLeftRadius:4, borderTopRightRadius: 4 , margin:-4},
    // mode: "horizontal",
    // label: <div className='bg-green-500 mx-2 w-full -m -trans- -mt-2 overflow-hidden '></div>,
    // label: 'Group title',
    children: [
      {
        key: '1-1',
    label: 
          <NextLink
            className=""
            color="foreground"
            href="/"
            target={undefined }
          >
              <p className={`font-nunito text-white text-[1.1vw] ml-[30px] bg-blue-500 !important`}>
                Inicio
              </p>
            
          </NextLink>,
      }]

  },
  {
    key: '2',
    type: "submenu",
    // popupClassName: "flex flex-row",
    popupOffset:[0,0],
    
    style: { backgroundColor: "#EF771C", margin:-4 },
    label: 
      <h1 className='flex text-[1.1vw] text-white items-center font-nunito'> <BsArrowBarLeft className="text-2xl"/> 
        <h2 className='pl-3'>Tempomatic</h2> 
      </h1>,
    children: [
      {
        key: '2-1',
        type: 'group',

        label: 
        <div className='grid grid-cols-3 gap-3 -mx-'> 
          {Tempomatic.map((element)=>(
            <NextLink
              className=""
              key={element.key}
              color="foreground"
              href={element.href}
              target="_top"
              // onClick={setFirstFalse}
              >
                <CardDisplay  data={element} />
            </NextLink>

          ))}
          
        </div>,
        
        // style: { backgroundColor: "blue" },

      },
     
    ],
  },
  {
    key: '3',
    type: "submenu",
    popupOffset:[0,0],
    style: { backgroundColor: "#EF771C", margin:-4 },

    label: 
      <h1 className='flex text-[1.1vw] text-white items-center font-nunito'> <BsArrowBarLeft className="text-2xl"/> 
        <h2 className='pl-3'>Soler & Palau</h2> 
      </h1>,
    children: [
      {
        key: '3-1',
        type: 'group',
        label: 
        <div className='flex gap-3 -mx-2'> 
          
          {Soler.map((element)=>(
            <NextLink
              key={element.key}
              className=""
              color="foreground"
              href={element.href}
              target="_top"
              // onClick={setFirstFalse}
              >
                <CardDisplay  data={element} />
            </NextLink>

          ))}
        </div>,
        
        // style: { backgroundColor: "blue" },

      },
     
    ],
  },
  {
    key: '4',
    type: 'group',
    style: { backgroundColor: "#EF771C", margin:-4 },
    // mode: "horizontal",
    // label: <div className='bg-green-500 mx-2 w-full -m -trans- -mt-2 overflow-hidden '></div>,
    // label: 'Group title',
    children: [
      {
        key: '4-1',
    label: 
      <NextLink
        className=""
        color="foreground"
        href="/dti"
        target={undefined }
      >
          <p className={`font-nunito text-white text-[1.1vw] ml-[30px]`}>
            DTI
          </p>
        
      </NextLink>,
      }]
  },
  {
    key: '5',
    type: 'group',
    style: { backgroundColor: "#EF771C", margin:-4 },
    // mode: "horizontal",
    // label: <div className='bg-green-500 mx-2 w-full -m -trans- -mt-2 overflow-hidden '></div>,
    // label: 'Group title',
    children: [
      {
        key: '5-1',
        label: 
          <NextLink
            className=""
            color="foreground"
            href="/zila"
            target={undefined }
          >
              <p className={`font-nunito text-white text-[1.1vw] ml-[30px]`}>
                Zila
              </p>
            
          </NextLink>,
      }]
  },
  {
    key: '6',
    type: 'group',
    style: { backgroundColor: "#EF771C",  borderRadius: 0, margin:-4},
    // mode: "horizontal",
    // label: <div className='bg-green-500 mx-2 w-full -m -trans- -mt-2 overflow-hidden '></div>,
    // label: 'Group title',
    children: [
      {
        key: '6-1',
        label: 
          <NextLink
            className=""
            color="foreground"
            href="/solucionesHVAC"
            target={undefined }
          >
              <p className={`font-nunito text-white text-[1.1vw] ml-[30px] `}>
              Soluciones en HVAC
              </p>
            
          </NextLink>,
      }]
  },
  {
    key: '7',
    type: "group",
    style: { backgroundColor: "#EF771C", paddingBottom: 10, margin:-4 ,
      borderTopLeftRadius:0, borderTopRightRadius: 0 ,
      borderBottomLeftRadius:4, borderBottomRightRadius: 4},
    // mode: "horizontal",
    // label: <div className='bg-green-500 mx-2 w-full -m -trans- -mt-2 overflow-hidden '></div>,
    // label: 'Group title',
    children: [
        {
          key: '7-1',
          label: 
          <NextLink
          className="rounded-none"
          color="foreground"
          href="https://www.tiendaelectroterma.com.ar/"
          target="_blank"
        >
            <p className={`font-nunito text-white text-[1.1vw] ml-[30px]`}>
              Tienda Online
            </p>
          
        </NextLink>,
        },
      ],
    
  },
];  



export const NavbarPrueba: React.FC = () => (

<div id="area" className='flex fixe w-full bg-opacity-80 bg-white backdrop-blur-sm '>
    <NextLink
          className="rounded-none my-auto ml-10"
          color="foreground"
          href="/"
          target="_blank"
        >
            <Image
               // className="sm:w-[180px]"
              src="../../img/electrotermalogoletrasNoPadding.png"
              // height={50}
              width={240}
              alt="hola"
            />
          
        </NextLink>
  <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }} 
  // <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}  

    // mode="Horizontal"
    // destroyPopupOnHide
    overlayClassName=" bg-liverd rounded m- p- w-[22vw] 2xl:w-[15vw] "
  
    // dropdownRender={(menu) => (
    //   <div style={contentStyle}>
    //     {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
    //     <Divider style={{ margin: 0 }} />
    //     <Space style={{ padding: 8 }}>
    //       <Button type="primary">Click me!</Button>
    //     </Space>
    //   </div>
    // )}
    // getPopupContainer={() => document.body}
    // getPopupContainer={() => document.getElementById('area')}
    // dropdownRender={(menus) => (
    //         <div>
    //           <div className='bg-transparent text-3xl z-10 rounded-full !important '
    //             style={{ 
    //               padding: -10, 
    //               borderRadius: 30,
    //               // width: "14vw",
    //               zIndex:100,
    //               // backgroundColor: "orange",
    //               // borderColor: '#ccc',
    //               // borderWidth: '22px',
    //               // borderStyle: 'solid',
    //             }}>{menus}</div>
              
    //         </div>
    //       )}
          // overlayStyle={{ 
          //   margin: -20, 
          //   backgroundColor: "transparent",
          //   width: "14vw",
          //   zIndex:100,
          //   // backgroundColor: "orange",
          //   // borderColor: '#ccc',
          //   // borderWidth: '22px',
          //   // borderStyle: 'solid',
          // }}
    className=' text-5xl '>
    <div onClick={(e) => e.preventDefault()} className='w-[22vw] 2xl:w-[15vw] ml-auto -2 bg-livered h-16  rounded-3xl  '>
      <Space>
        {/* <DownOutlined /> */}
        {Burger}
      </Space>
    </div>
  </Dropdown>
  </div>
);

