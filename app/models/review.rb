class Review < ApplicationRecord
    validates :body, presence: true
    validates :story_id, presence:true
    validates :author_id, presence:true

    belongs_to :story,
        foreign_key: :story_id,
        class_name: :Story
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

end
