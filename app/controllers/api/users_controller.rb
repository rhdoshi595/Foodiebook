class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user
      sign_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status:422
    end
  end

  def show

  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :password,
      :first_name,
      :last_name,
      :gender,
      :birthday
    )
  end
end
