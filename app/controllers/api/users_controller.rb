class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user
      sign_in(@user)
      # if User.find_by(email: 'jimmy_junior@pizza.com')
      #   Friendship.create(sender_id: User.find_by(email: 'jimmy_junior@pizza.com').id,
      #                     replier_id: current_user.id,
      #                     status: 'unanswered')
      # end
      render :show
    else
      render json: @user.errors.full_messages, status:422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["No user found"], status: 404
    end
  end

  def update
    @user = current_user
    if @user
      if @user.update(user_params)
        render :show
      else
        render json: @user.errors, status: 400
      end
    else
      render json: ["No user found"], status: 404
    end
  end

  def index
    @users = User.search(params[:search])
    render :index
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :password,
      :first_name,
      :last_name,
      :gender,
      :birthday,
      :profileavatar,
      :coverimage,
      :workplace,
      :school,
      :current_city,
      :hometown,
      :relationship_status
    )
  end
end
