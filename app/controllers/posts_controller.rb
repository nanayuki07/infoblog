class PostsController < ApplicationController
   before_action :authenticate_user!,only: [:new,:create]
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

#page.htmlっていうページへのリンク先を作りたい場合
def page
  render :layout => false
end

def page2
  render :layout => false
end

def song
  render :layout => false
end

end
