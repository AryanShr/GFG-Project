import React, { useContext, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Doctor from './Doctor'
import Org from './Org'
import Patient from './Patient'

const Select = () => {
  const { currentUser } = useContext(AuthContext);
  const [role, setRole] = useState("Org");

  const handleSearch = () => {
    const colRef = collection(db, "users");
    const q = query(colRef, where("uid", "==", currentUser.uid + ""));
    onSnapshot(q, (data) => {
      setRole(data.docs.map((item) => { return item.data() })[0].role)
    })
  };
  return (
    <div className='home'>
      {handleSearch()}
      {role === "Doctor" && <Doctor />}
      {role === "Organization" && <Org />}
      {role === "Patient" && <Patient />}
    </div>
  )
}

export default Select