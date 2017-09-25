json.array! @projects.each do |project|
  json.id project.id
  json.title project.title
  json.description project.description
end