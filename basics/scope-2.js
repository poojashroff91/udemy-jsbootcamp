// Global scope ()
    // Local scope ()
        //Local scope ()
    // Local scope ()

//let name = 'Andrew';

if (true) {
    //let name = 'Mike';

    if(true){
        name = 'Jen';
        console.log(name); // Mike - Local has precedence over global
    }

}

if (true) {
    console.log(name); // Andrew
}


//Leaked global - The name was set in a local scope but it was not declared previously so line 12 creates a global variable instead of a local one, this is leaked global
//To avoid this always declare variables with the `let` keyword