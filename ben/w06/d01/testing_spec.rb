require 'rails_helper'


# Adding a Song to an Artist

feature "AddingASongToAnArtists", :type => :feature do
  scenario "valid input" do
    artist = Artist.create(
      first_name: "Miley",
      last_name: "Cyrus"
    )
    song = Song.create(
      name: "Wrecking Ball"
    )
    user = User.create(
      email: "info@example.com",
      password: "password",
      admin: true
    )
    
    log_in "info@fluffyjack.com", "password"

    visit '/artists'

    click_link artist.full_name
    click_button "Add songs"
    fill "Search", with: song.name
    click_button "Search"

    check song.name
    click_button "Add to #{artist.full_name}"

    expect(page).to have_content(song.name)
  end
end

# Edit a Song

feature "EditASong", :type => :feature do
  scenario "valid input" do
    artist = Artist.create(
      first_name: "Miley",
      last_name: "Cyrus"
    )
    user = User.create(
      email: "info@example.com",
      password: "password",
      admin: true
    )
    
    log_in "info@fluffyjack.com", "password"

    visit artist_path(artist)

    click_link 'edit'
    fill "first_name", with: "Miley"
    fill "second_name", with: "Cyrus"
    click_button "Update"

    expect(page).to have_content("Snoop Lion")
  end


  scenario "user not logged in" do
  end

  scenario "user is not an admin" do
  end

end


# Add song to playlist

feature "AddingASongToAnArtists", :type => :feature do
  scenario "valid input" do
    artist = Artist.create(
      first_name: "Miley",
      last_name: "Cyrus"
    )
    song = Song.create(
      name: "Wrecking Ball"
    )
    user = User.create(
      email: "info@example.com",
      password: "password",
      admin: true
    )
    
    log_in "info@fluffyjack.com", "password"

    visit '/artists'

    click_link artist.full_name
    click_button "Add songs"
    fill "Search", with: song.name
    click_button "Search"

    check song.name
    click_button "Add to #{artist.full_name}"

    expect(page).to have_content(song.name)
  end
end