import React from "react";

const Nav = () => {
  const menu = (
    <>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Menu</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Logo</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
    </div>
  );
};

export default Nav;
