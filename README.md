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

![User](https://github.com/Tians97/WePost/blob/5a25d423a421698ceb365f3d7bfd63cdc123c7ef/gif/user.gif)


### Stories (Create, Read, Update, Delete)
- The story is viewable by the public
- After user log in, they can find their own story in the profile, and user can create, edit, and delete story

```javascript
// story create form submit
function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('story[title]', story.title);
        formData.append('story[body]', story.body);
        formData.append('story[categoryId]', category)
        formData.append('story[photo]', image)
    }
```

```javascript
// story edit form submit
function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('story[title]', story.title);
        formData.append('story[body]', story.body);
        formData.append('story[categoryId]', category)
        if(newImage){
            formData.append('story[photo]', newImage)
        }
        dispatch(updateStory(formData, storyId))
        history.push(`/stories/${storyId}`)
    }
```

![Story](https://github.com/Tians97/WePost/blob/5a25d423a421698ceb365f3d7bfd63cdc123c7ef/gif/story.gif)


### Commenting on Stories (Create, Read, Delete)
- Only logged in user can leave comments for a story, and they also can delete their comments

![review](https://github.com/Tians97/WePost/blob/5a25d423a421698ceb365f3d7bfd63cdc123c7ef/gif/review.gif)


### Bookmark (Create, Read, Delete)
- User can add their interested story in the bookmark
- User can also find their bookmarked story in the bookmark section.
- The bookmark is delectable.

![bookmark](https://github.com/Tians97/WePost/blob/5a25d423a421698ceb365f3d7bfd63cdc123c7ef/gif/bookmark.gif)


### Topics/Categories
- Each story will require to asign a category when they are created
- User can use category bar to select stories which related to their interested category

![category](https://github.com/Tians97/WePost/blob/5a25d423a421698ceb365f3d7bfd63cdc123c7ef/gif/category.gif)


### Search
- In the search bar, user can search stories by story's title

![search](https://github.com/Tians97/WePost/blob/5a25d423a421698ceb365f3d7bfd63cdc123c7ef/gif/search.gif)
