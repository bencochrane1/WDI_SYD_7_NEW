class WelcomeController < ApplicationController
  def index

    @mistapes = Mixtape.order(:update_at).limit(10)
  end
end
