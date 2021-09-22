a = ['cat', 'dog', 'mouse', 'elephant']
print (a[2])

# let the user know what's going on
print ("Welcome to MadLibs!")
print ("Answer the questions below to play.")
print ("-----------------------------------")

# variables containing all of your story info
adjective1 = input("Enter an adjective: ")
location = input("Name a place: ")
object = input("An object from your home: ")
danceform = input("A dance form you like: ")
Integer1 = input("Your favourite number: ")
famousperson = input("A famous person you really like: ")

# this is the story. it is made up of strings and variables.
# the \ at the end of each line let's the computer know our string is a long one
# (a whole paragraph!) and we want to continue more code on the next line. 
# play close attention to the syntax!

story = "The " + adjective1 + " duckling went to " + location + " to buy a " + object + ", " \
"for doing a " + danceform + " for his " + Integer1 + \
" other siblings to watch and learn. He has always been inspired by " + famousperson + "."

# finally we print the story
print (story)