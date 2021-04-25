import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import img from "./coronavirus.svg";
const App = () => {
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState([]);

  const fetchApiData = async () => {
    const fetchdata = await fetch(
      "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
    );

    const jsndata = await fetchdata.json();
    setResult(jsndata.data.statewise);
    setTotal(jsndata.data.total);
  };

  useEffect(() => {
    fetchApiData();
  }, []);
  return (
    <>
      <div className="container mt-3">
        <div className="text-center">
          <img src={img} alt="icon" />
        </div>
        <h1 className="text-center mt-4 display-4 font-weight-bold">
          Indian State Wise Covid Statistics
          <hr className="hr-row mb-4 w-50" />
        </h1>
        <div className="row text-center my-5">
          <div className="col-11 col-md-3 col-sm-6 mx-auto my-2">
            <div className="card">
              <div className="card-body">
                <h2>Total <br/> Confirmed</h2>
                <hr className="hr-row w-50" />
                <h3>{total.confirmed}</h3>
              </div>
            </div>
          </div>
          <div className="col-11 col-md-3 col-sm-6 mx-auto my-2">
            <div className="card">
              <div className="card-body">
                <h2>Total <br/> Recoverd</h2>
                <hr className="hr-row w-50" />
                <h3>{total.recovered}</h3>
              </div>
            </div>
          </div>
          <div className="col-11 col-md-3 col-sm-6 mx-auto my-2">
            <div className="card">
              <div className="card-body">
                <h2>Total <br/> Active</h2>
                <hr className="hr-row w-50" />
                <h3>{total.active}</h3>
              </div>
            </div>
          </div>
          <div className="col-11 col-md-3 col-sm-6 mx-auto my-2">
            <div className="card">
              <div className="card-body">
                <h2>Total <br/> Deaths</h2>
                <hr className="hr-row w-50" />
                <h3>{total.deaths}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 m-auto tb">
            <table className="table table-striped">
              <thead>
                <tr className="bg-dark text-white">
                  <th scope="col">#</th>
                  <th scope="col">State</th>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">Active</th>
                  <th scope="col">Death</th>
                </tr>
              </thead>
              <tbody>
                {result.map((res, key) => {
                  return (
                    <>
                      <tr>
                        <td>{key + 1}</td>
                        <td>{res.state}</td>
                        <td>{res.confirmed}</td>
                        <td className="text-success">{res.recovered}</td>
                        <td>{res.active}</td>
                        <td className="text-danger">{res.deaths}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
