import { useState, useEffect } from 'react';

const PDFViewer = ({ pdfUrl, title = "PDF Document" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLoad = () => {
    console.log('PDF loaded successfully');
    setIsLoading(false);
  };

  const handleError = () => {
    console.log('PDF failed to load');
    setIsLoading(false);
    setError('Failed to load PDF');
  };

  // Force loading to complete after a timeout as fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log('Forcing loading to complete after timeout');
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      {/* PDF Header */}
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-2 font-mono">{title}</span>
        </div>
      </div>
      
      {/* PDF Content */}
      <div className="bg-gray-50 p-4">
        {isLoading && (
          <div className="flex items-center justify-center h-[600px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 font-mono">Loading PDF...</p>
              <p className="text-xs text-gray-500 mt-2">URL: {pdfUrl}</p>
            </div>
          </div>
        )}
        
        {error && (
          <div className="flex items-center justify-center h-[600px]">
            <div className="text-center">
              <div className="text-6xl mb-4">❌</div>
              <p className="text-red-600 font-mono mb-2">Error loading PDF</p>
              <p className="text-sm text-gray-500 font-mono">{error}</p>
            </div>
          </div>
        )}
        
        {!isLoading && !error && (
          <div className="h-[600px] border border-gray-200 rounded-lg bg-white overflow-hidden">
            <iframe
              src={pdfUrl}
              width="100%"
              height="100%"
              onLoad={handleLoad}
              onError={handleError}
              style={{ border: 'none' }}
              title={title}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer; 