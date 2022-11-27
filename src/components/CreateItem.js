//새로운 item을 만들 때 사용하게 되는 컴포넌트
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateItem() {
  const [values, setValues] = useState({
    task: "",
    due: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND_API_URI}/items`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        task: values.task,
        due: values.due,
        status: "todo",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "todo") {
          alert("Create new item!");
          navigate("/");
        }
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <p>Task</p>
        <input
          type="text"
          name="task"
          value={values.task}
          onChange={handleChange}
          ref={ref}
        />
        <p>Due</p>
        <input
          type="text"
          name="due"
          value={values.due}
          onChange={handleChange}
        />
      </div>
      <button>Create</button>
    </form>
  );
}
