import adobeAfterEffects from '../assets/tools/adobe_after_effects.png';
import adobePremiere from '../assets/tools/adobe_premiere_pro.png';
import lightroom from '../assets/tools/adobe_lightroom.png';

export default function EditingTools(){

    return(
        <div className="text-white bg-gray-900 rounded-2xl p-4 flex items-center">
            <div className="border-r border-gray-700 p-4 w-[30%] text-center text-xl">
                <h1>Editing Tools</h1>
            </div>
            <div className='grid grid-cols-4 gap-14 ml-8'>
                <div className=''>
                    {adobeAfterEffects && <img src={adobeAfterEffects} alt="Adobe After Effects" className="h-14 w-16 rounded-2xl inline-block"/>}
                </div>
                <div>
                    {adobePremiere && <img src={adobePremiere} alt="Adobe Premiere" className="h-14 w-16 rounded-2xl inline-block"/>}
                </div>
                <div>
                    {lightroom && <img src={lightroom} alt="Adobe Lightroom" className="h-14 w-16 rounded-2xl inline-block"/>}
                </div>
            </div>
        </div>
    );
}