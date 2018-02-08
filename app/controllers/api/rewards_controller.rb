class Api::RewardsController < ApplicationController

  def create
    @reward = Reward.new(reward_params)

    if @reward.save
      render 'api/rewards/show'
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def destroy
    @reward = Reward.find(params[:id])
    @reward.destroy

    render json: @reward
  end

  private

  def reward_params
    params.require(:reward).permit(:project_id, :title, :description, :reward_minimum_amount)
  end
end
