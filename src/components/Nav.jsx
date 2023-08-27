import React from "react";
import logoMark from "../assets/logoMark.svg";
import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

function Nav({ userName }) {
  return (
    <nav>
      <NavLink to={"/"} aria-label="Go to home">
        <img src={logoMark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(e) => {
            if (!confirm("Delete user and all data")) {
              e.preventDefault();
            }
          }}
        >
          <button className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}

export default Nav;
