Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:index, :create, :show, :update, :destroy]
    resources :pledges, only: [:create, :destroy]
  end

  root "static_pages#root"
end
