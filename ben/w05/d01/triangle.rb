# def triangle(a,b,c)

#     a = a.abs
#     b = b.abs
#     c = c.abs

#     if a == b && a == c && b == c
#         puts "equalateril"
#     elsif a == b && a != c || a != b
#         puts "scalene"
#     elsif a != b && a != c && b != c
#         puts "isosceles"
#     else
#         puts "This is not a possible triangle"
#     end

# end


# puts triangle(-1,3,1)

values = [1,3,2]

puts [:equilateral, :isosceles, :scalene].fetch(values.uniq.size - 1)

