class User < ActiveRecord::Base
  has_many :todos
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
