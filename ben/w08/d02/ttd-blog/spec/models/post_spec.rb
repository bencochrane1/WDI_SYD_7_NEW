require 'rails_helper'

RSpec.describe Post, :type => :model do
  it "counts the number of comments" do
    post = Post.create(title: "Welcome to my blog", content: "VB wins craft brewing comp")
    post.comments.create(content: "A great win")
    post.comments.create(content: "Bloody good")
    expect(post.comments.count).to eq(2)

  end
end
