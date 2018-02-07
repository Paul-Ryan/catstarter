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

require 'test_helper'

class PledgeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
