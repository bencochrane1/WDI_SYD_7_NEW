class Card

    attr_reader :val, :suit

    def initialize(val, suit)
        @val = val
        @suit = suit 
    end

    def to_s
        @val.to_s + ' of ' + @suit + 's'
    end

end


class Deck

    attr_reader :cards

    def initialize
        @cards = []
        values = ['Ace', (2..10).to_a, 'Jk', 'Qn', 'Kg'].flatten
        suits = ['spade', 'heart', 'club', 'dimond']

        suits.each do |suit| 
            values.each do |val| 
                card = Card.new(val, suit)
                @cards << card
            end
        end
    end

    def deal(num_players = 1, num_cards=5)
        1.upto(num_players) do |player_num|
            my_hand = cards.pop(player_num) 
            puts "Player #{player_num}:"
            puts my_hand
            puts 
        end
    end

    def shuffle
        @cards.shuffle!
    end

end



my_deck = Deck.new()
my_deck.shuffle

puts 
my_deck.deal(2)
puts

