Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show] do
      resources :friendships, only: [:create, :index]
      resources :posts, only: [:create, :index]
    end

    resources :friendships, only: [:update, :destroy, :index]

    resources :posts, only: [:create, :show, :update, :destroy, :index] do
      resources :comments, only: [:index, :create]
      resources :likes, only: [:index, :create]
    end

    resources :comments, only: [:destroy]
    resources :likes, only: [:destroy]
    resource :session, only: [:create, :destroy]
  end

end
