export default function Freelancer(props){
    const {company, role, duration} = props;

    return(
        <div className="text-white bg-gray-900 rounded-2xl p-4 text-sm md:text-lg h-full">
            <div className="flex justify-between items-center w-full p-8 border-b border-gray-700">
                <div>
                    <h1>{company}</h1>
                    <h2 className="text-gray-500">{role}</h2>
                </div>
                <div>
                    <div className="bg-black flex justify-center p-4 rounded-2xl text-gray-500">
                        {duration}
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
}