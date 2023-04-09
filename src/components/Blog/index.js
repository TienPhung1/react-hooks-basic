import { useEffect, useState } from "react";
import useFetch from "../../customize/fetch";
import "./Blog.scss";
import AddNewBlog from "../AddNewBlog";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Blog() {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    data: dataBlogs,
    loading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let data = dataBlogs.slice(0, 9);
      setNewData(data);
    }
  }, [dataBlogs]);

  const handleAddNew = (blog) => {
    let data = newData;
    data.unshift(blog);

    setShow(false);
    setNewData(data);
  };

  const handleDelete = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };

  return (
    <>
      <Button className="btn-modal" variant="primary" onClick={handleShow}>
        + Add News Blogs
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blogs</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>

      <div className="blogs-container">
        {loading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div key={item.id} className="wrapper">
                <div className="title">
                  <span>{item.title}</span>
                </div>
                <div className="content">{item.body}</div>
                <button className="content-btn">
                  <Link to={`/blog/${item.id}`}>View details</Link>
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Xoa
                </button>
              </div>
            );
          })}
        {loading === true && <div style={{ width: "100%" }}>Loading...</div>}
      </div>
    </>
  );
}

export default Blog;
