class Calculator

    def self.run(command)
            split = command.split(" ")
            first_num = split.shift
            second_num = split.pop
            operator = split.join(" ")

            case operator
            when 'add'
                result = first_num.to_i + second_num.to_i
            when 'subtract'
                result = first_num.to_i - second_num.to_i
            when 'divided by'
                result = first_num.to_i / second_num.to_i
            when 'multiplied by'
                result = first_num.to_i * second_num.to_i
            end
            puts "#{first_num} #{operator} #{second_num} equals #{result}"
    end

end

puts Calculator.run("2 divided by 2")