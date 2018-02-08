# == Schema Information
#
# Table name: pledges
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  project_id    :integer          not null
#  pledge_amount :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Pledge < ApplicationRecord
  validates :user_id, :project_id, :pledge_amount, presence: true

  belongs_to :user
  belongs_to :project

end
