Rails.application.routes.draw do
  # resources :reviews
  # resources :players
  # resources :tennis_clubs

  get "/me", to: "players#show"
  get "/reviews", to: "reviews#index"
  get "/reviews/:id", to: "reviews#show"
  get "/tennis_clubs", to: "tennis_clubs#index"
  get "/tennis_clubs/:id", to: "tennis_clubs#show"
  get "/players", to: "players#index"

  post "/signup", to: "players#create"
  post "/login", to: "sessions#create"
  post "/reviews", to: "reviews#create"
  post "/tennis_clubs", to: "tennis_clubs#create"

  patch "/reviews/:id", to: "reviews#update"

  delete "/logout", to: "sessions#destroy"
  delete "/reviews/:id", to: "reviews#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
