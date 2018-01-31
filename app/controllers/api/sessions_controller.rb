class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    p @user.username
    if @user
      login(@user)
      redirect_to root_url
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}, status: 200
    else
      render json: ["You're not signed in"], status: 404
    end
  end
end
