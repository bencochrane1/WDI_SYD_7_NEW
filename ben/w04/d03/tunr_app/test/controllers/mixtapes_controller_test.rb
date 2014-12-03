require 'test_helper'

class MixtapesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
