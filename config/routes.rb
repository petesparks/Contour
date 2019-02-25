Rails.application.routes.draw do
  root to: 'pages#home'
  get 'home', to: 'pages#home'
  get 'about', to: 'pages#about', as: :about
  get 'services', to: 'pages#services', as: :services
  get 'projects', to: 'pages#projects', as: :projects
  get 'traditional', to: 'pages#traditional', as: :traditional
  get 'soilrecovery', to: 'pages#soilrecovery', as: :soilrecovery
  get 'projects/soilrecovery/horsham', to: 'pages#horsham'
  get 'projects/soilrecovery/radlett', to: 'pages#radlett'
  get 'projects/soilrecovery/leicester', to: 'pages#leicester'
  get 'projects/traditional/portfolio', to: 'pages#portfolio'
  get 'projects/bunkers', to: 'pages#bunkers'
  get 'contact', to: 'pages#contact', as: :contact

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
