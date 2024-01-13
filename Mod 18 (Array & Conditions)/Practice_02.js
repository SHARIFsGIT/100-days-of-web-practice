function calculateGrades(name, totalScore){
    if (totalScore >= 80){
        console.log(name + " 's grade: A");
    }
    else if (totalScore >= 60){
        console.log(name + " 's grade: B");
    }
    else if (totalScore >= 50){
        console.log(name + " 's grade: C");
    }
    else if (totalScore >= 40){
        console.log(name + " 's grade: D");
    }
    else if (totalScore <= 39){
        console.log(name + " 's grade: F");
    }
}

const results = {
    'You' : 85,
    'Tom' : 66,
    'Jane' : 95,
    'Peter' : 56,
    'John' : 40,
    'Bob' : 35
}

for (const[name, score] of Object.entries(results)){
    calculateGrades(name, score)
}