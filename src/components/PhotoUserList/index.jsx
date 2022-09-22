export const PhotoUserList = ({ userPhotos }) => {

    return (
        userPhotos.length ?
            <ul>
                {userPhotos.map(userPhoto =>
                    <li key={userPhoto.photoId}>
                        <img
                            src={`${process.env.REACT_APP_SERVER}/${userPhoto.photoName}`}
                            alt='listElement'>

                        </img>
                    </li>
                )}
            </ul> :
            <p>No photos found</p>
    )
}
