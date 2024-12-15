import React, { useState } from "react";
import { use } from "react";

const SignUp = () => {
  const[user, setUser] = useState({
    firstName:"",
    lastName: "",
    email: "",
    password:"",
    phoneNumber:"",
  });
  const handleChange = (event) => {
    const{name, value} = event.target;
    setUser((prev) => ({...prev, [name]: value}))
  };

  const handleSubmit = (event) => {
   event.preventDefault();
   console.log(user);
  }
  return (
    <div>
      <form
      className="flex flex-col border-2 border-slate-200 w-[28rem] h-[37rem]
      mt-[1rem] ml-[2rem] pt-[0.5rem] pl-[1rem] bg-[#f9f7f3] rounded-[12px]"
      onSubmit={handleSubmit}
    >
      <h1 className="text-[2rem] font-[600]">Sign Up</h1>
      <p className="text-[0.99rem]">
        Please fill up this form to create an account
      </p>
      <div className="flex flex-col gap-1 pt-[1rem]">
        <label className="font-[700] text-[1.2rem]" htmlFor="firstName">
          First Name
        </label>
        <input
          className="h-[2rem] w-[25rem] px-2"
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col gap-1 pt-[1rem]">
        <label className="font-[700] text-[1.2rem]" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="h-[2rem] w-[25rem] px-2"
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col gap-1 pt-[1rem]">
        <label className="font-[700] text-[1.2rem]" htmlFor="email">
          Email
        </label>
        <input
          className="h-[2rem] w-[25rem] px-2"
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col gap-1 pt-[1rem]">
        <label className="font-[700] text-[1.1rem]" htmlFor="firstName">
          Password
        </label>
        <input
          className="h-[2rem] w-[25rem] px-2"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col gap-1 pt-[1rem]">
        <label className="font-[700] text-[1.1rem]" htmlFor="firstName">
          Phone Number
        </label>
        <input
          className="h-[2rem] w-[25rem] px-2"
          type="number"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex gap-1 mt-4 text-[0.99rem]">
        <p>By creating an account you agree to our</p>
        <p className="text-blue-600">term & Policy</p>
      </div>
      <button className="mt-2 mx-2 text-[1.2rem] py-1 rounded-lg font-[600] text-white bg-blue-700">
        Sign up
      </button>
    </form>
    <div>{`Name ${user.firstName} ${user.lastName}
       with id ${user.email} and number ${user.phoneNumber}`}</div>
    </div>
  );
};

export default SignUp;
