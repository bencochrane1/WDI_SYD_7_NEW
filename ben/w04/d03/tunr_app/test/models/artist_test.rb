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

require 'test_helper'

class ArtistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
