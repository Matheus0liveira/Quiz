import React, { createContext, useState } from 'react';


export const UserContext = createContext();


const UserProvider = ({ children }) => {

  const [user, setUser] = useState(
    {
      name: '',
      category: '',
      dificulty: ''
    }
  );



  return (

    <UserContext.Provider value={{ user, setUser }}>

      {children}


    </UserContext.Provider>
  );
};


export default UserProvider;