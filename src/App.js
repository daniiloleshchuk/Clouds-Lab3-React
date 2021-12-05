import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [sensorData, setSensorData] = useState([]);
  const [count, setCount] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://0uhfygqyr4.execute-api.us-east-2.amazonaws.com/Lab3_stage")
      setSensorData(response.data.body);
      setCount(response.data.count);
      return response;
    }
    fetchData();
  }, [])

  return (
      <div className="container">
        <table className="table table-striped table-bordered">
          {/*<thead>*/}
          {/*<tr>*/}
          {/*  <th>ID</th>*/}
          {/*  <th>Name</th>*/}
          {/*</tr>*/}
          {/*</thead>*/}
          <h1>{count}</h1>
          <tbody>
          {sensorData && sensorData.map(dat =>
              <tr key={dat.sample_time}>
                <td>{dat.sensor_id}</td>
                <td>{dat.sample_time}</td>
                <td>{dat.sensor_data.sensor_type}</td>
                <td>{dat.sensor_data.data}</td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
  );
}

export default App;
