import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css'

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then(function (response) {
        console.log(response);
        setData(response.data);
      });
  }, []);

  return (
    <section class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col text-center mb-5">
            <h1 class="display-4">Countries and Flags</h1>
            <p class="lead">
            “This nation will remain the land of the free only so long as it is the home of the brave.”{" "}
            </p>
          </div>
        </div>
        <div class="row">
          
          {data.map((datas)=>{
           return  <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
           
             
             
               
                <div class="card-footer" style={{height:'100px',borderRadius:'25px'}}>
                  <div class="media">
                    <img
                      class="mr-3 rounded-circle"
                      src={datas.flag}
                      alt="Generic placeholder image"
                      style={{ maxWidth: "100px" }}
                    />
                    <div class="media-body">
                      <h6 class="my-0 text-white d-block">{datas.name}</h6>
                      <small>{datas.region}</small>
                    </div>
                  </div>
                </div>
             
            </div>

          })}

        </div>
      </div>
    </section>
  );
};

export default Home;
