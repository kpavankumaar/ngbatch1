var Student = /** @class */ (function () {
    function Student() {
        this.subjects = ['javascript', 'Angular'];
    }
    Student.prototype.Joined = function () {
        console.log('we have create a Joined students list ');
    };
    return Student;
}());
function Joined() {
}
var studentJoined = new Joined();
var studentsInfo = new Student();
studentsInfo.Joined();
console.log(studentsInfo.subjects[0]);
