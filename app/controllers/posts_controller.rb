class PostsController < ApplicationController
   before_action :authenticate_user!
  def new
  	@post = Post.new
  end

  def create 
  	@post = Post.new
  	@post.title = params[:title]
  	@post.body = params[:body]
  	if @post.save
  	   redirect_to posts_path
    else 
      render 'new'
    end
  end
def index
  @posts = Post.all.order("id DESC")
  
end
def show
@post = Post.find(params[:id])
end

def top
  
end
end
