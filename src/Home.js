import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
// import useFetch from "./useFetch"; 

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(
      "https://the-dojo-blog-95b6b-default-rtdb.firebaseio.com/blogs", {
      //  headers: {'Access-Control-Allow-Origin': '*'},
      //  headers: {'Content-Length': '0'},
       headers: {'Content-Type': 'text/plain'},
      })
      .then(response => {
        if (!response.ok) {
          throw Error ('could not fetch the data for that resource');
        }
        return response.json();
      })
      .then(blogs => {
        setBlogs(blogs);
        setIsPending(false);
      })
      .catch(err => {
        console.log(err.message);
      })
  }, []);

  

  return (
    <div className="home">
      {/* {error && <div>{error}</div>} */}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} heading="All Blogs" />}
    </div>
  );
};

export default Home;
