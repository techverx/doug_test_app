AngularLogin::Application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
        devise_for :users, skip: :all
        resources :users , :only => ['authenticate'] do
          collection do
            post '/authenticate' => 'users#authenticate'
          end
        end
        resources :todos
    end
  end
  
  root :to => "application#index"
  
end
