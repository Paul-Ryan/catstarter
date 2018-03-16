# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  blurb        :string           not null
#  description  :text             not null
#  author_id    :integer          not null
#  due_date     :date             not null
#  funding_goal :integer          not null
#  image_url    :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Project < ApplicationRecord
  validates :title, :blurb, :description, :author_id, :due_date, :funding_goal, presence: true;
  validates :title, uniqueness: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :rewards
  has_many :pledges

  # has_many :category_keys,
  #   primary_key: :id,
  #   foreign_key: :project_id,
  #   class_name: :Category
  has_many :categories
  has_many :category_names, 
    through: :categories,
    source: :category_name

  # def current_funding()
  #
  # end

  # def days_left()
  #
  # end

  def self.search(search)
    if search == ""
      results = Project.all
    else
      search = '%' + search.downcase + '%'
      results = Project.where("
        lower(title) LIKE ? or
        lower(blurb) LIKE ? or
        lower(description) LIKE ?",
        "%#{search}%",
        "%#{search}%",
        "%#{search}%")
    end

  results
  end
end
