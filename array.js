//Array is the collection of homogenious or similar or hetrigenious datatype.

var a = [1,3,5,34,67](  Array of number)
var b = ['asdvfd','asdewf','vghh','fgtrhr'](array of string)
var c = [true,false,true,false](Array of Boolean)

var d = [2,4,6,'efrf',true,false,'defd']

var city = ["Puri","Bhubaneswar","Baleswar","Cuttack"]
typeof(city)
"object"

push:Will add in the end of the array
pop:Will remove in the end of the array
shift:Will remove in the first of the array
unshift:Will add in the first of the array

var city = ["Puri","Bhubaneswar","Baleswar","Cuttack"]
undefined
city.pop()
'Cuttack'
city()
VM102:1 Uncaught TypeError: city is not a function
    at <anonymous>:1:1
(anonymous) @ VM102:1
city
(3) ['Puri', 'Bhubaneswar', 'Baleswar']
city.push
ƒ push() { [native code] }
city.push()
3
city.push('Check')
4
city
(4) ['Puri', 'Bhubaneswar', 'Baleswar', 'Check']
city.pop(2)
'Check'
city.shift()
'Puri'
city.shift(2)
'Bhubaneswar'
city
['Baleswar']
city.unshift('Nirakarpur')
2
city.unshift('Gadakharad')
3
city
(3) ['Gadakharad', 'Nirakarpur', 'Baleswar']


var a = ['a','b','c',1]
var b = [1,2,3]
a+b
'a,b,c,11,2,3'