const calcGrade = function(studentScore, totalScore) {

    if(typeof studentScore !== 'number' || typeof totalScore !== 'number') {
        throw Error('Arguments must be numbers')
    }

    const percentGrade = (studentScore / totalScore) * 100;
    let letterGrade;
    if (percentGrade >= 90){
        letterGrade = 'A';
    } else if (percentGrade >= 80 && percentGrade < 90) {
        letterGrade = 'B';
    } else if (percentGrade >= 70 && percentGrade < 80) {
        letterGrade = 'C';
    } else if (percentGrade >= 60 && percentGrade < 70) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    return `You got ${letterGrade}, (${percentGrade}%)`;

}

try {
    console.log(calcGrade(true, 20));
} catch (e) {
    console.log(e.message);
}
