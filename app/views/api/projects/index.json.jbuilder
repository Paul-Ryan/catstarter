@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :blurb, :description, :author_id, :due_date, :funding_goal, :image_url
  end
end
