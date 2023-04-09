import { useHistory } from "react-router-dom";

function NotFound() {
  let history = useHistory();
  const handleClickButton = () => {
    history.push("/");
  };
  return (
    <div className="not-found-container">
      <h4>Không thể truy cập trang web này</h4>
      <h5>
        Vui lòng kiểm tra lại hoặc truy cập vào đường link
        https://www.facebook.com/
      </h5>
      <button className="btn btn-primary" onClick={handleClickButton}>
        Quay lại trang chủ
      </button>
    </div>
  );
}

export default NotFound;
