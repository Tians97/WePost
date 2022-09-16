class Bookmark < ApplicationRecord
    validates :user_id, :story_id, presence: true
    validates :user_id, uniqueness: { scope: :story_id }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :story,
        primary_key: :id,
        foreign_key: :story_id,
        class_name: :Story
end
