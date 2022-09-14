class Api::ReviewsController < ApplicationController

    # before_action :require_logged_in
    wrap_parameters include: Review.attribute_names + [:reviewId]
    def show
        @review = Review.find_by(story_id: params[:id], author_id: params[:author_id])
        if @review
            render :show
        else
            render json: {}
        end
    end

    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)
        # debugger
        if @review.save!
            render :show
        else
            render json: { errors: @review.errors.full_messages}, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: {errors: @review.errors.full_messages}, status: 422
        end
    end

    def destroy
        @review = current_user.reviews.find(params[:id])
        if !@review
            render json: {message: 'Unauthorized'}, status: 401
            return
        end
        @review.destroy
        render :show
    end

    private

    def review_params
        params.require(:review).permit(:body, :story_id, :author_id)
    end
end
