import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { firestore } from '../../../firebase';

export default function Sales(){

    
  const location = useLocation();
  const [currentContact, setCurrentContact] = useState(location.state.contact)
  const [currentRecords, setCurrentRecords] = useState([])

    useEffect(() => {
        getSpecificContactSales();
    }, [])

  const getSpecificContactSales = () => {
    firestore.collection("elopage_records").where("item.EMAIL", "==", currentContact.EMAIL)
    // .orderBy("item.EMAIL", "desc")
    .get()
    .then(docs => {
      let temp = [];

      docs.forEach(doc => {

          const obj = {
            data: doc.data(),
            id: doc.id
          }
          temp.push(obj)
    
      })
      console.log(temp)
      setCurrentRecords(temp)

    })
    .catch(err => {
      console.log(err)
    })
  }

    return(
        <div class="col-lg-12 " style={{ zIndex: "999" }}>
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
                  <th>
                    <b>Location</b>
                  </th>
                  <th>
                    <b>Status</b>
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
                    <td>{item.data.item.LOCATION}</td>
                    <td className={item.data.item.STATUS == "Successful" ? " text-success": " text-danger"}>{item.data.item.STATUS}</td>
                  </tr>
                  );
                })}
              
         </tbody>
            </table>
          </div>
        </div>
 
      </div>
    );
}