class TriangleNumber
    def initialize
    end

    def create(length)
        triangle_number = 0
        (1..length).each{|n| triangle_number = triangle_number + n }
        return triangle_number
    end

    def factors(number)
        #f = (1..number).select {|i| (number % i).zero?}
        #return f.count 
        f = 1.upto(Math.sqrt(number)).select {|i| (number % i).zero?}.inject([]) do |f, i| 
            f << number/i unless i == number/i
            f << i
        end
        return f.sort.count
    end

    def first_triangle_number_with_x_factors(x)
        f = 0
        i = 1
        n = 0
        while f < x
            n = create(i)
            f = factors(n)
            i += 1
        end
        return "Number is #{n}, triangle number #{i -1}"
    end
end

a = TriangleNumber.new
puts a.first_triangle_number_with_x_factors(6)
puts a.first_triangle_number_with_x_factors(100)
puts a.first_triangle_number_with_x_factors(500)