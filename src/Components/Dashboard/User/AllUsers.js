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

export default function AllUsers() {
  return (
    <div class="">
        
      <TopNav searchBarVisibility={false} />
  
      <div class=" page-body-wrapper">
        <Nav />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
                
              <div class="col-lg-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>
                            <b>Profile</b>
                          </th>
                          <th>
                            <b>Email</b>
                          </th>

                          <th>
                            <b>Action</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-primary">Jacob</td>
                          <td>dummy@gmail.com</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Jacob</td>
                          <td>dummy@gmail.com</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Jacob</td>
                          <td>dummy@gmail.com</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Jacob</td>
                          <td>dummy@gmail.com</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Jacob</td>
                          <td>dummy@gmail.com</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      <b>Add New User</b>
                    </h4>
                    <form class="forms-sample">
                      <div class="form-group row">
                        <label
                          for="exampleInputEmail2"
                          class="col-sm-3 col-form-label"
                        >
                          Email
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail2"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="exampleInputPassword2"
                          class="col-sm-3 col-form-label"
                        >
                          Password
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword2"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary mr-2">
                        Submit
                      </button>
                      <button class="btn btn-light">Cancel</button>
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
