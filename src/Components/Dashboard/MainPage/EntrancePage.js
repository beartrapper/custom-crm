import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import TopNav from "../Nav/TopNav";
import { FaRegCheckCircle } from "react-icons/fa";

export default function EntrancePage() {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, [])

  const handleChangeDate = (_date) => {
    setDate(_date);
  };

  return (
<>
    { loading ? 
  <>
        <div className="sweet-loading">
        <ClimbingBoxLoader
          // size={150}
          color={"#fff"}
          loading={loading}
          css={"margin-left: auto ; padding-top: 90vh !important; margin-right: auto "}
  />
      </div>
  </>
:<>
    <div class="">
      <TopNav searchBarVisibility={false} />

      <div class=" page-body-wrapper">
        <Nav />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div
                class="col-lg-6 "
                style={{ zIndex: "999" }}
              >
                <div class="card bg-greyer pt-4 pb-4 overflow-control-kar">
                <h4 class="text-center ">Tasks</h4>
                    <hr />
                    <div class="container">
                    <div class="container pt-2 hover-change-size">
                      <div class="col-12 border shadow  pt-3 carding bg-white">
                     <div class="row">
                     <div class="col-10">
                          <p>
                          <b>Task 1</b>
                        </p>
                          </div>
                      <div class="col-2 text-right">
                          <FaRegCheckCircle class="hover-change-icon" color="green"/>
                      </div>
                     </div>
                        <hr />
                        <p>Description</p>
                      </div>
                  </div>
                  <div class="container pt-2 hover-change-size">
                      <div class="col-12 border shadow  pt-3 carding bg-white">
                     <div class="row">
                     <div class="col-10">
                          <p>
                          <b>Task 1</b>
                        </p>
                          </div>
                      <div class="col-2 text-right">
                          <FaRegCheckCircle class="hover-change-icon" color="green"/>
                      </div>
                     </div>
                        <hr />
                        <p>Description</p>
                      </div>
                  </div>
                  <div class="container pt-2 hover-change-size">
                      <div class="col-12 border shadow  pt-3 carding bg-white">
                     <div class="row">
                     <div class="col-10">
                          <p>
                          <b>Task 1</b>
                        </p>
                          </div>
                      <div class="col-2 text-right">
                          <FaRegCheckCircle class="hover-change-icon" color="green"/>
                      </div>
                     </div>
                        <hr />
                        <p>Description</p>
                      </div>
                  </div>
                  <div class="container pt-2 hover-change-size">
                      <div class="col-12 border shadow  pt-3 carding bg-white">
                     <div class="row">
                     <div class="col-10">
                          <p>
                          <b>Task 1</b>
                        </p>
                          </div>
                      <div class="col-2 text-right">
                          <FaRegCheckCircle class="hover-change-icon" color="green"/>
                      </div>
                     </div>
                        <hr />
                        <p>Description</p>
                      </div>
                  </div>
          
                    </div>
            </div>
                
              </div>
              <div
                class="col-lg-6 grid-margin stretch-card kis-kisko"
                style={{ zIndex: "999" }}
              >
                <Calendar
                  onChange={handleChangeDate}
                  value={date}
                  className="calendar-UI shadow col-lg-12 kis-kisko"
                />
              </div>
            </div>
    <hr />
            <div class="row">
              <div
                class="col-lg-6 grid-margin stretch-card "
                style={{ zIndex: "999" }}
              >
                <div class="card bg-f3f3f3">
                    <h4 class="text-center pt-4">Latest Messages</h4>
                    <hr />
                  <div class="card-body mix-min-ieit pt-0 mt-0">
                      <div class="row ">
                      {/* <p class="text-white"><b>Name</b></p> */}
                      <div class=" col-4 pt-3 rpinded-s">
                      <p class="text-white"><b>Name</b></p>
                      </div>
                      <div class="col-12 pt-3 pl-3 pb-2 bg-primary rpinded-">
                            <p class="text-white">Conversation goes here</p>
                        </div>
                      </div>
                    <hr />
                      
                      <div class="row pt-2">
                      {/* <p class="text-white"><b>Name</b></p> */}
                      <div class=" col-4 pt-3 rpinded-s">
                      <p class="text-white"><b>Name</b></p>
                      </div>
                      <div class="col-12 pt-3 pl-3 pb-2 bg-primary rpinded-">
                            <p class="text-white">Conversation goes here</p>
                        </div>
                      </div>
                    <hr />
                      
                      <div class="row pt-2">
                      {/* <p class="text-white"><b>Name</b></p> */}
                      <div class=" col-4 pt-3 rpinded-s">
                      <p class="text-white"><b>Name</b></p>
                      </div>
                      <div class="col-12 pt-3 pl-3 pb-2 bg-primary rpinded-">
                            <p class="text-white">Conversation goes here</p>
                        </div>
                      </div>
              
                      
                       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
}
</>
);
}
