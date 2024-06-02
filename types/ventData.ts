export interface ventDataType {
    email: string;
    whatsapp: string;
    whatsappMessage: string;
    pageData: {
      preTitle: string;
      title1: string;
      title2: string;
      subTitle: string;
      description: string;
    };
    tableData: {
      rows: {
        key: string;
        modelo: string;
        qimn: number; // Assuming numerical values for these properties
        ap: number;
        omax: number;
        apmin: number;
      }[];
      columns: {
        key: string;
        label: string;
      }[];
    };
    urltdaImageDemo: string;
    demoImageNames: string[];
    urlImageBanner: string;
    bannerImageInfo: {
      imgName: string;
      imgLable: {
        textLable: string;
        textColor?: string; // Optional property for text color
      }[];
    }[];
  }
  