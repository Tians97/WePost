class Api::StoriesController < ApplicationController
  def index
    @stories = Story.all
    render :index
  end

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: :422
  end

  def show

  end

  def update
    @story = Story.find(params[:id])
    if @story.author_id == current_user.id
      if @story.update(story_params)
        render :show
        return
      else
        render json: @story.errors.full_messages, status: 422
        return
      end
    end
  end

  def destroy
    @story = Story.find(params[:id])
    if @story.author_id == current_user.id
      @story.destroy
    end
  end

  private
  
  def story_params
    params.require(:story).permit(:title, :body, :category_id)
  end

  
end
