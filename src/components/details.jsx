export default function Details() {
  return (
    <div className="text-white bg-gray-900 rounded-2xl text-xl flex p-4 gap-2 justify-center items-center">
      <div className="flex flex-row w-full gap-8">
        {/* Title Section */}
        <div className="border-r border-gray-700 p-4 w-60 flex justify-center items-center">
          <h1>Details</h1>
        </div>

        {/* Grid of Items */}
        <div className="flex gap-4 p-4">
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100">
                <span>🎂</span>
                <h1 className="text-gray-500">26 years</h1>
            </div>
          </div>
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100">
                <span>📧</span>
                <h1 className="text-gray-500">iamsofteng@gmail.com</h1>
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
