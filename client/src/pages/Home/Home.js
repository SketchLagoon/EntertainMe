import React, { useState } from "react";

import AuthForms from "../../components/AuthForms/AuthForms";


const HomePage = () => {
  let userIdentification = sessionStorage.getItem('userId');
  const [user, setUser] = useState(userIdentification);

  const getUser = (userId) =>{
    sessionStorage.setItem('userId', userId);
    setUser(userId)
  }

  return (
  <>
    {user === undefined ? <AuthForms setLoggedUser={getUser}/> : <h1>favs</h1>}
  </>
  )
  
};

export default HomePage;
