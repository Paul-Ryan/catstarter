json.extract! @user, :username, :id, :email
json.pledges @user.pledges.pluck(:id)
