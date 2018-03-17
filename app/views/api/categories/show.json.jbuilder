json.category do
  json.set! @category.id do
    json.extract! @category, :id, :name
  end
end

json.project do
  @category.projects.each do |project|
    json.set! project.id do
      json.extract! project, :id, :title, :due_date, :image_url, :funding_goal
      json.author project.author.username
    end
  end
end
