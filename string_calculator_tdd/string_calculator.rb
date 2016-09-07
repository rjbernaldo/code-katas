class StringCalculator
  def add digits
    total = 0

    digits.split(',').each do |digit|
      total += Integer(digit)
    end

    return total
  end
end
