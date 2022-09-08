class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render :index
  end

  def show
    @category = Category.includes(:stories).find(params[:id])
    render :show
  end
end
