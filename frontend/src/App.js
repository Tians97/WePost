import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
// // import LoginFormPage from "./components/LoginFormPage";
// import Navigation from "./components/Navigation";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
    </>
    // <>
    //   <Navigation />
    //     <Switch>
    //       {/* <Route path="/login" >
    //         <LoginFormPage />
    //       </Route> */}
    //       <Route path="/signup">
    //         <SignupFormPage />
    //       </Route>
    //     </Switch>
    // </>
  );
}

export default App;