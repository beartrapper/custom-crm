import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { firestore } from "../../../firebase";
import Nav from "../Nav/Nav";
import TopNav from "../Nav/TopNav";
import Sales from "./Sales";

export default function SingleContact() {

  const location = useLocation();
  const [currentContact, setCurrentContact] = useState(location.state.contact)
  const [currentRecords, setCurrentRecords] = useState([])
  const [currentPage, setCurrentPage] = useState("contact")
  const [moneySpentByContact, setMoneySpentByContact] = useState(false)

  useEffect(() => {
    getSpecificContactSales();
  }, [])

  const getSpecificContactSales = () => {
    firestore.collection("elopage_records").where("item.EMAIL", "==", currentContact.EMAIL).limit(5)
    // .orderBy("item.EMAIL", "desc")
    .get()
    .then(docs => {
      let temp = [];
      let moneySpent = 0;
      let tempMoney;
      docs.forEach(doc => {

          const obj = {
            data: doc.data(),
            id: doc.id
          }
          temp.push(obj)

                //pushing value for money-spent
                tempMoney = doc.data().item.AMOUNT.split(",");
                //assigning the left side of ","
                tempMoney = tempMoney[0];
                moneySpent = moneySpent + parseInt(tempMoney);
    
      })
      console.log(temp)
      setCurrentRecords(temp)
      setMoneySpentByContact(moneySpent)

    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleCurrentPage = e => {
    setCurrentPage(e.target.id);
  }

  return (
    <div class="">
      <TopNav searchBarVisibility={true} />

      <div class=" page-body-wrapper">
        <Nav />
        <div class="main-panel">
          <div class="content-wrapper">
          <div className="col-12 mb-3">
                <button onClick={handleCurrentPage} id="sales" className="col-3 shadow btn btn-primary">Sales</button>
                <button onClick={handleCurrentPage} id="contact" className="col-3 bg-white shadow btn ml-1">Contact</button>
                {/* <button className="col-3"></button>
                <button className="col-3"></button> */}
              </div>
          {currentPage == "sales" ? <Sales moneySpent={moneySpentByContact}/>: <></>}
          {currentPage == "contact" ? 
          <>
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
                            value={currentContact.EMAIL}
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
                            value={currentContact["FIRST NAME"] + " " + currentContact["LAST NAME"]}
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
                            type="text"
                            class="form-control"
                            id="exampleInputPassword2"
                            value={currentContact.PHONE}
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
                            value={currentContact["STREET"] + ", " + currentContact["CITY"] + ", " + currentContact["COUNTRY"]}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 " style={{ zIndex: "999" }}>
                <div class="card overflow-x-hidden">
                  <div class="card-body">
                    <table class="table ">
                      <thead>
                        <tr>
                          <th>
                            <b>Date</b>
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
                        {currentRecords.map(item => {
                          return (
                            <tr>
                            {/* <td class="text-primary">{item.data.item.}</td> */}
                          <td>{item.data.item["EVENT DATE"]}</td>
                            <td>{item.data.item.PRODUCT}</td>
                            <td>{item.data.item.AMOUNT}</td>
                          </tr>
                          );
                        })}
                      
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
         </>
        :<></>}
          </div>
        </div>
      </div>
    </div>
  );
}
