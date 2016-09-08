class StringCalculator
  def add str
    primary_delimiter = ','
    delimiters = []

    total = 0

    decoded_str = str.split('\n')

    # TODO: refactor
    if str == ''
      return total
    end

    if str.index('//') == 0
      custom_delimiter = decoded_str.shift.split('//')[1].gsub(/\[|\]/, '')
      #decoded_str = decoded_str[0]
      #TODO: support multiple custom delimiters
      delimiters.push(custom_delimiter)
    end

    decoded_str = decoded_str.join(primary_delimiter)

    delimiters.each do |delimiter|
      decoded_str = decoded_str.gsub(/#{Regexp.escape(delimiter)}/, primary_delimiter)
    end

    digits = decoded_str.split(primary_delimiter)
    
    digits.each do |digit|
      num = Integer(digit)

      num <= 1000 ? total += num : nil
    end

    return total
  end
end
