const myAge = 27
const message = (myAge >= 18) ? 'You can vote' : 'You cannot vote';
console.log(message)

const showPage = () => {
    return ('Showing the page');
}

const showErrorPage = () => {
    return ('Showing the error page');
}
myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Porter']

const newMessage = team.length > 4 ? 'Too many people on your team' : `Team size is ${team.length}`
console.log(newMessage);