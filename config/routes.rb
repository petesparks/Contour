Rails.application.routes.draw do
  get 'home', to: 'pages#home', as: :home
  get 'services', to: 'pages#services', as: :services
  get 'projects', to: 'pages#projects', as: :projects
  get 'about', to: 'pages#about', as: :about
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
