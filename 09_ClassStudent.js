class Student {
    constructor(rollNo, name, division) {
        this.rollNo = rollNo;
        this.name = name;
        this.division = division;
    }

    Details() {
        console.log(`Student Details => Roll No:${this.rollNo}, Name:${this.name}, Division:${this.division}`);
    }
}

const Jack = new Student(1, "Jack", "B");
Jack.Details();

const Rose = new Student(2, "Rose", "A");
Rose.Details();

const Rita = new Student(5, "Rita", "A");
Rita.Details();
