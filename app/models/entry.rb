class Entry < ApplicationRecord
    belongs_to :user
    validates :content, length: {minimum: 5}
    validates :title, presence: true

    def formatted_creation_date
        created_at.in_time_zone('Asia/Manila').strftime("%B %d, %Y %H:%M %Z")
    end
end
