Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:index, :create, :show, :update, :destroy] do
      resources :rewards, only: [:create]
      resources :pledges, only: [:create]
      get "search", on: :collection
    end
    resources :categories, only: [:index, :show]
    resources :pledges, only: [:destroy]
    resources :rewards, only: [:destroy]
  end

end
