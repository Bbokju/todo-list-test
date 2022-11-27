//할 일을 묶어서 목록으로 보여줄 것
//표를 보여줄 것이다.
//새로운 item을 추가하거나 삭제할 때 사용한다.
import { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Items({ endpoint = "" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API_URI}/items/${endpoint}`)
      .then((res) => {
        return res.json();
      })
      .then((json_Response) => {
        setData(json_Response);
      });
  }, [data]);
  // [] : 처음 렌더링 시에만 실행
  // [바뀔 값] : 넣은 값이 바뀔 때마다 실행

  return (
    <table>
      <thead>
        <th></th>
        <th>Task</th>
        <th>Due</th>
        <th></th>
      </thead>
      <tbody>
        {data.map((todo) => {
          return <Item key={todo.id} todo={todo} />;
        })}
      </tbody>
    </table>
  );
}
