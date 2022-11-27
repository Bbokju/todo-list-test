//하위 컴포넌트들로 이동할 수 있는 Router를 만들것이다.
import React from "react";
import Items from "./components/Items";
import Header from "./components/Header";
import CreateItem from "./components/CreateItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import dotenv from "dotenv";
// dotenv.config();

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/*경로로 사용자가 접근했을 때 보여줄 컴포넌트들 */}
          <Route path="/" element={<Items />} />
          {/*path 경로 */}
          <Route path="/todo" element={<Items endpoint={"?status=todo"} />} />
          <Route path="/done" element={<Items endpoint={"?status=done"} />} />
          <Route path="/create_item" element={<CreateItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
