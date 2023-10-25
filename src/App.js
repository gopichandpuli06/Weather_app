import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "https://frontend-take-home-service.fetch.com";

export default function App() {
  const [breed, setPost] = useState(null);

  useEffect(() => {
    // Assuming you need to login to access /dogs/breeds
    axios
      .post(`${baseURL}/auth/login`, {
        name: "data",
        email: "data@gmail.com",
      }, {
        withCredentials: true,
      })
      .then((response) => {
        // You don't need to manually set cookies
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  }, []);

  function createPost() {
    axios.defaults.withCredentials=true;
    axios
      .get(`${baseURL}/dogs/breeds`, {
        withCredentials: true, // This will include cookies
      })
      .then((response) => {
        (setPost(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.error("GET Request Error:", error);
      });
  }

  if (!breed) return "No post!";

  return (
    <div>
      <p>{breed}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
