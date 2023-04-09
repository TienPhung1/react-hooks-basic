import useFetch from "../../customize/fetch";
import moment from "moment";
import "./Covid.scss";

function Covid() {
  // const today = new Date(new Date().setHours(0, 0, 0, 0));
  // const priorDate = moment().convert.format("DD/MM/YYYY");

  const today = moment().startOf("day");
  const priorDate = today.subtract(30, "days");

  const {
    data: dataCovid,
    loading,
    isError,
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`,
    true
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>

      <tbody>
        {isError === false &&
          loading === false &&
          dataCovid.map((item) => {
            return (
              <tr key={item.ID}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths} </td>
                <td>{item.Recovered} </td>
              </tr>
            );
          })}

        {loading === true && (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              loading...
            </td>
          </tr>
        )}

        {isError === true && (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              somthing wrong...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Covid;
