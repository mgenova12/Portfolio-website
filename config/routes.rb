Rails.application.routes.draw do
  root :to => 'pages#index'
  get '/portfolio' => 'pages#portfolio'
end
