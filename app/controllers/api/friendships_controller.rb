class Api::FriendshipsController < ApplicationController
  def index
    if(params[:user_id])
      render json: Friendship.find_friendship(current_user.id, params[:user_id])
    else
      @friendships = Friendship.where("status = 'unanswered' AND replier_id = ?", current_user.id)
      @friendships.includes(:sender)
      render :index
    end
  end

  def show
    @friendship = Friendship.find(params[:id])
    render json: @friendship
  end

  def create
    if params.has_key?(:user_id)
      if current_user
        @friendship = Friendship.new(sender_id: current_user.id, replier_id: params[:user_id], status: "unanswered")
        if Friendship.friend_status(current_user.id, params[:user_id])
          render json: ["Already friends"], status: 404
        else
          if @friendship.save
            render json: @friendship
          else
            render json: @friendship.errors
          end
        end
      else
        render json: ["Not logged in!"], status: 403
      end
    else
      render json: ["Invalid user!"], status: 404
    end
  end

  def update
    @friendship = Friendship.find_by(id: params[:id])
    if @friendship
      if @friendship[:replier_id] == current_user.id
        if @friendship.update(status:"friended")
          render json: @friendship
        else
          render json: @friendship.errors, status: 404
        end
      else
        render json: ["Waiting on replier"], status: 403
      end
    else
      render json: ["No friendship found"], status: 404
    end
  end

  def destroy
    @friendship = Friendship.find_by(id: params[:id])
    if @friendship
      if @friendship.delete
        render json: {}
      else
        render json: @friendship.errors, status: 404
      end
    else
      render json: ["No friendship found"], status: 404
    end
  end

end
