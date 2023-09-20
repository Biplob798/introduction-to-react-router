import { Link, useNavigate } from "react-router-dom";



const Post = ({post}) => {

    const {id, title} = post;

    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px',
        marginTop: '10px',
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>Post of Id: {id}</h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Click Me</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;