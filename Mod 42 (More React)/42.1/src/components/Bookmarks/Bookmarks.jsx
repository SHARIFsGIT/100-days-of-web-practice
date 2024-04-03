import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 text-center ml-4 mt-2 pt-4 bg-purple-100 rounded-lg">
            <div>
                <h3 className='text-2xl mb-5'>Reading Time: {readingTime}</h3>
            </div>
            <h1 className='text-3xl'>Bookmarked Blog: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;