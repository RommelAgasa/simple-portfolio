export default function Academic(){
    return (
        <div className="text-white bg-gray-900 p-4 rounded-2xl text-sm">
            <div className="flex justify-between w-full items-center p-4 border-b border-gray-700">
                <div>
                    <h1 className="md:text-xl">High School</h1>
                    <h2 className="text-gray-500" >Humanities</h2>
                    <h2 className="text-gray-500">Delhi Cantonment, India</h2>
                </div>
                <div>
                    <div className="bg-black flex justify-center items-center p-2 w-24 md:w-36 md:p-4 rounded-2xl text-gray-500">
                        2017
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full items-center p-4 not-first:border-b border-gray-700">
                <div>
                    <h1 className="md:text-xl">Diploma</h1>
                    <h2 className="text-gray-500" >Animation and Graphic Design</h2>
                    <h2 className="text-gray-500">Delhi, India</h2>
                </div>
                <div>
                    <div className="bg-black flex justify-center items-center p-2 w-24 md:w-36 md:p-4 rounded-2xl text-gray-500">
                        2017-18
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full items-center p-4">
                <div>
                    <h1 className="md:text-xl">Graduation</h1>
                    <h2 className="text-gray-500" >Bachelor of fine Arts</h2>
                    <h2 className="text-gray-500">IGNOU Delhi, India</h2>
                </div>
                <div>
                    <div className="bg-black flex justify-center items-center p-2 w-24 md:w-36 md:p-4 rounded-2xl text-gray-500">
                        2017-21
                    </div>
                </div>
            </div>
        </div>
    );
}