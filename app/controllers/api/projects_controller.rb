class Api::ProjectsController < ApplicationController
  def index
    if params[:search]
      @projects = Projects.where("lower(title) LIKE ?", "%" + params[:search].downcase.split("").join("%") + "%")
    else
      @projects = Project.all.includes(:author)
    end
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
