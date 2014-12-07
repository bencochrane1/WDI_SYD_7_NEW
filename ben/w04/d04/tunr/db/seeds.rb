
User.destroy_all
Artist.destroy_all
Song.destroy_all
Mixtape.destroy_all

# user
user1 = User.create({
    email: "bencochrane1@me.com",
    password: "rexandbob",
    password_confirmation: "rexandbob",
    confirmed_at: Time.now
    })

user2 = User.create({
    email: "bochrane@gmail.com",
    password: "rexandbob",
    password_confirmation: "rexandbob",
    confirmed_at: Time.now
    })

# admin
 admin = User.create({
  email: "admin@example.com",
  password: "password",
  password_confirmation: "password",
  confirmed_at: Time.now,
  admin: true
})

# artists
a1 = Artist.create({
    name: "Bobby",
    hometown: "Nashville",
    years_active: 18,
    bio: "real good stuff",
    label: "Sony"
    })

a2 = Artist.create({
    name: "Bobby",
    hometown: "Nashville",
    years_active: 18,
    bio: "real good stuff",
    label: "Sony"
    })

# songs
s1 = Song.create({
    name: "Billy G",
    year: "1996",
    duration: 120,
    artist_id: a1.id
    })

s2 = Song.create({
    name: "Graham B",
    year: "1999",
    duration: 120,
    artist_id: a1.id
    })

# mixtapes
m1 = Mixtape.create({
    name: "best of the 80s",
    description: "so bloody good",
    user_id: user1.id
    })

m2 = Mixtape.create({
    name: "best of the 80s",
    description: "so bloody good",
    user_id: user2.id
    })

