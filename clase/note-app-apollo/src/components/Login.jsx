import React, { useState, useEffect } from "react";
import { LOGIN } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import userContainer from "../config/UserStore";

function Login() {
  //import the method to update the user authentication state
  const addAuthorization = userContainer((state) => state.addAuthorization);
  const getAuthorization = userContainer((state) => state.isAuthorized);
  console.log(getAuthorization);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setInvalid] = useState("");

  const [login, { data, error }] = useLazyQuery(LOGIN, {
    variables: { email, password },
  });

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        //excecute the login query
        await login().then(function (response) {
          console.log("response", response);
          var data = response.data.login;

          if (data === "User OK") {
            //valid if the user exits
            //set authentication state
            addAuthorization({ token: true });
            navigate("/home");
          } else {
            //set invalid user label
           
            setInvalid("Invalid Credentials!!!");
          }

          //redirect
        });
      }}
      className="w-2/4 grid bg-sky-100 ml-80 py-20 pr-5 px-5 pl-5"
    >
      <div className="mb-6">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@domain.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>

      <div className="mb-6">
        <p className="text-sm text-red-600 mt-5">{isInvalid}</p>
      </div>
    </form>
  );
}

export default Login;
