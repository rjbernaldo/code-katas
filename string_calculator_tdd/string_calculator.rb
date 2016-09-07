class StringCalculator
  def add str
    total = 0

    decoded_str = str.split('\n')

    if str.index('//') == 0
      custom_delimiter = decoded_str.shift.split('//')[1]
    end

    decoded_str.each do |set_a|
      digits = set_a.split(',')

      digits.each do |digit|
        if custom_delimiter
          ds = digit.split(custom_delimiter)

          ds.each do |d|
            total += Integer(d)
          end
        else
          total += Integer(digit)
        end
      end
    end

    return total
  end
end
