class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create

    @user = User.new(user_params)
    if @user
      sign_in(@user)
      render :show
    else
      render json: @user.errors_full_messages, status:422
    end
  end

  def show

  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
