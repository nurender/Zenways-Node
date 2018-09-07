var add =require("./abc")

var func = (a, b, c) => {
    console.log(("Main Funcction"));
    c(a, b)
}

func(4, 5, add.sum)