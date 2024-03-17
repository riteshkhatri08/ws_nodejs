/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  // useState Hook to store and update jokes
  const [jokes, setJokes] = useState([]);

  //  useEffect
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Frontend App!</h1>
      <h2>Jokes</h2>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <p>
            Joke-{joke.id} has title {`"${joke.title}"`} and says
            {` "${joke.content}"`}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
