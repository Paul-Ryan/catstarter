# == Schema Information
#
# Table name: category_names
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CategoryName < ApplicationRecord
  validates :name, inclusion: {
    in: %w(music games food arts publishing illustration film),
    message: "is not a valid category"
  }, presence: true

  has_many :categories,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category
end
