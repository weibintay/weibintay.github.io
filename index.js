
alert("welcome to JS class")


var student_1="jess"
var student_2="leah"
var student_3="bala"


var welcome_msg = "Hai. We are friends.." + "student_1" + "student_2"





function greet(nameOfPerson) {
    
        var greeting_message = "Welcome , Mr " + nameOfPerson
    
        console.log( greeting_message )
    }
    
    greet( "Bala " )
    
    greet( "Zin min" )
    
    greet( "Kenneth" )


function run(runners) {

    var running_man = "Welcome to Running Man! Team 1 consists of " + runners

    console.log(running_man)
}

run("Bala")
run("ZhiMin")


function joinNames(name1,name2) {

    //This function is going to join two names (name1,name2)
    //It is going to return the joined_string in the following fornat
    // Returns:"name1 name2"
    var joined_string=name1 + " "+ name2
    var advanced_string =name1 + " "+ name1 + "|" + name2 + " " + name2 

    return joined_string
    return  advanced_string

}

console.log (joinNames("bala","ken"))


