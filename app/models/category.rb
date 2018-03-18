# == Schema Information
#
# Table name: categories
#
#  id          :integer          not null, primary key
#  project_id  :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Category < ApplicationRecord
  validates :project_id, :category_id, presence: true

  belongs_to :project
  belongs_to :category_name,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :CategoryName
end
