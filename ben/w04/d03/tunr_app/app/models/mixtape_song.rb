# == Schema Information
#
# Table name: mixtape_songs
#
#  id         :integer          not null, primary key
#  song_id    :integer
#  mixtape_id :integer
#  created_at :datetime
#  updated_at :datetime
#

class MixtapeSong < ActiveRecord::Base
    belongs_to :song
    belongs_to :mixtape
end
