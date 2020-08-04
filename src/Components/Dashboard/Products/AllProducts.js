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

export default function AllProducts() {
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
                <p class="pt-3">Click on the product to edit</p>
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
                            <b>Price</b>
                          </th>{" "}
                          <th>
                            <b>VAT</b>
                          </th>{" "}
                          <th>
                            <b># In Stock</b>
                          </th>
                          <th>
                            <b>Action</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea</td>
                          <td>100$</td>
                          <td>1234567</td>
                          <td>182</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea</td>
                          <td>100$</td>
                          <td>1234567</td>
                          <td>182</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea</td>
                          <td>100$</td>
                          <td>1234567</td>
                          <td>182</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea</td>
                          <td>100$</td>
                          <td>1234567</td>
                          <td>182</td>
                          <td>
                            <button class="btn badge badge-danger">
                              Remove
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-primary">Bayern v Chelsea</td>
                          <td>100$</td>
                          <td>1234567</td>
                          <td>182</td>
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
