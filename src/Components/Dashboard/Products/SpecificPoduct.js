import React from "react";
import Nav from "../Nav/Nav";
import {
  FaBeer,
  FaWindowClose,
  FaTimesCircle,
  FaHeart,
  FaSortNumericDown,
  FaRegHandPaper,
  FaVenus,
} from "react-icons/fa";
import TopNav from "../Nav/TopNav";

export default function SpecificProducts() {
  return (
    <div class="">
   
      <TopNav searchBarVisibility={false} />

      <div class=" page-body-wrapper">
        <Nav />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row ">
              <div class="col-lg-12" style={{ zIndex: "999" }}>
                <div class="card">
                  <div class="card-body">
                    <h3 class="text-center">
                      <b class="bg-primary p-5 rounded text-light">
                        Edit Details
                      </b>
                    </h3>
                    <form class="forms-sample pt-5 mt-5">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Name:</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label ">
                              Price:
                            </label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">VAT:</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">
                              # in Stock:
                            </label>
                            <div class="col-sm-9">
                              <input type="number" class="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center">
                        <button type="submit" class="btn btn-primary mr-2 mt-5">
                          Update
                        </button>
                        <button class="btn btn-light  mt-5">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
