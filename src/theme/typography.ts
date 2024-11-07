
interface Typography {
    fontFamily: string;
    fontWeight: {
      normal: number;
      regular: number;
      bold: number;
    };
  }
  
  const typography: Typography = {
    fontFamily: "'K2D', sans-serif",
    fontWeight: {
      normal: 300,
      regular: 400,
      bold: 700,
    },
  };
  
  export default typography;