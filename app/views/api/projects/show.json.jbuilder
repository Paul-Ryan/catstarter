json.project do
  json.extract! @project, :id, :title, :blurb, :description
  json.authorId @project.author_id
  json.dueDate @project.due_date
  json.fundingGoal @project.funding_goal
  json.imageUrl @project.image_url
  json.author do
    json.extract! @project.author, :username
  end
  json.rewards @project.rewards.pluck(:id)
  json.pledges @project.pledges.pluck(:pledge_amount)
end

json.rewards do
  @project.rewards.each do |reward|
    json.set! reward.id do
      json.extract! reward, :title, :description, :reward_minimum_amount, :id, :project_id
    end
  end
end

json.pledges do
  @project.pledges.each do |pledge|
    json.set! pledge.id do
      json.extract! pledge, :user_id, :project_id, :id, :pledge_amount
    end
  end
end
