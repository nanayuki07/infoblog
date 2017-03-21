Rails.application.routes.draw do
  devise_for :users
  get '/posts/new' => 'posts#new'
	 post '/posts' => 'posts#create', as: :posts
	  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root 'posts#index'
	get '/posts/:id' => 'posts#show', as: 'post'
	get '/post/top' => 'posts#top'

	##page.htmlをリンク先に指定したい場合
	get "/post/page" => "posts#page"
end

