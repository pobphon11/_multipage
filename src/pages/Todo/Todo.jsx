import "./Todo.css";
import { fetchTodos } from "../../data/todo";
import { useEffect, useState , useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Todo() {
  const [todosRaw, setTodosRaw] = useState([]);
  const [todos, setTodos] = useState([]);
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [numberPage, setNumberPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTodosRaw(fetchTodos());
    setCurrentPage(2);
  }, []);

  useEffect(() => {
    const filteredTodos = onlyWaiting
      ? todosRaw.filter((todo) => !todo.completed)
      : todosRaw;

    setTodos(filteredTodos);
    setNumberPage(Math.ceil(filteredTodos.length / itemPerPage));
  }, [todosRaw, onlyWaiting, itemPerPage]);

  useEffect(() => {
    console.log("currentPage:", currentPage);
    console.log("numberPage:", numberPage);
  }, [currentPage, numberPage]);

  useEffect(() => {
    setCurrentPage((prev) => (prev >= numberPage ? numberPage : prev));
  }, [numberPage]);
  const handlePageChange = (e) => {
    setItemPerPage(Number(e.target.value));
  };

  // even handder
  function deleteClick(id) {
    const todosRemain = todosRaw.filter((todo) => {
      return todo.id !== id;
    });
    setTodosRaw(todosRemain);
  }

  function addClick(id, title) {
    const newItem = {
      id: id,
      title: title,
      completed: false,
      userId: 1
    };
    setTodosRaw([...todosRaw, newItem]);
  
  }


  //modals
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newIdRef = useRef();
  const newTitleRef = useRef();

  return (
    <div className="todo-container">
      {/* {modals} */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <span className="bi bi-plus-circle">&nbsp; Add todo </span>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID :</Form.Label>
              <Form.Control type="text" autoFocus value={todosRaw.reduce((max, todo) => todo.id > max ? todo.id : max, 0) + 1} disabled ref={newIdRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Title :</Form.Label>
              <Form.Control type="text" autoFocus ref={newTitleRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <span className="bi bi-x-lg">&nbsp; Cancel</span>
          </Button>
          <Button variant="primary" onClick=
          {
            () => {
              const id = newIdRef.current.value;
              const title = newTitleRef.current.value.trim();
              if (title === "") {
                alert("Please enter title");
                newTitleRef.current.focus();
              } else{
                addClick(id, title);
                handleClose();
              }
              

            }

          }>
            <span className="bi bi-plus-lg">&nbsp; Add</span>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Filters */}
      <div className="todo-fillter-container">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            onClick={(e) => setOnlyWaiting(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Show only &nbsp;
            <button className="btn btn-warning">
              waiting <span className="bi bi-clock"></span>
            </button>
          </label>
        </div>

        <select
          className="form-select"
          defaultValue={"5"}
          style={{ width: "200px" }}
          onChange={handlePageChange}
        >
          <option value="5">5 items per page</option>
          <option value="10">10 items per page</option>
          <option value="50">50 items per page</option>
          <option value="100">100 items per page</option>
        </select>
      </div>

      {/* Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th style={{ textAlign: "right" }}>
              Completed &nbsp;
              <button className="btn btn-primary" onClick={handleShow}>
                <span className="bi bi-plus-lg"></span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {todos
            .filter((todo, index) => {
              const min = (currentPage - 1) * itemPerPage;
              const max = currentPage * itemPerPage - 1;
              return index >= min && index <= max;
            })
            .map((todo) => (
              <tr key={todo.id}>
                <td>
                  <span className="badge bg-secondary">{todo.id}</span>
                </td>
                <td style={{ textAlign: "left" }}>{todo.title}</td>
                <td style={{ textAlign: "right" }}>
                  <span
                    className={`btn ${
                      todo.completed ? "btn-success" : "btn-warning"
                    }`}
                  >
                    {todo.completed ? "done" : "waiting"}
                  </span>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      deleteClick(todo.id);
                    }}
                  >
                    <span className="bi bi-trash"></span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Page Control */}
      <div>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => {
            currentPage > 1 ? setCurrentPage(currentPage - 1) : null;
          }}
        >
          Previous
        </button>
        <span className="todo-space">
          {currentPage}&nbsp;/&nbsp;{numberPage}
        </span>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => {
            currentPage < numberPage ? setCurrentPage(currentPage + 1) : null;
          }}
        >
          Next
        </button>
        <button
          className="btn btn-outline-primary todo-space"
          onClick={() => setCurrentPage(numberPage)}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Todo;
