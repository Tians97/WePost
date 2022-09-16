class Api::BookmarksController < ApplicationController
  wrap_parameters include: Bookmark.attribute_names + [:user_id, :story_id]
  def index
    @bookmarks = current_user.bookmarks
    render :index
  end

  def create
    # debugger
    @bookmark = Bookmark.new(bookmark_params)
    if @bookmark.save
      render :show
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookmark = Bookmark.find(params[:id])
    unless @bookmark
      render json: { message: "Unauthorized" }, status: :unauthorized
      return
    end
    @bookmark.destroy
    render :show
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:user_id, :story_id)
  end

end
