# == Schema Information
#
# Table name: rewards
#
#  id                    :integer          not null, primary key
#  project_id            :integer          not null
#  title                 :string           not null
#  description           :text             not null
#  reward_minimum_amount :integer          not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Reward < ApplicationRecord
  validates :title, :project_id, :description, :reward_minimum_amount, presence: true

  belongs_to :project
end
