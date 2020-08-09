import React from "react";
import Nav from "../Nav/Nav";

import TopNav from "../Nav/TopNav";

export default function CreateNewProject() {
  return (
    <div class="">
      <TopNav searchBarVisibility={false} />

      <div class=" page-body-wrapper">
        <Nav />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
            <div class="col-lg-6" style={{ zIndex: "999" }}>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      <b>Add New Project</b>
                    </h4>
                    <form class="forms-sample">
                      <div class="form-group row">
                        <label
                          for="exampleInputEmail2"
                          class="col-sm-3 col-form-label"
                        >
                          Project Name
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail2"
                            placeholder="Please enter the name here "
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="exampleInputPassword2"
                          class="col-sm-3 col-form-label"
                        >
                          Description
                        </label>
                        <div class="col-sm-9">
                          <textarea
                            type="text"
                            class="form-control placeholder-class"
                            id="exampleInputPassword2"
                            // placeholder="Optional"
                          />
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary mr-2">
                        Create
                      </button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-6" style={{ zIndex: "999" }}>
              <div class="card">
                  <div class="card-body table-widthy">
                    <table class="table ">
                      <thead>
                        <tr>
                          <th>
                            <b>Name</b>
                          </th>
      
                          <th>
                            <b>Action</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea</td>
                    
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea</td>
                    
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea</td>
                    
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea</td>
                    
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea</td>
                    
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
                  
                  </tbody>
                    </table>
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
