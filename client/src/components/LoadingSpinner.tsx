

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
      <div className="flex flex-col items-center justify-center w-32 h-32 p-4 bg-white rounded-lg shadow-lg">
        <div className="w-12 h-12 border-t-2 border-gray-400 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-800">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
