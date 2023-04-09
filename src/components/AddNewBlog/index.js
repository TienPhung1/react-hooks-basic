import { useState } from "react";
import "./AddNewBlog.scss";
import axios from "axios";

function AddNewBlog(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!title) {
      alert("Vui Long Nhap TK");
      return;
    }
    if (!content) {
      alert("Vui Long Nhap MK");
      return;
    }

    let data = {
      title: title,
      body: content,
      userId: 1,
    };

    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    if (res && res.data) {
      let newBlog = res.data;
      props.handleAddNew(newBlog);
    }
  };

  return (
    <div className="wrapper">
      <div className="input-data">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="input-data">
        <label>content:</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="btn-submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default AddNewBlog;
