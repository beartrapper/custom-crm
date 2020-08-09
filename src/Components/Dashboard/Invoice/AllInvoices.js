import React from "react";
import Nav from "../Nav/Nav";

import TopNav from "../Nav/TopNav";

export default function AllInvoices() {
  return (
    <div class="">
      <TopNav searchBarVisibility={false} />

      <div class=" page-body-wrapper">
        <Nav />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div
                class="col-lg-6 grid-margin stretch-card"
                style={{ zIndex: "999" }}
              >
                <div class="card">
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>
                            <b>Name</b>
                          </th>
                          <th>
                            <b>VAT</b>
                          </th>

                          <th>
                            <b>Status</b>
                          </th>
                          <th>
                            <b>Amount</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-primary">Jacob</td>
                          <td>2132131</td>
                          <td>
                            <button class="btn badge badge-danger bg-success" >
                            Paid
                            </button>
                          </td>
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
              <div class="col-lg-6" style={{ zIndex: "999" }}>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      <b>Create Invoice</b>
                    </h4>
                    <form class="forms-sample">
                      <div class="form-group row">
                        <label
                          for="exampleInputEmail2"
                          class="col-sm-3 col-form-label"
                        >
                          To
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail2"
                            placeholder="Enter the mail"
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
                            class="form-control"
                            id="exampleInputPassword2"
                            // placeholder=""
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="exampleInputEmail2"
                          class="col-sm-3 col-form-label"
                        >
                          Event
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail2"
                            placeholder="Enter the event name"
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
