class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session, :if => Proc.new { |c| c.request.format == 'application/vnd.radd.v1' }
  
  def index
    
  end
  
  private
  
  def is_authenticated
    authenticate_token || render_unauthenticated
  end
  
  def render_unauthenticated 
    self.headers['WWW-Authenticate'] = 'Token realm="Application"'
    render json: {}, status: 401
  end
  
  def authenticate_token
    authenticate_with_http_token do |token, options|
      @user = User.find_by_api_token  token
      @user
    end
  end

end
