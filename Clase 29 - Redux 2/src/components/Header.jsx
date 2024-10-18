import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  const user = useSelector((state) => state.user);

  return (
    <header>
      <h1>Logo</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Usuario</Link>
          </li>
          <li>
            <Link to="/task">Tareas</Link>
          </li>
        </ul>
      </nav>

      <div>
        {user.name} {user.lastName}
        <button>
          <img src="https://cdn-icons-png.freepik.com/512/5720/5720427.png" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
