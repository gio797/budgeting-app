import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import wave from "../assets/wave.svg";
import Nav from "../components/Nav";

//loader
export function MainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Main() {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
}

export default Main;
