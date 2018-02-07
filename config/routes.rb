Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:index, :create, :show, :update, :destroy] do
      resources :rewards, only: [:create]
    end
    resources :pledges, only: [:create, :destroy]
    resources :rewards, only: [:destroy]
  end

  root "static_pages#root"
end
