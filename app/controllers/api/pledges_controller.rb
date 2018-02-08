class Api::PledgesController < ApplicationController
  def create
    @pledge = Pledge.new(pledge_params)
    @pledge.project_id = params[:project_id]
    @pledge.user_id = current_user.id

    if @pledge.save
      render 'api/pledges/show'
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  def destroy
    @pledge = Pledge.find(params[:id])
    @pledge.destroy

    render json: @pledge
  end

  private

  def pledge_params
    params.require(:pledge).permit(:pledge_amount)
  end
end
