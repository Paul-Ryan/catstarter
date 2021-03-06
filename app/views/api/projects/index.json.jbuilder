@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title
    json.authorId project.author_id
    json.dueDate project.due_date
    json.imageUrl project.image_url
    json.fundingGoal project.funding_goal
    json.author do
      json.extract! project.author, :username
    end
    json.categories project.categories.pluck(:name)
    json.rewards project.rewards.pluck(:id)
    json.pledges project.pledges.pluck(:pledge_amount)
  end
end
