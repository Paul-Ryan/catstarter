class Api::CategoriesController < ApplicationController
  def index
    @categories = CategoryName.all
    render 'api/categories/index'
  end

  def show
    @category = CategoryName.find(params[:id])
    render 'api/categories/show'
  end
end
