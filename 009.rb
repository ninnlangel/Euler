a=0
b=0
found = false
while a < 1000 and found == false
  a += 1
  b = a
  while b < 500 and found == false
    b += 1
    c = Math.sqrt((a**2) + (b**2))
    int_c = c.to_i
    if int_c == c
      if a+b+c == 1000
        puts (a*b*int_c).to_s + "  a = #{a}, b = #{b}, c = #{int_c}"
        found = true
        break
      end
    end
  end
end