import React from 'react'
import { Media, Button } from 'reactstrap'
import NavItem from 'reactstrap/lib/NavItem';
import nurse1 from '../nurse1.png'
import nurse2 from '../nurse2.png'
import nurse3 from '../nurse3.png'
import dummyPhoto from '../dummyPhoto.png'

let nurse = "";

const ListAppointments = ({ appointments, onDelete }) => {
  const handleDelete = (event) => {
    onDelete(event.target.id);
  }


  return (
    
    <ul>
      {appointments.map((item) => {

        if(item.nurseName === "Dominic") {
          nurse=nurse3;
        } else if (item.nurseName === "Celia") {
          nurse= nurse2;
        } else if (item.nurseName === "Hanan"){
        nurse = nurse1;
        } else {
          nurse = dummyPhoto;
        }

        return (
          <li className="p-1 card-border shadow-sm p-3 mb-3 bg-white rounded" style={{ "borderRadius": "0.25rem" }} key={item.id}>
            <Media>
              <Media left top>
                <Button color="danger" className="mr-3 delete-btn"><i id={item.id} onClick={handleDelete} className="fas fa-times"></i></Button>
              </Media>
              <Media body>
                <Media heading className="m-0">
                  {item.nurseName}
                  <p><img src={nurse} height="60" width="60" className="d-inline-block align-center" /></p>
                </Media>
             
              <p><span className="font-weight-bold">Speciality:</span> {item.aptNotes}</p>
                <p className="mt-4 mb-0"><span className="font-weight-bold">Date:</span> {item.aptDate} </p>
                <p className="mb-0"><span className="font-weight-bold">Time Slot:</span> {(new Date(item.aptDate)).toUTCString()}</p>
              </Media>
            </Media>
          </li>
        )
      })}
    </ul>
  );
}

export default ListAppointments
