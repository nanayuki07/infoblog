Rails.application.routes.draw do
  devise_for :users
  get '/posts/new' => 'posts#new'
	 post '/posts' => 'posts#create', as: :posts
	  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root 'posts#index'
	get '/posts/:id' => 'posts#show', as: 'post'
	get '/post/top' => 'posts#top'
end

