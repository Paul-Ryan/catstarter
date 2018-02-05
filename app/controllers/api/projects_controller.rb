class Api::ProjectsController < ApplicationController
  def index
    # trying to figure out how to get authors into state
    # @projects = Project.all
    @projects = Project.all.includes(:author)
    render '/api/projects/index'
  end

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id

    if @project.save
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find_by(id: params[:id])
    if @project
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 404
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    if @project
      @project.destroy
      render json: {}, status: 200
    else
      render json: ['couldn\'t find project'], status: 404
    end
  end

  private

# try without author id. I don't think it's needed bc controller assigns it
  def project_params
    params.require(:project).permit(
      :title,
      :blurb,
      :description,
      :author_id,
      :due_date,
      :funding_goal,
      :image_url
    )
  end
end


# api_projects GET    /api/projects(.:format)     api/projects#index {:format=>:json}
#              POST   /api/projects(.:format)     api/projects#create {:format=>:json}
#  api_project GET    /api/projects/:id(.:format) api/projects#show {:format=>:json}
#              PATCH  /api/projects/:id(.:format) api/projects#update {:format=>:json}
#              PUT    /api/projects/:id(.:format) api/projects#update {:format=>:json}
#              DELETE /api/projects/:id(.:format) api/projects#destroy {:format=>:json}
