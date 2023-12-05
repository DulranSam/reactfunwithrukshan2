import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [surprise, setSurprise] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const alertRukshan = (e, a = "Ruskhan") => {
    e.preventDefault();
    alert(`Kaboom ${a}`);
  };

  return (
    <>
      <button onClick={(e) => alertRukshan(e, surprise)}>SURPRISE!</button>
      <input
        onChange={(e) => {
          setSurprise(e.target.value);
        }}
        placeholder="Enter Surprise"
      ></input>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h1>The title is {item.title}</h1>
            <h2>{item.completed === true ? "Completed" : "Incomplete"}</h2>
          </div>
        ))}
    </>
  );
};

export default Home;
