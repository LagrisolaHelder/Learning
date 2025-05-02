print "Hello World" # This is a comment
 
 #variable declaration
a = 10
b = 20
c = a + b
print c # This will print 30

# Data Types
# int, float, string, list, tuple, dictionary, set

# int
a = 10
b = 20
c = a + b
print c # This will print 30


# float
a = 10.5
b = 20.5
c = a + b
print c # This will print 31.0


# string
a = "Hello"
b = "World"
c = a + " " + b
print c # This will print Hello World


# list
a = [1, 2, 3, 4, 5]
b = [6, 7, 8, 9, 10]
c = a + b
print c # This will print [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


# tuple
a = (1, 2, 3, 4, 5)
b = (6, 7, 8, 9, 10)
c = a + b
print c # This will print (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


# dictionary
a = {"name": "John", "age": 30}
b = {"name": "Jane", "age": 25}
c = {**a, **b}
print c # This will print {'name': 'Jane', 'age': 25} because the second dictionary overwrites the first one


# set
a = {1, 2, 3, 4, 5}
b = {6, 7, 8, 9, 10}
c = a.union(b)
print c # This will print {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} because sets are unordered collections of unique elements


# Control Flow
# if-else statement
a = 10
b = 20
if a > b:
    print "a is greater than b"
elif a < b:
    print "a is less than b"
else:
    print "a is equal to b"

    