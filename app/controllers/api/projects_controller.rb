class Api::ProjectsController < ApplicationController
  before_action :set_project, only: [:show]

  def index
    render json: Project.all
  end

  def show
    render json: @project
  end

  private
    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:name, :description, :category, :image, :link, :imagea, :imageb, :imagec, :imaged, :imagee, :imagef, :linka)
    end
end