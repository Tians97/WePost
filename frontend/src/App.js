import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect} from 'react-router-dom';
import UserPage from "./components/Navbar/UserPage";
import WelcomePage from "./components/Navbar/WelcomePage";
import Banner from "./components/Navbar/WelcomePage/Banner";
import CategoryBar from "./components/CategoryBar";
import StoryIndex from "./components/Story/StoryIndex/StoryIndex";
import StoryShow from "./components/Story/StoryShow/StoryShow";
import UserStoryIndex from "./components/Story/UserStoryIndex";
import StoryForm from "./components/Story/StoryForm/StoryForm";
import EditStoryForm from "./components/Story/StoryForm/EditStoryForm";
import Bookmark from "./components/BookMark/Bookmark";
import WelcomeStoryShow from "./components/Story/StoryShow/WelcomeStoryShow";

function App() {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        
        <Switch>
          <Route exact path="/">
            <UserPage user={sessionUser} />
            <CategoryBar />
            <StoryIndex/>
          </Route>
          <Route exact path="/categories/:categoryId">
            <UserPage user={sessionUser} />
            <CategoryBar />
            <StoryIndex />
          </Route>
          <Route exact path="/stories/new_story">
            <UserPage user={sessionUser} />
            <StoryForm user={sessionUser}/>
          </Route>
          <Route exact path="/stories/:storyId">
            <UserPage user={sessionUser} />
            <StoryShow/>
          </Route>
          <Route exact path="/stories/:storyId/edit">
            <UserPage user={sessionUser} />
            <EditStoryForm/>
          </Route>
          <Route exact path="/users/:userId/bookmarks">
            <UserPage user={sessionUser} />
            <Bookmark/>
          </Route>
          
          <Route path="/users/:userId/stories">
            <UserPage user={sessionUser} />
            <UserStoryIndex />
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
            <StoryIndex/>
          </Route>
          <Route exact path="/stories/:storyId">
            <WelcomeStoryShow />
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