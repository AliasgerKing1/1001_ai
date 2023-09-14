const Path = require('path')
const str = require('random-string')
const ourDataSet = require('./dataset')

let imagePath = "hello.jpg"
let imagePath2 = "hello.png.gif.exe.gif.gif.svg.jpg.png.jpg.jpg.png"
let imagePath3 = "hello.png.gif.exe.gif.gif.svg.jpg.png.jpg.jpg.txt"

const new_name = str({ length: 100 });

let sepratedFilePath = imagePath2.split(".");

let extension = sepratedFilePath[sepratedFilePath.length - 1];

let new_complete_name = new_name + "." + extension

if(ourDataSet.includes(extension)) {
    let imageAbsolutePath = `${Path.resolve()}\\${imagePath2}`
    console.log()
    console.log()
    console.log()
    console.log()
    console.log("Above file is an Image and it's Path is = ", imageAbsolutePath)
    console.log()
    console.log()
    console.log()
    console.log()
    console.log("New Name of file is = ", `${Path.resolve()}\\${new_complete_name}`)
}else {
    console.log("It is not an Image file")
}