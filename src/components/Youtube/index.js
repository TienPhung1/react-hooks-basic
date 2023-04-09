import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import "./Youtube.scss";

function Youtube() {
  const [video, setVideo] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {}, []);

  const handleSearchYoutube = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyAIhFpuijmb2LlzvtFLcvKu6gRmvGY00O8",
        type: "video",
        q: query,
      },
    });

    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];

      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          result.push(object);
        });
      }

      setVideo(result);
    }
    console.log(res);
  };
  return (
    <div className="youtube-search-container">
      <div className="youtube-search">
        <input
          className="input-search"
          type="text"
          placeholder="tim kiem..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="btn-search"
          type="button"
          onClick={handleSearchYoutube}
        >
          Search
        </button>
      </div>

      {video &&
        video.length > 0 &&
        video.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="iframe-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="Don&#39;t Côi - RPT Orijinn x Ronboogz (Visualizer)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="create-at">
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
                </div>
                <div className="author">{item.author} </div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Youtube;

// {
//   "kind": "youtube#searchListResponse",
//   "etag": "MOCHOzhCjhcIuf5ye06YRGQsqh4",
//   "nextPageToken": "CAUQAA",
//   "regionCode": "VN",
//   "pageInfo": {
//     "totalResults": 1000000,
//     "resultsPerPage": 5
//   },
//   "items": [
//     {
//       "kind": "youtube#searchResult",
//       "etag": "D5g7q7tKr1cF4vrnvRuQlHe8XW8",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "LlvBzyy-558"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "p_LjAeORBjokTe4rwJem3AtgQvo",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "TNhaISOUy6Q"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "Vnr9l513paf8dYjpa57OPZ342pA",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "KJP1E-Y-xyo"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "8Zgwen61CiJ9FCJtIz8xBXLvIVc",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "4UZrsTqkcW4"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "7aC5Ftd8oEjab1ouMptyzs5TgN8",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "Rh3tobg7hEo"
//       }
//     }
//   ]
// }
