import React from "react";
import Feed from "./Pages/Feed.jsx";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreatePost from "./Pages/CreatePost.jsx";

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path = '/create-post' element = {<CreatePost/>} />
        <Route path = '/feed' element = {<Feed/>} />
      </Routes>
    </Router>

      

  )
}

export default App 