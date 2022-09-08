class Story < ApplicationRecord
    validates :title, presence:true, uniqueness:true
    validates :body, :author_id, :category_id, presence:true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :category,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :Category
end
