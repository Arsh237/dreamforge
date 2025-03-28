import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserRedux } from '../Store/loginSlice';

function Login() {
  const userData = useSelector((state) => state.users);
  console.log(userData);

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { email, password } = data;
    if (email && password) {
      if(userData.email === email && userData.password === password){
        dispatch(loginUserRedux(userData));
        alert("Login success");
        navigate('/');
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Please fill all the fields");
    }
  }

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
          Login
        </h2>

        <form className="space-y-3" onSubmit={handleOnSubmit}>
          <label htmlFor="email" className="block text-xl font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-gray-500 shadow-2xl rounded-lg text-center font-normal text-zinc-600 py-2 px-32 bg hover:bg-gray-300"
            placeholder="Your email here"
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
            placeholder="Password"
            onChange={handleOnChange}
            value={data.password}
          />

          <button
            type="submit"
            className="block text-lg bg-blue-400 px-4 py-2 rounded-xl shadow-xl font-semibold hover:bg-blue-700 transition duration-500 w-full mt-[30px]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
