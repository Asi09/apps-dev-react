import profilePic from './assets/asi.jpg';

function profilePicture () {
  return (
    <div className="profile-picture">
      <img src={profilePic} alt="Profile" />
    </div>
  );
};

export default profilePicture;
