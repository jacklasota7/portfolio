import { useState, useEffect } from 'react';

const PDFViewer = ({ pdfUrl, title = "PDF Document" }) => {
  const handleOpenPDF = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleOpenPDF}
      className="bg-blue-500 px-6 py-2 border border-white text-white hover:bg-white hover:text-black text-center rounded-lg text-sm font-medium transition-colors duration-200 font-mono cursor-pointer w-fit underline"
    >
      {title}
    </div>
  );
};

export default PDFViewer; 