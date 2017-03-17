class Post < ApplicationRecord
	validates :title, presence: { message: "タイトルをいれないの？？"}
end
