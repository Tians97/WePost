@bookmarks.each do |bookmark|
    json.set! bookmark.id do 
        json.extract! bookmark, :id, :user_id, :story_id
        json.story do
            json.extract! bookmark.story, :id, :title, :body, :category_id, :updated_at
            json.extract! bookmark.story.author, :username
            json.bookmarkId bookmark.id
            json.photoUrl bookmark.story.photo.url
        end
    end
end