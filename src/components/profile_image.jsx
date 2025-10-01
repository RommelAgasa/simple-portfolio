import profileImg from '../assets/profile_3D.png';

export default function ProfileImage() {
    return (
        <div className='flex'>
            <img src={profileImg} alt="profile" className="shrink-0 w-52 h-36 md:w-90 md:h-52 rounded-2xl"/>
        </div>
    )
}