import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserRedux } from '../Store/userslice';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, password, confirmpassword } = data;
    if (firstname && lastname && email && password && confirmpassword) {
      if (password === confirmpassword) {
        const newdata = {
          ...data,
          id: (new Date()).getTime()
        };
        dispatch(registerUserRedux(newdata));
        alert("Registration Success");
        navigate('/login');
      } else {
        alert("Password and confirm password must be the same");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex place-items-center justify-center bg-gray-100">
      <div className="bg-white px-12 pb-10 rounded-2xl shadow-xl bg-opacity-95 flex flex-col justify-center items-center">
      <div className="h-[200px] w-[200px] mb-4">
          <img
            src="https://cdn1.iconfinder.com/data/icons/elevator/154/elevator-user-man-ui-round-login-1024.png"
            alt="Login Icon"
            // className="h-full w-full object-cover rounded-full shadow-lg"
          />
        </div>
        <h2 className="text-4xl font-bold py-5 text-center">
          Sign-up
        </h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <label htmlFor="firstname" className="block text-xl font-medium">
            First name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="border-gray-500 shadow-2xl rounded-lg text-center font-normal text-zinc-600 py-2 px-32 bg hover:bg-gray-300"
            placeholder='Your First name here'
            onChange={handleOnChange}
            value={data.firstname}
          />

          <label htmlFor="lastname" className="block text-xl font-medium">
            Last name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="border-gray-500 shadow-2xl rounded-lg text-center font-normal text-zinc-600 py-2 px-32 bg hover:bg-gray-300"
            placeholder='Your Last name here'
            onChange={handleOnChange}
            value={data.lastname}
          />

          <label htmlFor="email" className="block text-xl font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-gray-500 shadow-2xl rounded-lg text-center font-normal text-zinc-600 py-2 px-32 bg hover:bg-gray-300"
            placeholder='Your email here'
            onChange={handleOnChange}
            value={data.email}
          />

          <label htmlFor="password" className="block text-xl font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border-gray-500 shadow-2xl rounded-lg text-center font-normal text-zinc-600 py-2 px-32 bg hover:bg-gray-300"
            placeholder='Password'
            onChange={handleOnChange}
            value={data.password}
          />

          <label htmlFor="confirmpassword" className="block text-xl font-medium">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            className="border-gray-500 shadow-2xl rounded-lg text-center font-normal text-zinc-600 py-2 px-32 bg hover:bg-gray-300"
            placeholder='Password'
            onChange={handleOnChange}
            value={data.confirmpassword}
          />
          
          <button
            type="submit"
            className="block text-lg bg-blue-400 px-4 py-2 rounded-xl shadow-xl font-semibold bg hover:bg-blue-700 transition duration-500 w-full mt-[30px]"
          >
            Sign-up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
