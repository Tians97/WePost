@journals.each do |journal|
    json.set! journal.id do 
        json.extract! journal, :id, :title, :body, :category_id, :updated_at
        json.author journal.author.username
        json.category journal.category.title
    end
end