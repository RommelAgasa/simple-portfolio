import illustrator from '../assets/tools/illustrator.png'
import photoshop from '../assets/tools/photoshop.png'
import adobe from '../assets/tools/adobe_xd.png'
import indesign from '../assets/tools/indesign.png'

export default function DesignTools(){

    return(
        <div className="text-white bg-gray-900 rounded-2xl p-4 flex items-center">
            <div className="border-r border-gray-700 text-xl p-4 w-[30%] text-center">
                <h1>Design Tools</h1>
            </div>
            <div className='grid grid-cols-4 gap-14 ml-8'>
                <div className=''>
                    {illustrator && <img src={illustrator} alt="Adobe Illustrator" className="h-14 w-16 rounded-2xl inline-block"/>}
                </div>
                <div>
                    {photoshop && <img src={photoshop} alt="Adobe Photoshop" className="h-14 w-16 rounded-2xl inline-block"/>}
                </div>
                <div>
                    {adobe && <img src={adobe} alt="Adobe XD" className="h-14 w-16 rounded-2xl inline-block"/>}
                </div>
                <div>
                    {indesign && <img src={indesign} alt="Adobe InDesign" className="h-14 w-16 rounded-2xl inline-block"/>}
                </div>
            </div>
        </div>
    );
}