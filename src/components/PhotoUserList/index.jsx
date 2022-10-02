import { Link } from 'react-router-dom';
import { Loading } from "../Loading/Loading"
import './PhotoUserList.css'

export const PhotoUserList = ({
    handleClick,
    pagination,
    loading,
    index,
    totalPhotos
}) => {
    return (
        <article className='photos_user'>
            {loading === false ? (
                totalPhotos.length ? (
                    <>
                        <ul className='photos_list'>
                            {totalPhotos.map(totalPhoto =>
                                <Link className='photo-link-post' to={`/post/${totalPhoto.entryId}`}>
                                    <li key={totalPhoto.photoId}>
                                        <img
                                            src={`${process.env.REACT_APP_SERVER}/${totalPhoto.photoName}`}
                                            alt={totalPhotos.photoId}>
                                        </img>
                                    </li>
                                </Link>
                            )}
                        </ul>
                        {pagination.page !== index?.lastPage && (
                            <button onClick={handleClick}>See more results</button>
                        )}
                    </>
                ) : <p>No photos found</p>
            ) : <Loading />
            }
        </article>
    )
}
