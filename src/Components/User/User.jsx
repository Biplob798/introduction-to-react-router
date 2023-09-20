import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, phone, name, email} = user;
    const userStyle = {
        border: '2px solid red',
        padding: '10px',
        borderRadius: '20px',
        marginTop: '10px',
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

export default User;