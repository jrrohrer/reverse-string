def reverse_string(str)
  # type your code in here
  reversed = []
  string = str.split('')
  string.each do |l| 
    reversed.unshift(l)
  end
  return reversed.join('')
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts "Expecting: 'eisseJ'"
  puts "=>", reverse_string('Jessie')

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# create an empty array to store the new string
# split the string into an array
# iterate over the string and return each letter to the beginning of the new array
# join the new array and return it
# And a written explanation of your solution
# I am creating a method which takes in a string. I create an empty array to store the new, reversed array. Then I split the original string into an array. The string array is then iterated over, and each letter is pushed to the beginning of the new empty array, which results in a reversed version of the string array. I then return the reversed arrray, joined back together into a string. 