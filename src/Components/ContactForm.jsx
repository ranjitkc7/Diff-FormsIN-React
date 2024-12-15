import React, { useState } from "react";

const ContactForm = () => {
  const [allInfo, setAllInfo] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const contactChangeHangle = (e) => {
    const { name, value } = e.target;
    setContact((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const contactSubmit = (event) => {
    event.preventDefault();
    setAllInfo((prevInfo) => [...prevInfo, contact]);
    
    setContact({ name: "", email: "", message: "" });
  };
  return (
    <div>
      <form
        className="flex flex-col border-2 border-slate-200 w-[25rem] h-[30rem]
      mt-[1rem] ml-[2rem] pt-[0.5rem] pl-[1rem] bg-[#f9f7f3] rounded-[12px]"
        onSubmit={contactSubmit}
      >
        <h1 className="text-[2rem] font-[600]">Contact Form</h1>
        <div className="flex flex-col gap-1 pt-[1rem]">
          <label className="font-[700] text-[1.2rem]" htmlFor="name">
            Name
          </label>
          <input
            className="h-[2rem] w-[23rem] px-2"
            type="text"
            name="name"
            value={contact.name}
            onChange={contactChangeHangle}
            required
          />
        </div>
        <div className="flex flex-col gap-1 pt-[1rem]">
          <label className="font-[700] text-[1.2rem]" htmlFor="email">
            Email
          </label>
          <input
            className="h-[2rem] w-[23rem] px-2"
            type="text"
            name="email"
            value={contact.email}
            onChange={contactChangeHangle}
            required
          />
        </div>
        <div className="flex flex-col gap-1 pt-[1rem]">
          <label className="font-[700] text-[1.2rem]" htmlFor="message">
            Message
          </label>
          <textarea
            className="h-[8rem] w-[23rem] px-2"
            type="text"
            name="message"
            value={contact.message}
            onChange={contactChangeHangle}
            required
          />
        </div>
        <button className="mt-[1rem] mx-2 text-[1.2rem] py-1 rounded-lg font-[600] text-white bg-blue-700">
          Send Message
        </button>
      </form>
      <div className="h-[9rem] w-[25rem] bg-blue-500 text-white ml-[1.8rem] mt-[0.5rem]">
        {
            allInfo.map((curElm) => {
                return(
                    <div className="flex gap-1 flex-col">
                      <p>{`Name: ${curElm.name}`}</p>
                      <p>{`Email: ${curElm.email}`}</p>
                      <p>{`Message: ${curElm.message}`}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default ContactForm;
