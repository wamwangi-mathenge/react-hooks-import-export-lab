import React from "react";
import { username, city } from "/home/brian/Development/code/Phase2/react-hooks-import-export-lab/src/data/user.js";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home
