// Lexical scope
// Global scope - Things defined outside the code blocks
// Local scope  - Things defined inside code block.

// In a scope you can access variables defined in that scope or any parent/ancestor
// Global scope (varOne)
    // Local scope (varTwo)
        //Local scope (varFour)
    // Local scope (varThree)

let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);

    if(true){
        let varFour = 'varFour';
    }

}

if (true) {
    let varThree = 'varThree';
}
