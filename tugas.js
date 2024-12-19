//soal 1
let scoreStudent = 95;

//soal 3
if(scoreStudent < 0 || scoreStudent >= 100){
    console.log("Error: Invalid score. Please enter a score between 0 and 100.");
}else{
    let grade;
//soal 2
    if(scoreStudent >= 90 && scoreStudent <=100){
        grade = 'A';
    }else if(scoreStudent >= 75 && scoreStudent < 90){
        grade = 'B';
    }else if(scoreStudent >= 60 && scoreStudent < 75){
        grade = 'C';
    }else if(scoreStudent >= 40 && scoreStudent < 60){
        grade = 'D';
    }else {
        grade = 'E'
    }
    
    console.log(`Your grade is ${grade}`);

    //Soal 4
    if(scoreStudent >= 90){
        console.log("Excellent work!");
    }else if(scoreStudent >= 40 && scoreStudent < 60){
        console.log("You need to work harder.");
    }else if(scoreStudent < 40){
        console.log("Failing grade, seek help from your teacher.");
    }

    //Soal 5
    switch (grade) {
        case 'A':
            console.log ("Outstanding performance!");
            break;
        case 'B':
            console.log ("Good job, but aim higher.");
            break;
        case 'C':
            console.log ("Satisfactory, but there's room for improvement.");
            break;
        case 'D':
            console.log ("Below average, focus on your studies.");
            break;
        case 'E':
            console.log ("Failed. Try again next time.");
            break;
    }
}

