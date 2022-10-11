Rails.application.routes.draw do
  resources :reviews
  resources :players
  resources :tennis_clubs
  post "/signup", to: "players#create"
  get "/me", to: "players#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/reviews", to: "reviews#index"
  post "/reviews", to: "reviews#create"
  get "/tennis_clubs", to: "tennis_clubs#index"
  post "/tennis_clubs", to: "tennis_clubs#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
