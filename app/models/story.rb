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

    has_many :stories,
        primary_key: :id,
        foreign_key: :story_id,
        class_name: :Review,
        dependent: :destroy

    has_one_attached :photo

    has_many :bookmarks,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Bookmark

end
