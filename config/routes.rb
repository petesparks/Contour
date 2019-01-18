Rails.application.routes.draw do
  root to: 'pages#home'
  get 'home', to: 'pages#home'
  get 'services', to: 'pages#services', as: :services
  get 'projects', to: 'pages#projects', as: :projects
  get 'projects/soilrecovery/horsham', to: 'pages#horsham'
  get 'projects/soilrecovery/radlett', to: 'pages#radlett'
  get 'projects/soilrecovery/leicester', to: 'pages#leicester'
  get 'projects/traditional/balfron', to: 'pages#balfron'
  get 'projects/bunkers', to: 'pages#bunkers'
  get 'about', to: 'pages#about', as: :about

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
