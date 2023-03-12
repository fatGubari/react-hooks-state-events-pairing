import video from "../data/video.js";
import Comments_Likes from "./Comments_Likes.jsx";

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <Comments_Likes video={video}/>
    </div>
  );
}

export default App;
