@stories.each do |story|
    json.set! story.id do 
        json.extract! story, :id, :title, :body, :category_id, :updated_at
        json.author story.author.username
        json.category story.category.title
    end
end