class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
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
      render json: @post
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
    params.require(:post).permit(:body)
  end

end
