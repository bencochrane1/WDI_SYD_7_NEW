Rails.application.routes.draw do

  get 'artists/index'

  get 'artists/edit'

  get 'artists/show'

  get 'artists/new'

  get 'artists/_form'

  get 'songs/index'

  get 'songs/edit'

  get 'songs/show'

  get 'songs/new'

  get 'mixtapes/index'

  devise_for :users

  root "welcome#index"

  resources :artists, :mixtapes, :songs
  
end
