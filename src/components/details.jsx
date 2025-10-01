export default function Details() {
  return (
    <div className="text-white bg-gray-900 rounded-2xl flex p-4 gap-2 justify-center items-center">
      <div className="flex flex-col md:flex-row w-full">
        {/* Title Section */}
        <div className="md:border-r md:border-gray-700 p-4 w-60 md:text-xl flex justify-start md:justify-center items-center">
          <h1>Details</h1>
        </div>

        {/* Grid of Items */}
        <div className="flex flex-wrap gap-2 lg:gap-4 p-3">
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100">
                <span>🎂</span>
                <h1 className="text-gray-500">26 years</h1>
            </div>
          </div>
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100 max-w-xs">
            <span>📧</span>
            <h1 className="text-gray-500 truncate" title="iamsofteng@gmail.com">iamsofteng@gmail.com</h1>
          </div>
          </div>
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100">
                <span>📞</span>
                <h1 className="text-gray-500">+639272123123</h1>
            </div>
          </div>
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100">
                <span>🌍</span>
                <h1 className="text-gray-500">India</h1>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
