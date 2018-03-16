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
    in: %w(Music Games Food Arts Publishing Crafts Film Technology Design),
    message: "is not a valid category"
  }, presence: true

  has_many :category_joins,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category
end
