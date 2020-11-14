Rails.application.routes.draw do
  devise_for :accounts

  get '/browse' => "browse#browse", as: :browse
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'public#home'

  
end
