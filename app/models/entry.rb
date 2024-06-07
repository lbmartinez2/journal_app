class Entry < ApplicationRecord
    belongs_to :user
    validates :content, length: {minimum: 5}
    validates :title, presence: true
end
