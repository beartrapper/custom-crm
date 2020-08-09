import React from "react";
import Nav from "../Nav/Nav";
import TopNav from "../Nav/TopNav";

export default function AllContact() {
  return (
    <div class="">
      <TopNav searchBarVisibility={false} />

      <div class=" page-body-wrapper">
        <Nav />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div
                class="col-lg-12 alert-info text-center rounded mb-2 "
                style={{ zIndex: "999" }}
              >
                <p class="pt-3">Click on the contact for details</p>
              </div>
              <div
                class="col-lg-12 grid-margin stretch-card "
                style={{ zIndex: "999" }}
              >
                <div class="card">
                  <div class="card-body table-widthy">
                    <table class="table ">
                      <thead>
                        <tr>
                          <th>
                            <b>Name</b>
                          </th>
                          <th>
                            <b>Email</b>
                          </th>{" "}
                     
                          <th>
                            <b>Action</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-primary">Chris Soriano</td>
                          <td>dummy@gmail.com</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
                  
                        <tr>
                          <td class="text-primary">Chris Soriano</td>
                          <td>dummy@gmail.com</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
               
                        <tr>
                          <td class="text-primary">Chris Soriano</td>
                          <td>dummy@gmail.com</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
               
                        <tr>
                          <td class="text-primary">Chris Soriano</td>
                          <td>dummy@gmail.com</td>
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
