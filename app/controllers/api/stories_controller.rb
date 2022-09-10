class Api::StoriesController < ApplicationController
  def index
    if params[:category_id]
      @stories = Story.where(category_id: params[:category_id])
      # debugger
      render :index
    else
      @stories = Story.all
      render :index
    end
  end

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
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
