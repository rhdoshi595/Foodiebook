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
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["No user found"], status: 404
    end
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
      :profile_img,
      :cover_img,
      :workplace,
      :school,
      :current_city,
      :hometown,
      :relationship_status
    )
  end
end
