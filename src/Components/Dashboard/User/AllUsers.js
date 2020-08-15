import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import TopNav from "../Nav/TopNav";
import axios from "axios";
import { functions } from "../../../firebase";

export default function AllUsers() {
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allUser, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://us-central1-custom-crm-611a5.cloudfunctions.net/listUsers"
      )
      .then((res) => {
        setAllUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //handling change in email
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  //handling change in password
  const handlePassword = (e) => {
    setError(false);
    setPassword(e.target.value);
  };

  //submitting the result to firebase auth api
  const handleSubmit = (e) => {
    e.preventDefault();

    //setting the loader = true
    setChecking(true);

    //calling the cloud function
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://us-central1-custom-crm-611a5.cloudfunctions.net/addUser?email=${email}&password=${password}`
      )
      .then((res) => {
        console.log(res.data.error);
        if (res.data.error) setError(true);
        else getAllUsers();
        setEmail("");
        setPassword("");
        setChecking(false);
      })
      .catch((err) => {
        console.log(err);
        setEmail("");
        setPassword("");
        setChecking(false);
        setError(true);
      });
  };

  const handleDelete = (index) => {
    // deleting from the current state
    let usersArray = allUser.filter(function (e) {
      return e != allUser[index];
    });
    setAllUsers(usersArray);

    //deleting from the db
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://us-central1-custom-crm-611a5.cloudfunctions.net/deleteUser?uid=${allUser[index].uid}`
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

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
                            <b>Email</b>
                          </th>

                          <th>
                            <b>Action</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {allUser.map((item, key) => {
                          return (
                            <>
                              <tr>
                                <td class="text-primary">{item.email}</td>
                                <td>
                                  <button
                                    onClick={() => handleDelete(key)}
                                    class="btn badge badge-danger"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-lg-6" style={{ zIndex: "999" }}>
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
                            onChange={handleEmail}
                            value={email}
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
                            onChange={handlePassword}
                            value={password}
                          />
                        </div>
                      </div>
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        class={
                          "btn  mr-2 " +
                          (checking ? " disabled text-dark" : " btn-primary")
                        }
                      >
                        {checking ? "Submitting" : "Submit"}
                      </button>
                      <button onClick={handleCancel} class="btn btn-light">
                        Cancel
                      </button>
                      {error ? (
                        <div className="col-12 alert alert-danger mt-4">
                          Could you please increase the password length?
                        </div>
                      ) : (
                        <></>
                      )}
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
