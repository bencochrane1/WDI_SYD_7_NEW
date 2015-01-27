FactoryGirl.define do  factory :tenant do
    
  end


    
  factory :apartment do
        sequence(:title) { |n| "Manhattan #{n} Bedroom Mansion" }
        sequence(:description) { |n| "A great view from floor #{n}." }  
        sequence(:price) { |n| n*100000 }  
        sequence(:bedrooms) { |n| n }  
        available true
        location "Bondi NSW"
  end

end