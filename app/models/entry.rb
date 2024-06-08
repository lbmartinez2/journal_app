class Entry < ApplicationRecord
    belongs_to :user
    validates :content, length: {minimum: 5}
    validates :title, presence: true

    def formatted_creation_date
        created_at.strftime("%B %d, %Y")
    end
end
