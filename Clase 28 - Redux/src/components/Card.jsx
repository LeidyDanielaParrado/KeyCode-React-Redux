import { useSelector } from "react-redux";

const Card = () => {
    const user = useSelector((state) => state.user);

    return (
        <div>
            <h1>Card User</h1>

            <div>
                <img src={user.photo} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default Card;
