json.extract! user, :id, :email, :first_name, :last_name, :gender, :birthday,
                    :workplace, :school, :current_city,
                    :hometown, :relationship_status
json.profileavatar asset_path(user.profileavatar)
json.coverimage asset_path(user.coverimage)
