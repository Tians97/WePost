import React from "react";
import { useSelector } from "react-redux";
import UserPage from "./components/Navbar/UserPage";
import WelcomePage from "./components/Navbar/WelcomePage";
import CategoryBar from "./components/CategoryBar";
import StoryIndex from "./components/Story";

function App() {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <UserPage user={sessionUser} />
        <CategoryBar/>
        <StoryIndex/>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <WelcomePage />
      </>
    )

  }
  return (
    <>
      {sessionLinks}
    </>
  )
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
}

export default App;