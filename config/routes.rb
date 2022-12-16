Rails.application.routes.draw do
  # resources :reviews
  # resources :players
  # resources :tennis_clubs

  get "/me", to: "players#show"
  get "/reviews", to: "reviews#index"
  get "/reviews/:id", to: "reviews#show"
  get "/tennis_clubs", to: "tennis_clubs#index"
  get "/players", to: "players#index"
  get "/reviews/players/:atp_rating", to: "reviews#rating"

  post "/signup", to: "players#create"
  post "/login", to: "sessions#create"
  post "/reviews", to: "reviews#create"
  post "/tennis_clubs", to: "tennis_clubs#create"

  patch "/reviews/:id", to: "reviews#update"

  delete "/logout", to: "sessions#destroy"
  delete "/reviews/:id", to: "reviews#destroy"

  # # Make a custom route that will send us to an action that will render json of all the 
  # reviews for any player that has a rating above a given parameter. So if the number 4 is provided 
  # we will send back all the reviews written by players that have an ATP rating above 4. If that means 
  # no reviews are found we will return json with key message and value “No reviews found, better 
  # lower your standards!”

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
