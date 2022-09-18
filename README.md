# WePost | [LIVE](https://medium-wepost.herokuapp.com/)

WePost is a full-stack Medium clone where users can search, write stories, and write reviews, share with other people


## Technologies
- React
- Redux
- JavaScript
- Ruby on Rails
- AWS S3
- PostgreSQL
- Webpack

## Features

### User Authentication
- User authentication is implemented on both frontend and backend. Presence validations and uniqueness contraints (for username and email) are enforced in models and database. Upon a successful signup, the password is hashed using BCrypt and saved to the database as a password digest.
- Users can sign up, log in, and log out of their accounts; they will stay logged in after leaving the page.
- Error messages are displayed next to the respective fields in the signup form as part of frontend error-handling.


### Create Stories
- The story is viewable by the public
- After user log in, they can find their own story in the profile, and user can create, edit, and delete story


### Commenting on Stories
- Only logged in user can leave comments for a story, and they also can delete their comments


### Topics/Categories
- Each story will require to asign a category when they are created
- User can use category bar to select stories which related to their interested category


### Bookmark
- User can add their interested story in the bookmark
- User can also find their bookmarked story in the bookmark section.
- The bookmark is delectable 


### Search
- In the search bar, user can search stories by story's title
