Rails.application.routes.draw do
  root :to => 'pages#index'

  get '/portfolio' => 'portfolios#index'

  namespace :api do
    namespace :v1 do
      get '/projects' => 'projects#index'
    end
  end

end
