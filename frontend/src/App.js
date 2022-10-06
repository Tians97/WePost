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
import SearchBar from "./components/Search/SearchBar";
import { SearchIndex } from "./components/Search/SearchIndex";
import WelcomeStoryShow from "./components/Story/StoryShow/WelcomeStoryShow";
import BookMarkIndex from "./components/BookMark/BooMarkIndex";
import Errors from "./components/Error/Errors";

function App() {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <UserPage user={sessionUser} />
        <Switch>
          <Route exact path="/">
            
            <SearchBar/>
            <CategoryBar />
            <StoryIndex/>
          </Route>
          <Route exact path="/categories/:categoryId">
            <SearchBar/>
            <CategoryBar />
            <StoryIndex />
          </Route>
          <Route exact path="/stories/new_story">
            <StoryForm user={sessionUser}/>
          </Route>
          <Route exact path="/stories/:storyId">
            <StoryShow/>
          </Route>
          <Route exact path="/stories/:storyId/edit">
            <EditStoryForm/>
          </Route>
          <Route exact path="/users/:userId/bookmarks">
            <BookMarkIndex/>
          </Route>
          <Route exact path="/search/:query">
            <SearchBar />
            <SearchIndex/>
          </Route>

          <Route path="/users/:userId/stories">
            <UserStoryIndex />
          </Route>

          <Route path='/error'>
            <Errors/>
          </Route>

          <Route path="*">
            <SearchBar />
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
            <StoryIndex/>
          </Route>
          <Route exact path="/stories/:storyId">
            <WelcomeStoryShow />
          </Route>
          <Route path="*">
            <UserPage user={sessionUser} />
            <Banner />
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