import "./Profile.css"
import profilePicture from "../assets/profile-picture.jpg"

const Profile = () => {
  return (
    <div className="profile-container">
        <div className='profile-background'>
            <img className="profile-picture" src={profilePicture} alt="profile-picture" />
        </div>
    </div>
  )
}

export default Profile