import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../../firebase";
import Nav from "../Nav/Nav";
import TopNav from "../Nav/TopNav";

export default function AllContact() {


  const [elopageRecords, setElopageRecords] = useState([])
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    fetchAllContacts()
  }, [])

  const fetchAllContacts = () => {
    firestore.collection("elopage_records").where("item.EMAIL", "!=", "").limit(20)
    .orderBy("item.EMAIL", "desc")
    .get()
    .then(docs => {
      let temp = [];
      let emailArrayForComparison = [];

      docs.forEach(doc => {

        if(!emailArrayForComparison.includes(doc.data().item.EMAIL)){
          const obj = {
            data: doc.data(),
            id: doc.id
          }

          //pushing object for display
          temp.push(obj)
          
          //pushing value for comparison
          emailArrayForComparison.push(doc.data().item.EMAIL)
        }
    
      })
      console.log(temp)
      setElopageRecords(temp)

    })
    .catch(err => {
      console.log(err)
    })
  }

  const searchFunctionaltiy = e => {

    const query = e.target.value;

    if(query.length > 2){

      let timeout = 0;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {

 
      setSearching(true)
      firestore.collection("elopage_records").where("item.EMAIL", ">=", query)
      .limit(20)
      .get()
      .then(docs => {
        let temp = [];
        let emailArrayForComparison = [];
  
        docs.forEach(doc => {
  
          if(!emailArrayForComparison.includes(doc.data().item.EMAIL)){
            const obj = {
              data: doc.data(),
              id: doc.id
            }
            temp.push(obj)
            emailArrayForComparison.push(doc.data().item.EMAIL)
          }
      
        })
        console.log(temp)
        setElopageRecords(temp)
        setSearching(false)
      })
      .catch(err => {
        console.log(err)
      })
    }, 500)
    }
  }
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
              <input
                style={{ zIndex: "999" }}
              
              onChange={searchFunctionaltiy} type="text" class="form-control col-12 mt-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search By Email" />

            {searching ? <div className="col-12 alert alert-info text-center">
                Searching
            </div>: 
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
                        
                             {/* <th>
                               <b>Action</b>
                             </th> */}
                           </tr>
                         </thead>
                         <tbody>
                           {elopageRecords.map(item => {
                             return(
                               <tr>
                                 <Link to={{
                                   pathname: "/dashboard/single-contact",
                                   state: {
                                     contact: item.data.item
                                   }
                                 }}>
                               <td class="text-primary">{item.data.item["FIRST NAME"] + " " + item.data.item["LAST NAME"]}</td>
                             </Link>
                             <td>{item.data.item.EMAIL}</td>
                               {/* <td>
                                 <button class="btn badge badge-danger">
                                   Remove
                                 </button>
                               </td> */}
                             </tr>
        
                             );
                           })}
           </tbody>
                       </table>
                     </div>
                   </div>
                 </div>
            
            }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
