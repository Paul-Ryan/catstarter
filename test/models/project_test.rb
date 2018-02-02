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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
