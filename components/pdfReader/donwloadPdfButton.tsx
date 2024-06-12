import { Download } from '@/public/svg/download';
import { Button } from '@nextui-org/button';
import React, {useEffect, useState} from 'react';

const DownloadPdfButton = () => {

  const [BigScreen, setBigScreen] = useState(false);

  useEffect(() => {
      const handler = (e:any) => setBigScreen(e.matches);
      const mediaQuery = window.matchMedia('(min-width: 768px)');

      mediaQuery.addEventListener('change', handler);
      setBigScreen(mediaQuery.matches);

      return () => {
      mediaQuery.removeEventListener('change', handler);
      };
  }, []);



  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/tsa.pdf'; // Ruta del archivo PDF en la carpeta public
    link.download = 'tsa.pdf'; // Nombre con el que se descargará el archivo
    link.click();
  };

  return (
  
    <Button
      className="  z-10 bg-livered font-nunito text-white 2xl:text-2xl w-max"
      radius="full"
      size={BigScreen ? "lg" : "sm"}
      onClick={handleDownload}>

      Descargar PDF <Download/>

    </Button>
  );
};

export default DownloadPdfButton;