# == Schema Information
#
# Table name: artists
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  hometown     :string(255)
#  bio          :text
#  years_active :integer
#  label        :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#

class Artist < ActiveRecord::Base
    has_many :songs
end
