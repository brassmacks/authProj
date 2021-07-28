class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    unless @user
      status 401
    else 
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end



  # def destroy
  #   if @current_user
  #     logout!
  #   else
  #     status 404
  #   end
  # end

end
