import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="pt-[87px] hidden lg:block pb-[67px] contactbg bg-center bg-cover bg-no-repeat">
      <div className="xl:w-[1120px] 2xl:[1320px] px-3 sm:px-5 2xl:px-0 mx-auto ">
        <p className="font-Machine font-bold leading-[120%] capitalize text-xl  text-center text-white mb-5">
          Contact Us
        </p>
        <p className="font-Raleway  font-normal leading-[160%] opacity-80 text-center text-xs  text-white mb-8">
          Have a question or want to contribute? Reach out to us.
        </p>
        <form>
          <div className="flex gap-[51px] mb-[18px]">
            {" "}
            <input
              type="text"
              required
              placeholder="First Name"
              className="py-6 font-Raleway font-normal text-white leading-[150%] text-xs w-[100%] bg-transparent inputborder placeholder:text-white  outline-none"
            />
            <input
              type="text"
              required
              placeholder="Last Name"
              className="py-6 font-Raleway font-normal text-white leading-[150%] text-xs w-[100%] bg-transparent inputborder placeholder:text-white  outline-none"
            />
          </div>
          <div className="flex gap-[51px] mb-[18px]">
            {" "}
            <input
              type="email"
              required
              placeholder="Email"
              className="py-6 font-Raleway font-normal text-white leading-[150%] text-xs w-[100%] bg-transparent inputborder placeholder:text-white  outline-none"
            />
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              pattern="9090909090"
              placeholder="Phone Number"
              className="py-6 font-Raleway font-normal text-white leading-[150%] text-xs w-[100%] bg-transparent inputborder placeholder:text-white  outline-none"
            />
          </div>
          <textarea
            placeholder="Massage"
            name="Massage"
            required
            id=""
            cols="20"
            rows="5"
            className="resize-none pt-6 font-Raleway font-normal text-white leading-[150%] text-xs w-[100%] bg-transparent inputborder placeholder:text-white  outline-none"
          ></textarea>
          <div className="text-center pt-16">
            {" "}
            <input
              type="submit"
              value="Submit"
              className="font-Raleway uppercase font-medium text-[20px] text-white py-[22px] px-4 submitbtn  rounded-[8px] w-[160px] cursor-pointer hover:bg-light-blue"
            />
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact
