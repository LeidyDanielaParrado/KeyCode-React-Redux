import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, modifyName, modifyLastName, modifyEmail, modifyAge, deleteUser } from "../redux/slices/userSlice";
import Header from "../components/Header";

function User() {
  const dispatch = useDispatch();

  const handlerName = (event) => {
    dispatch(modifyName(event.target.value));
  };

  const handlerLastName = (event) => {
    dispatch(modifyLastName(event.target.value));
  };

  const handlerEmail = (event) => {
    dispatch(modifyEmail(event.target.value));
  };

  const handlerAge = (event) => {
    dispatch(modifyAge(event.target.value));
  };

  const handlerDelete = () => {
    dispatch(deleteUser());
  };

  useEffect(() => {
    const callApi = async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      const user = {
        name: data.name,
        lastName: data.username,
        email: data.email,
        age: data.id,
      };

      dispatch(addUser(user));
    };

    callApi("https://jsonplaceholder.typicode.com/users/1");
  });

  return (
    <>
      <Header />

      <h1>Usuario en Redux</h1>
      <form>
        <input onChange={handlerName} type="text" placeholder="Nombre" />
        <input onChange={handlerLastName} type="text" placeholder="Apellido" />
        <input onChange={handlerEmail} type="text" placeholder="Email" />
        <input onChange={handlerAge} type="text" placeholder="Edad" />

        <button type="submit">Guardar</button>
      </form>

      <button onClick={handlerDelete}>Eliminar datos del usuario</button>
    </>
  );
}

export default User;
