import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../../customize/fetch";

function DetailBlog() {
  let { id } = useParams();
  let history = useHistory();

  const {
    data: dataBlogDetail,
    loading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  const handleBackData = () => {
    history.push("/blog");
  };

  console.log(dataBlogDetail);
  return (
    <>
      <button onClick={handleBackData}>Back</button>

      <div className="blog-detail">
        {dataBlogDetail && dataBlogDetail.length > 0 && (
          <>
            <div> {loading === true ? "loading..." : dataBlogDetail.title}</div>
            <div>{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
}

export default DetailBlog;
