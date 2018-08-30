class Student{
    subjects = ['javascript','Angular'];
    Joined(){
        console.log('we have create a Joined students list ')
    }
}
function Joined(){

}
let studentJoined = new Joined();
let studentsInfo = new Student();
studentsInfo.Joined();
console.log(studentsInfo.subjects[0]);