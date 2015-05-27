class Api::V1::UsersController < ApplicationController
  
  def authenticate
    
    user = User.find_for_database_authentication(:email => params[:email])
    
    if user.nil?
      render :json=> {
        :message => "Incorrect Email/Password"
      }, :status => 400 
      return
    end
    
    if !user.valid_password? params[:password]
      render :json => {
        :message => "Incorrect Email/Password"
      }, :status => 400
      return
    end
    
    user.api_token = SecureRandom.uuid
    user.save
    
    @user = user
    sign_in @user
    
  end
  
end
