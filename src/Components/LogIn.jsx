import React, { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [allItems, setAllItems] = useState([]);

  const loginSubmit = (event) => {
    event.preventDefault();
    const dataEntry = { email, password };
    setAllItems([...allItems, dataEntry]);
    console.log(allItems);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form
        className="h-[18rem] w-[20rem] flex flex-col border-2 border-slate-200 
      mt-[1rem] ml-[2rem] pt-[0.5rem] pl-[1rem] bg-[#f9f7f3] rounded-[12px]"
        onSubmit={loginSubmit}
      >
        <h1 className="text-[2rem] font-[600]">Log In</h1>

        <div className="flex flex-col gap-1 pt-[1rem]">
          <label className="font-[700] text-[1.2rem]" htmlFor="email">
            Email
          </label>
          <input
            className="h-[2rem] w-[18rem] px-2"
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-1 pt-[1rem]">
          <label className="font-[700] text-[1.2rem]" htmlFor="password">
            Password
          </label>
          <input
            className="h-[2rem] w-[18rem] px-2 "
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <button className="mt-[1rem] mx-2 text-[1.2rem] py-1 rounded-lg font-[600] text-white bg-blue-700">
          Log In
        </button>
      </form>

      <div className="h-[10rem] w-[20rem] bg-blue-500 text-white ml-[1.8rem] mt-[2rem]">
        {allItems.map((curElm, key) => {
          return (
            <div className="flex px-3 gap-10">
              <p>{curElm.email}</p>
              <p>{curElm.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogIn;
