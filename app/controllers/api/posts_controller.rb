class Api::PostsController < ApplicationController

  def index
    if params.has_key?(:user_id)
      user = User.find(params[:user_id])
      user_posts = user.posts
      received_posts = user.received_posts
      @posts = user_posts + received_posts
      render :index
    else
      @posts = Post.where(user_id: Friendship.active_friendships(current_user)).includes(:user, :receiver, {comments: [:user]}).order("created_at DESC")
      render :index
    end
  end

  def create
    @post = current_user.posts.new(post_params)
    if params.has_key?(:user_id)
      unless current_user.id == params[:user_id].to_i
        @post.receiver_id = params[:user_id]
      end
    end
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: ["no post with that id was found"], status: 404
    end
  end

  def update
    @post = Post.find(params[:id])
    if current_user.id == @post.user_id && @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render json: ['deleted post']
    else
      render json: @post.errors.full_messages, status:422
    end
  end



  private

  def post_params
    params.require(:post).permit(:body, :image)
  end

end
