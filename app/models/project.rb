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

  # def current_funding()
  #
  # end

  # def days_left()
  #
  # end
end
