function Student(fistName, lastName, birthYear) {
  this.fistName = fistName;
  this.lastName = lastName;
  this.birthYear = birthYear;

  //Restrict possibility of adding more than 25 records to the attendanceList
  this.attendanceList = [];
  this.attendanceList.length = 25;
  Object.defineProperty(this.attendanceList, "length", { writable: false });

  /*
    Absent\present methods for attendance list.
    Could do it as a separate method in the constructor function
    but decided to keep both methods inside the attendanceList
  */
  this.attendanceList.present = (idx) => {
    if (idx < 0) {
      return "Lesson number cannot be negative";
    }
    this.attendanceList[idx] = true;
  };

  this.attendanceList.absent = (idx) => {
    if (idx < 0) {
      return "Lesson number cannot be negative";
    }
    this.attendanceList[idx] = false;
  };

  // Calculates the student age
  this.getAge = () => {
    return new Date().getFullYear() - this.birthYear;
  };

  // Score list and the logic to get the average score
  this.scoreList = [];

  this.getAverageScore = () => {
    const sumOfScores = this.scoreList.reduce((accum, item) => {
      return (accum += item);
    }, 0);
    const numberOfScores = this.scoreList.length;
    return numberOfScores > 0 ? Math.round(sumOfScores / numberOfScores) : 0;
  };

  this.summary = () => {
    let messageText = "";
    const ACTUAL_NUMBER_OF_LESSONS = 25;
    const OPTIMAL_AVERAGE_SCORE = 90;
    const OPTIMAL_ATTENDED_RATIO = 0.9;
    const avgScore = this.getAverageScore();
    const numOfAttendedLessons = this.attendanceList.filter(
      (item) => item == true
    ).length;
    const attendRatio = numOfAttendedLessons / ACTUAL_NUMBER_OF_LESSONS;

    const isNumOfAttLessonsSuitable = attendRatio >= OPTIMAL_ATTENDED_RATIO;
    const isAvgScoreSuitable = avgScore >= OPTIMAL_AVERAGE_SCORE;
    if (isNumOfAttLessonsSuitable && isAvgScoreSuitable) {
      messageText = "Well done!";
    } else if (
      (isNumOfAttLessonsSuitable && !isAvgScoreSuitable) ||
      (!isNumOfAttLessonsSuitable && isAvgScoreSuitable)
    ) {
      messageText = "Good, but you can do better!";
    } else {
      messageText = "Rediska!";
    }
    return messageText;
  };
}

/*
    Test cases
*/

//Example 1
const OlegDrobina = new Student("Oleg", "Drobina", "1995");
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    OlegDrobina.attendanceList.present(i);
    OlegDrobina.scoreList.push(i * 10);
  } else {
    OlegDrobina.attendanceList.absent(i);
    OlegDrobina.scoreList.push(i * 10);
  }
}

console.log(`Oleg Drobina age: ${OlegDrobina.getAge()}`); //expected 29 (2024-1995=29)
console.log(`Oleg Drobina avg score: ${OlegDrobina.getAverageScore()}`); //expected 50 (0+...+100 = 550; 550/11 = 50)
console.log(`Oleg Drobina summary: ${OlegDrobina.summary()}`); //expected "Rediska!" (50<90 && 0.24 < 0.9 (attended lessons == true => 6 / 25 = 0.24))

//Example 2. Try adding 26+ class attendance record (attendanceList array). Also test negative lesson index. Get "Excellent" score.
const AngelaReyes = new Student("Angela", "Reyes", "1997");

AngelaReyes.attendanceList.present(100); //expected nothing to happen. Length won't be edited and the new record won't be added
AngelaReyes.attendanceList.absent(26); //expected nothing to happen. Length won't be edited and the new record won't be added
AngelaReyes.attendanceList.present(26); //expected nothing to happen. Length won't be edited and the new record won't be added
AngelaReyes.attendanceList.absent(-1); //expected nothing to happen. Length won't be edited and the new record won't be added
AngelaReyes.attendanceList.present(-1); //expected nothing to happen. Length won't be edited and the new record won't be added
AngelaReyes.attendanceList.absent(999); //expected nothing to happen. Length won't be edited and the new record won't be added

const attListCopy = [...AngelaReyes.attendanceList];

console.log("Angela Reyes attendance list before the cycle: ", attListCopy);

for (let i = 0; i < 25; i++) {
  AngelaReyes.attendanceList.present(i);
  AngelaReyes.scoreList.push(100);
}

console.log(`Angela Reyes age: ${AngelaReyes.getAge()}`); //expected 27 (2024-1997=27)
console.log(`Angela Reyes avg score: ${AngelaReyes.getAverageScore()}`); //expected 100 (100*25 = 2500; 2500/25 = 100)
console.log(`Angela Reyes summary: ${AngelaReyes.summary()}`); //expected "Well done!" (100>90 && 1 > 0.9 (attended lessons == true => 25 / 25 = 1))

//Example 3. An average score
const DeanParett = new Student("Dean", "Parrett", "1993");

for (let i = 0; i < 25; i++) {
  DeanParett.attendanceList.present(i);
  DeanParett.scoreList.push(80);
}

console.log(`Dean Parret age: ${DeanParett.getAge()}`); //expected 31 (2024-1993=31)
console.log(`Dean Parret avg score: ${DeanParett.getAverageScore()}`); //expected 80 (80*25 = 2500; 2000/25 = 80)
console.log(`Dean Parret summary: ${DeanParett.summary()}`); //expected "Good, but you can do better!" (80<90 && 1 > 0.9 (attended lessons == true => 25 / 25 = 1))
