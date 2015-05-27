class AddApiTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :api_token, :string, :default => "a"
  end
end
