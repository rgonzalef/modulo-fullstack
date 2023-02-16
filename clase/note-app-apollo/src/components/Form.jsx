import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_NOTE } from "../graphql/Mutation";
import { UPDATE_NOTE } from "../graphql/Mutation";
import { useLocation, useNavigate } from "react-router-dom";
import userContainer from "../config/UserStore";

function Form() {
  /*Glogal variables declaration block */
  const getAuthorization = userContainer((state) => state.isAuthorized)
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [_id, setId] = useState("");
  /*Glogal variables declaration block */

  /*Location store variables */
  const getState = location.state;
  const noteId = getState && getState !== undefined ? getState._id : "";
  const titleNote = getState && getState !== undefined ? getState.title : "";
  const contentNote = getState && getState !== undefined ? getState.content : "";
  const dateNote = getState && getState !== undefined ? getState.date : "";
  /*Location store variables */

  useEffect(() => {
    if(!getAuthorization.isAuthorized) return navigate("/")
    if (getState) {
      setTitle(titleNote);
      setContent(contentNote);
      setDate(dateNote);
      setId(noteId);
    }
  }, []);

  //declare mutation function

  const [createNote] = useMutation(CREATE_NOTE, {});
  const [updateNote] = useMutation(UPDATE_NOTE, {});

  return (
    <form
      className="w-2/4 grid ml-80 py-20 pr-5 px-5 pl-5"
      onSubmit={async (event) => {
        event.preventDefault();

        if (getState) {
          await updateNote({ variables: { _id, title, content, date } });
        } else {
          await createNote({ variables: { title, content, date },
          });
        }
        navigate("/home");
        //location.reload();
      }}
    >
      <div>
        <label
          for="title"
          className="block mb-2 text-sm font-medium text-white my-2 dark:text-white"
        >
          Title
        </label>
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          type="text"
          id="title"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label
          for="date"
          className="block mb-2 text-sm font-medium text-white my-5 dark:text-white"
        >
          Date
        </label>
        <input
          onChange={(event) => {
            setDate(event.target.value);
          }}
          value={date}
          type="date"
          id="date"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          for="content"
          className="block mb-2 text-sm font-medium text-white my-5 dark:text-white"
        >
          Content
        </label>
        <input
          onChange={(event) => {
            setContent(event.target.value);
          }}
          value={content}
          type="text"
          id="content"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {getState ? "Update Note" : "Create Note"}
      </button>
    </form>
  );
}

export default Form;
