import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { addTask, deleteTask, editTask } from "../redux/slices/taskSlice.js";
import ItemTask from "../components/ItemTask.jsx";
import InputForm from "../components/InputForm.jsx";

const Task = () => {
  const dispatch = useDispatch();
  const listTask = useSelector((state) => state.task);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(null);

  // --- Manejadores de los inputs ---

  const handlerTitle = (event) => {
    setTitle(event.target.value);
  };

  const handlerDescription = (event) => {
    setDescription(event.target.value);
  };

  // --- Manejadores de las acciones CRUD ---

  // Manejador de la acción de guardar
  const handlerTask = (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Construcción del objeto tarea
    const task = {
      id: listTask.length + 1,
      title: event.target.title.value,
      description: event.target.description.value,
    };

    if (id) {
      // Si el id es diferente de null, entonces se edita la tarea
      task.id = id;
      dispatch(editTask(task));
    } else {
      // Guardar la tarea en el store
      dispatch(addTask(task));
    }

    // Limpiar los inputs
    setTitle("");
    setDescription("");
    setId(null);
  };

  // Manejador de la acción de eliminar
  const handlerDelete = (id) => {
    dispatch(deleteTask(id));
  };

  // Manejador de la acción de editar
  const handlerEdit = (id) => {
    const task = listTask.find((task) => task.id === id);
    setId(task.id);
    setTitle(task.title);
    setDescription(task.description);
  };

  const inputs = [
    {
      type: "text",
      name: "title",
      value: title,
      placeholder: "Nombre de la tarea",
      handler: handlerTitle,
    },
    {
      type: "text",
      name: "description",
      value: description,
      placeholder: "Descripción de la tarea",
      handler: handlerDescription,
    },
  ];

  return (
    <>
      <Header />

      <h1>Tareas en Redux</h1>

      <form onSubmit={handlerTask}>
        {inputs.map((input, index) => {
          return (
            <InputForm
              key={index}
              onChange={input.handler}
              type={input.type}
              name={input.name}
              value={input.value}
              placeholder={input.placeholder}
            />
          );
        })}
        {id ? <button type="submit">Actualizar</button> : <button type="submit">Guardar</button>}
      </form>

      <section>
        <h2>Listado de tareas</h2>
        <ul>
          {listTask.map((item, index) => {
            return <ItemTask key={index} item={item} handlerEdit={handlerEdit} handlerDelete={handlerDelete} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default Task;
