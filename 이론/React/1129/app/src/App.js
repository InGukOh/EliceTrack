import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Header = ({ title }) => {
  return (
    <header>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </header>
  );
};
const Nav = ({ topics }) => {
  const liTag = topics.map((t) => {
    return (
      <li key={t.id}>
        <Link to={`/read/${t.id}`}>{t.title}</Link>
      </li>
    );
  });
  return (
    <nav>
      <ul>{liTag}</ul>
    </nav>
  );
};
const Article = ({ title, body }) => {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
};
function Control() {
  const params = useParams();
  const id = Number(params.id);
  let contextUI = null;
  if (id) {
    contextUI = (
      <li>
        <Link to={`/update/${id}`}>Update</Link>
      </li>
    );
  }
  return (
    <ul>
      <li>
        <Link to="/create">Create</Link>
      </li>
      {contextUI}
    </ul>
  );
}

const Read = () => {
  const params = useParams();
  const id = Number(params.id);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    axios.get(`/topics/${id}`).then((result) => {
      setTitle(result.data.title);
      setBody(result.data.body);
    });
  }, [id]);
  return <Article title={title} body={body}></Article>;
};
function App() {
  const [topics, setTopics] = useImmer([]);
  const fetchTopics = async () => {
    const topics = await axios.get("/topics");
    setTopics(topics.data);
  };
  useEffect(() => {
    fetchTopics();
  }, []);
  const navigate = useNavigate();
  const createHandler = (title, body) => {
    axios.post("/topics", { title, body }).then((result) => {
      setTopics((draft) => {
        draft.push(result.data);
      });
      navigate(`/read/${result.data.id}`);
    });
  };
  const updateHandler = (id, title, body) => {
    axios.patch(`/topics/${id}`, { title, body }).then((result) => {
      setTopics((draft) => {
        const index = draft.findIndex((t) => t.id === id);
        draft[index].title = title;
        draft[index].body = body;
      });
      navigate(`/read/${id}`);
    });
  };
  return (
    <div className="App">
      <Header title="웹" />
      <Nav topics={topics} />
      <Routes>
        <Route path="/" element={<Article title="Hello" body="Welcome, WEB!" />}></Route>
        <Route path="/create" element={<Create onSave={createHandler}></Create>}></Route>
        <Route path="/update/:id" element={<Update onSave={updateHandler}></Update>}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Control></Control>} />
        <Route path="/read/:id" element={<Control></Control>} />
        <Route path="/create" element={<Control></Control>} />
        <Route path="/update/:id" element={<Control></Control>} />
      </Routes>
    </div>
  );
}

export default App;
