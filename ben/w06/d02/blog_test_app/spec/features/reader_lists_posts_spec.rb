require 'rails_helper'

feature "ReaderListsPosts", :type => :feature do
    scenario "there is no blog posts" do
        visit '/'
        expect(page).to have_content("No blog posts found")
    end

    scenario "there is one blog post" do
        Post.create(
            title: "Hello World",
            author: "Jane Birkin",
            content: "Lorem Ipsum"
            )
        visit '/'
        expect(page).to have_content("Hello World")
        expect(page).to have_content("Jane Birkin")
        expect(page).to have_content("Lorem Ipsum")
        expect(page).not_to have_content("No blog posts found")
    end

    scenario "multiple blog posts in system" do

        posts = (0..3).each do |n|
            Post.create(
                title: "Hello World#{n}",
                author: "Jane Birkin#{n}",
                content: "Lorem Ipsum#{n}"
                )
        visit '/'
        (0..3).each do |n|
            expect(page).to have_content("Hello World#{n}")
            expect(page).to have_content("Jane Birkin#{n}")
            expect(page).to have_content("Lorem Ipsum#{n}")
        end

        expect(page).not_to have_content("No blog posts found")
        
        end
    end
end
