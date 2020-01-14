import React, { useState } from "react";
import AuthForms from "../../components/AuthForms/AuthForms";

const HomePage = () => {
  const [user, setUser] = useState(0);

  const getUser = (userId) =>{
    setUser(userId)
  }
  
  return (
  <>
    <AuthForms setLoggedUser={getUser}/>
  </>
  )
  
};

export default HomePage;
