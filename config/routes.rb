Rails.application.routes.draw do
  namespace :api do
    get 'stories/index'
    get 'stories/create'
    get 'stories/show'
    get 'stories/destroy'
    get 'stories/update'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do

    resources :users, only: :create do
      resources :stories, only:[:index]
    end

    resource :session, only: [:show, :create, :destroy]
    resources :categories, only: [:index]
    resources :stories, only: [:index, :create, :show, :destroy, :update]
    resources :reviews, only: [:index, :create, :update, :destroy, :show]

    get "/categories/:category_id", to: "stories#index"
  end
  
  get '*path', to: "static_pages#frontend_index"
end
