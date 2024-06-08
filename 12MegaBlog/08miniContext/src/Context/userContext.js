import React from "react";

//createContext() is a method
//Created a Context
  const UserContext = React.createContext();

  export default UserContext;

//Now, we created context provider below inside which all the component has the a access of global methood createContext()  or UserContext variavble.
{/* <UserContext>

  <Login /> 
  <Card>
     <data />
  </Card>
  
<UserContext /> */}
