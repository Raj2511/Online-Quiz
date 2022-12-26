

var mark = 0;
function date() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var display_Date = d + " : " + m + " : " + y;
    document.getElementById("showdate").innerHTML = display_Date;
}

function timer() {
    var counter = 50;

    var interval = setInterval(() => {
        document.getElementById("timer").innerHTML = counter;
        counter--;

        if (counter < 0) {
            // setInterval(interval);
            document.getElementById("timer").innerHTML = "Time's Up";
            timerScore()
            $('#timermodal').modal('show');
        }
    }, 1500)
}

function main() {

    var count = 0;

    var quesdata = [
        {
            question: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
            a: "javap tool",
            b: "javaw command",
            c: "Javadoc tool",
            d: "javah command",
            correct: "Javadoc tool"
        },
        {
            question: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
            a: "getClass()",
            b: "intern()",
            c: "getName()",
            d: "toString()",
            correct: "getName()"
        },
        {
            question: "If three threads trying to share a single object at the same time, which condition will arise in this scenario?",
            a: "Time-Lapse",
            b: "Critical situation",
            c: "Race condition",
            d: "Recursion",
            correct: "Race condition"
        },
        {
            question: "Which of the following modifiers can be used for a variable so that it can be accessed by any thread or a part of a program?",
            a: "global",
            b: "transient",
            c: "volatile",
            d: "default",
            correct: "volatile"
        },
        {
            question: "What will be the output of the program, if this code is executed with the command line: > java F0091 world",
            a: "Hello",
            b: "Hello Foo91",
            c: "Hello world",
            d: "The code does not run.",
            correct: "The code does not run."
        },
        {
            question: "In java control statements break, continue, return, try-catch-finally and assert belongs to?",
            a: "Selection statements",
            b: "Loop Statements",
            c: "Transfer statements",
            d: "Pause Statement",
            correct: "Transfer statements"
        },
        {
            question: "Which variables are created when an object is created with the use of the keyword 'new' and destroyed when the object is destroyed?",
            a: "Local variables",
            b: "Instance variables",
            c: "Class Variables",
            d: "Static variables",
            correct: "Instance variables"
        },
        {
            question: "Which statement transfer execution to different parts of your code based on the value of an expression?",
            a: "If",
            b: "Switch",
            c: "Nested-if",
            d: "if-else-if",
            correct: "Switch"
        },
        {
            question: "Which are the special symbols used to initialize an array at the time of the declaration itself?",
            a: "Parentheses ( )",
            b: "Square Brackets [ ]",
            c: "Braces { }",
            d: "Angled Brackets < >",
            correct: "Braces { }"
        },
        {
            question: "Which of the following variable declaration would NOT compile in a java program?",
            a: "int var;",
            b: "int VAR;",
            c: "int var1",
            d: "int 1_var;",
            correct: "int 1_var;"
        }
    ]
    var queslen = quesdata.length
    const q1 = document.getElementById('ques')
    const o1 = document.getElementById('option1')
    const d1 = document.getElementById('opt1')
    const o2 = document.getElementById('option2')
    const d2 = document.getElementById('opt2')
    const d3 = document.getElementById('opt3')
    const o3 = document.getElementById('option3')
    const d4 = document.getElementById('opt4')
    const o4 = document.getElementById('option4')
    const nxtbtn = document.getElementById('nxtbtn')
    const prebtn = document.getElementById('prebtn')

    displayQues()


    nxtbtn.addEventListener('click', () => {
        countScore()
        if (count < queslen - 1) {
            count++
        }

        displayQues()
    }
    )
    prebtn.addEventListener('click', () => {
        if (count > 0) {
            count--
        }
        displayQues()
    }
    )



    function displayQues() {

        clearSelected()


        const quesdis = quesdata[count];
        q1.innerText = quesdis.question
        d1.innerText = quesdis.a
        o1.value = quesdis.a
        d2.innerText = quesdis.b
        o2.value = quesdis.b
        d3.innerText = quesdis.c
        o3.value = quesdis.c
        d4.innerText = quesdis.d
        o4.value = quesdis.d

        showQuesNo()

    }

    function clearSelected() {
        var radioList = document.getElementsByName('flexRadioDefault');
        for (var i = 0; i < 4; i++) {
            if (radioList[i].checked) {
                radioList[i].checked = false;
            }
        }

    }
    function showQuesNo() {
        var qno = "Q.No : " + (count + 1) + "/10 ";
        document.getElementById("qno").innerHTML = qno;
    }

    function countScore() {
        var radioList = document.getElementsByName('flexRadioDefault');
        ans = quesdata[count].correct
        for (i = 0; i < 4; i++) {
            if (radioList[i].checked) {
                selected = radioList[i].value
                console.log("ans " + ans)
                console.log("sel " + selected)
                if (ans == selected) {
                    mark++
                    console.log("check" + true)
                }
            }

        }
        // return mark
    }


    // document.getElementById("ques").innerHTML= "quesdis.question";
}

function timerScore() {
    document.getElementById("timerslt").innerHTML = mark;
}

function submitScore() {
    document.getElementById("showrslt").innerHTML = mark;
}
window.addEventListener('load', event => {
    date();
    //  timer();
    main();
});

