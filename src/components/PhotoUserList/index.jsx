export const PhotoUserList = ({ userPhotos }) => {
    return (
        userPhotos.length ?
            <ul>
                {userPhotos.map(userPhoto =>
                    <li key={userPhoto.photoId}>
                        <img
                            src={`${process.env.REACT_APP_SERVER}/${userPhoto.photoName}`}
                            alt={userPhotos.photoId}>
                        </img>
                    </li>
                )}
            </ul> :
            <p>No photos found</p>
    )
}
