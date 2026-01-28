function getGrade(marks){
    if (marks >= 50){
        let message = "Congrats"; //Block scope
        console.log(message);
        console.log("You have passed the course.");


    }
    else {
        var message = "Sorry"; //funtion scope
        console.log(message);
        console.log("You have failed this course.");

    }
    
}

getGrade(34);
getGrade(54);
getGrade(45)