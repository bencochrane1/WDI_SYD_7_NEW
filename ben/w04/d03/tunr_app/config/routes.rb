Rails.application.routes.draw do

  get 'songs/index'

  get 'songs/edit'

  get 'songs/show'

  get 'songs/new'

  get 'mixtapes/index'

  devise_for :users

  root "welcome#index"

  resources :artists, :mixtapes, :songs
  
end
