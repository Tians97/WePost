class Api::StoriesController < ApplicationController
  def index
    if params[:category_id]
      @stories = Story.where(category_id: params[:category_id])
      # debugger
      render :index
    elsif params[:user_id]
      @stories = Story.where(author_id: params[:user_id])
    else
      @stories = Story.all
      render :index
    end
  end

  def create
    @story = Story.new(story_params)
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def show
    @story = Story.find(params[:id])
    render :show
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
    params.require(:story).permit(:title, :body, :category_id, :photo)
  end

  
end
