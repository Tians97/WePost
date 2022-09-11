import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect} from 'react-router-dom';
import UserPage from "./components/Navbar/UserPage";
import WelcomePage from "./components/Navbar/WelcomePage";
import Banner from "./components/Navbar/WelcomePage/Banner";
import CategoryBar from "./components/CategoryBar";
import StoryIndex from "./components/Story/StoryIndex/StoryIndex";
import StoryShow from "./components/Story/StoryShow/StoryShow";

function App() {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <UserPage user={sessionUser} />
        <Switch>
          <Route exact path="/">
            <CategoryBar />
            <StoryIndex/>
          </Route>
          <Route path="/stories/:storyId" component={StoryShow}/>
          <Route path="/categories/:categoryId">
            <CategoryBar />
            <StoryIndex />
          </Route>
          
        </Switch>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <WelcomePage />
        <Switch>
          <Route exact path="/">
            <Banner/>
            <StoryIndex />
          </Route>
        </Switch>
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