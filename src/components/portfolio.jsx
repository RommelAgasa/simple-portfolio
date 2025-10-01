export default function Portfolio() {
  return (
    <div className="text-white bg-gray-900 rounded-2xl text-xl flex p-4 gap-2 justify-center items-center">
      <div className="flex flex-row w-full gap-8">
        {/* Title Section */}
        <div className="border-r w-60 border-gray-700 p-4 flex justify-center items-center">
          <h1>Portfolio</h1>
        </div>

        {/* Grid of Items */}
        <div className="flex gap-8 p-4">
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100">
                <span>🌐</span>
                <h1 className="text-gray-500">Bento</h1>
            </div>
          </div>
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100">
                <span>🎨</span>
                <h1 className="text-gray-500">Behance</h1>
            </div>
          </div>
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100">
                <span>📸</span>
                <h1 className="text-gray-500">Instagram</h1>
            </div>
          </div>
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100">
                <span>▶️</span>
                <h1 className="text-gray-500">YouTube</h1>
            </div>
          </div>
          <div>
            <div className="bg-black flex gap-2 justify-center items-center p-4 rounded-2xl text-gray-100">
              <span>🏀</span>
              <h1 className="text-gray-500">Dribbble</h1>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
