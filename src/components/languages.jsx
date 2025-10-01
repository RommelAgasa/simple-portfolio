import phillipinesFlag from '../assets/flags/phillipines.png'
import usaFlag from '../assets/flags/usa.png'
import australiaFlag from '../assets/flags/australia.png'

export default function Languages(){

    return(
        <div className="text-white bg-gray-900 rounded-2xl p-4 text-2xl flex items-center">
            <div className="border-r border-gray-700 p-4 w-[30%] text-center text-sm md:text-xl">
                <h1>Languages</h1>
            </div>
            <div className='grid grid-cols-4 gap-4 lg:gap-14 ml-8'>
                <div>
                    {phillipinesFlag && <img src={phillipinesFlag} alt="Phillipine Flag" className="h-14 w-24 rounded-2xl inline-block"/>}
                </div>
                <div>
                    {usaFlag && <img src={usaFlag} alt="USA Flag" className="h-14 w-24 rounded-2xl inline-block"/>}
                </div>
                <div>
                    {australiaFlag && <img src={australiaFlag} alt="Australia Flag" className="h-14 w-24 rounded-2xl inline-block"/>}
                </div>
            </div>
        </div>
    );
}