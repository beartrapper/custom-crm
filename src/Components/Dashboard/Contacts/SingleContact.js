import React from "react";
import Nav from "../Nav/Nav";
import TopNav from "../Nav/TopNav";

export default function SingleContact() {
  return (
    <div class="">
      <TopNav searchBarVisibility={true} />

      <div class=" page-body-wrapper">
        <Nav />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-lg-6" style={{ zIndex: "999" }}>
                <div class="card">
                  <div class="card-body">
                    <div class="row ">
                      <div class="text-center ml-auto mr-auto pb-5">
                        <img
                          src="https://www.w3schools.com/howto/img_avatar.png"
                          alt="Avatar"
                          class="avatar"
                        />
                      </div>
                    </div>
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
                            value="dummy@gmail.com"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="exampleInputPassword2"
                          class="col-sm-3 col-form-label"
                        >
                          Name
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="texr"
                            class="form-control"
                            id="exampleInputPassword2"
                            value="dummy name"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="exampleInputPassword2"
                          class="col-sm-3 col-form-label"
                        >
                          Phone #
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword2"
                            // placeholder="Password"
                            value="123456789"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label
                          for="exampleInputPassword2"
                          class="col-sm-3 col-form-label"
                        >
                          Address
                        </label>
                        <div class="col-sm-9">
                          <textarea
                            type="text"
                            class="form-control"
                            id="exampleInputPassword2"
                            // placeholder="Password"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-lg-6" style={{ zIndex: "999" }}>
                <div class="card">
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>
                            <b>Date</b>
                          </th>
                          <th>
                            <b>City</b>
                          </th>

                          <th>
                            <b>Name</b>
                          </th>
                          <th>
                            <b>Price</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-primary">12-12-12</td>
                          <td>Berlin</td>
                          <td>Dummy</td>
                          <td>120$</td>
                        </tr>
                        <tr>
                          <td class="text-primary">12-12-12</td>
                          <td>Berlin</td>
                          <td>Dummy</td>
                          <td>120$</td>
                        </tr>

                        <tr>
                          <td class="text-primary">12-12-12</td>
                          <td>Berlin</td>
                          <td>Dummy</td>
                          <td>120$</td>
                        </tr>
                        <tr>
                          <td class="text-primary">12-12-12</td>
                          <td>Berlin</td>
                          <td>Dummy</td>
                          <td>120$</td>
                        </tr>
                        <tr>
                          <td class="text-primary">12-12-12</td>
                          <td>Berlin</td>
                          <td>Dummy</td>
                          <td>120$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="">
                  <button class="col-lg-6 btn-primary btn p-5 mt-3">
                    Bills Unpaid
                  </button>
                  <button class="offset-1  col-lg-5 shadow bg-white btn p-5 mt-3 hover-as">
                    Total Debt
                  </button>
                </div>
              </div>
            </div>
            <div class="row pt-3">

            <div class="col-lg-3" style={{ zIndex: "999" }}>
                <div class="card">
                  <div class="card-body">
                    <table class="table">
                      <thead class="text-center">
                        <tr>
                          
                          <th>
                            <b>Last Opened Tags</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-primary text-center">#hashtag</td>                        
                        </tr>
                        <tr>
                          <td class="text-primary text-center">#hashtag</td>                        
                        </tr> <tr>
                          <td class="text-primary text-center">#hashtag</td>                        
                        </tr> <tr>
                          <td class="text-primary text-center">#hashtag</td>                        
                        </tr>
                   </tbody>
                    </table>
                  </div>
                </div>
                </div>
            
                <div class="col-lg-6" style={{ zIndex: "999" }}>
                <div class="card">
                  
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          
                          <th class="text-center ">
                            <b>Last Communications</b>
                          </th>
                      
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="pt-4 pb-4">Hi there. This is in reference...</td>                        
                        </tr>
                        <tr>
                          <td class="pt-4 pb-4">Hi there. This is in reference...</td>                        
                        </tr>
                        <tr>
                          <td class="pt-4 pb-4">Hi there. This is in reference...</td>                        
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
