
json.extract! @story, :id, :title, :body, :category_id, :updated_at
        json.author @story.author.username
        json.category @story.category.title
        json.photoUrl @story.photo.url