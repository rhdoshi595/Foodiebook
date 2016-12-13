Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :friendships, only:[:create, :index]
      resources :posts, only: [:create, :index]
    end

    resources :friendships, only: [:update, :destroy]

    resources :posts, only: [:create, :show, :update, :destroy, :index]

    resource :session, only: [:create, :destroy]
  end

end
