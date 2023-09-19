import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Module/Layout";
import { MyAccount } from "./Module/Dashboard/MyAccount";

function App() {
  return (
    <div id="firstDiv" className="bg-[#F1F2F7] h-screen	">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MyAccount />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
