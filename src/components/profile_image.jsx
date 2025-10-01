import profileImg from '../assets/profile_3D.png';

export default function ProfileImage() {
    return (
        <div className='flex-shrink-0'>
            <img src={profileImg} alt="profile" className="w-90 h-64 rounded-2xl"/>
        </div>
    )
}