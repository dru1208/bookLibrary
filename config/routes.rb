Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/books', to: 'books#index'
  post '/books', to: 'books#update'

  get '*page', to: 'static#index', contraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
