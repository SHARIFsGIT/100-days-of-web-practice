import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover_image, author, author_image, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover_image} alt={`Cover picture of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-xl' src={author_image} alt="" />
                    <div className='ml-3'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark} className='ml-3 text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">
                {title}
            </h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;