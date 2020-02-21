class Sieve
    def initialize(max)
        @max = max
        @primes = Array(0..@max)
        @primes[0]=nil
        @primes[1]=nil
        (2..(@max).to_i).each do |x|
            ((x**2)..@max).step(x) do |p|
                @primes[p] = nil
            end
        end
    end

    # denominators.each do |denominator|
    #     primes[denominator]
    # end

    def print
        @primes.compact.each do |p|
            puts p
        end
    end

    def sum
        puts @primes.compact.reduce(:+)
    end

end
a = Sieve.new(2000000)
a.sum