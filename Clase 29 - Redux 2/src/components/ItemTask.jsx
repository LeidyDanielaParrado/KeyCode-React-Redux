import PropTypes from "prop-types";

const ItemTask = ({ item, handlerEdit, handlerDelete }) => {
  return (
    <li>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button onClick={() => handlerEdit(item.id)}>Modificar</button>
      <button onClick={() => handlerDelete(item.id)}>Eliminar</button>
    </li>
  );
};

ItemTask.propTypes = {
  item: PropTypes.object.isRequired,
  handlerEdit: PropTypes.func.isRequired,
  handlerDelete: PropTypes.func.isRequired,
};

export default ItemTask;
