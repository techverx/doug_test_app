class Api::V1::TodosController < ApplicationController
  before_filter :is_authenticated
  
  def index
    @todos = @user.todos
  end
  
  def show
    @todo = @user.todos.find(params[:id])
  end
  
  def create
    @todo = @user.todos.create(todo_params)
  end
  
  def update
    @todo = @user.todos.find(params[:id])
    @todo.update_attributes(todo_params)
  end
  
  def destroy
    @user.todos.find(params[:id]).destroy()
  end
  
  private 
  
  def todo_params
    params.require(:todo).permit(
      :description
    )
  end
  
end
