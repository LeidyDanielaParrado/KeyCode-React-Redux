import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
    const [searchParams] = useSearchParams();
    const idUser = searchParams.get("id");
    console.log(idUser);

    return (
        <div>
            Esta es la página Home
            <Link to="/about">about</Link>
        </div>
    );
};

export default Home;
