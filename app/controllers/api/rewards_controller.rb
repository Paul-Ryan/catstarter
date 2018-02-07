class Api::RewardsController < ApplicationController

  # def index
  #   @rewards = Reward.all
  # end
  #
  # def show
  #   @reward = Reward.find_by(id: params[:id])
  #   if @reward
  #     render json: 'api/reward/show'
  #   else
  #     render json: @reward.errors.full_messages, status: 404
  #
  #   end
  # end

  def create
    @reward = Reward.find_by(reward_params)
    @reward.project_id = params[:project_id]

    if @reward.save
      render json: 'api/reward/show'
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  # def update
  #   @reward = Reward.find(params[:id])
  #   if @reward.update(project_params)
  #     render 'api/rewards/show'
  #   else
  #     render json: @reward.errors.full_messages, status: 422
  #   end
  # end

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
