def anagram(word, array)
    array.select { |array_word| array_word.chars.sort.join == word.chars.sort.join }
end

puts anagram('listen', ['enlists', 'inlets', 'google', 'banana'])