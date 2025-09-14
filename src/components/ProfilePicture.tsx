import profilePicture from '../assets/profile-picture.jpg';
import profilePictureAvif from '../assets/profile-picture.avif';

const ProfilePicture = () => {
	return (
		<picture
			className="mx-auto my-4 max-w-50 rounded object-scale-down md:m-0 md:max-w-85 landscape:object-scale-down landscape:md:object-cover dark:invert"
			aria-label="profile picture"
		>
			<source srcSet={profilePictureAvif} type="image/avif" />
			<img src={profilePicture} alt="profile picture" />
		</picture>
	);
};

export default ProfilePicture;
