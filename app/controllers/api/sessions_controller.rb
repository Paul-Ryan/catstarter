class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      [:params][:username],
      [:params][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ["You're not signed in"], status: 404
    end
  end
end
