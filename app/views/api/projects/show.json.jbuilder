json.extract! @project, :id, :title, :blurb, :description
json.authorId @project.author_id
json.dueDate @project.due_date
json.fundingGoal @project.funding_goal
json.imageUrl @project.image_url
json.author do
  json.extract! @project.author, :username
end
