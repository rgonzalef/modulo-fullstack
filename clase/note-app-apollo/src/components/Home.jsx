import React, { useEffect } from "react";
import noteImg from "../assets/note-image.png";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_NOTES } from "../graphql/Queries";
import { REMOVE_NOTE } from "../graphql/Mutation";
import { Link, useNavigate } from "react-router-dom";
import userContainer from "../config/UserStore";

function Home() {
  const navigate = useNavigate()
  const getAuthorization = userContainer((state) => state.isAuthorized)
  useEffect(() => {
      console.log('get Authorization', getAuthorization)
      //var isAuthenticated = getAuthorization.isAuthorized

      if(!getAuthorization.isAuthorized) return navigate("/")
      getNotes();

  }, []);

  //call the get notes query from backend
  const [getNotes, { data, error }] = useLazyQuery(GET_NOTES);
  const [removeNote] = useMutation(REMOVE_NOTE, {
    //refetch the query notes
    refetchQueries: [{ query: GET_NOTES }],
  });

  if (data) {
    console.log(data);
  }

  return (
    <div className="flex pt-25 gap-5 ">
      {data &&
        data.getNotes.map(({ _id, title, content, date }) => (
          <>
          <div className="bg-white w-1/2 h-485px px-20 pt-15 pb25">
          <Link
              data-id={_id}
              to="/create-note"
              state={{ _id: _id, title: title, content: content, date: date }}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img  className="rounded-t-lg w-4/5 pt-6 pr-5 py-6 pl-6 ml-12" 
                      src={noteImg} 
                      alt="" />
              </a>
              <div className="p-5">
                
                  <div>
                      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                      </h3>
                  </div>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {content}
                </p>

              </div>

            </Link>
            <div>
              <button
                type="button"
                onClick={async (event) => {
                  await removeNote({
                    variables: { _id: _id },
                  });
                }}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </div>

          </div>
          
          </>
        ))}
    </div>
  );
}

export default Home;
