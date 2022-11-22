import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Main2 from './components/Main2';

function App() {

  const url = process.env.PUBLIC_URL;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data));
  }, []);

  return (
    <Router basename={url}>
      <Routes>
        <Route path="/" element={<Main posts={posts} />} />
        <Route path="/main2/:id" element={<Main2 posts={posts} />} />
      </Routes>
    </Router>
  );
}

export default App;