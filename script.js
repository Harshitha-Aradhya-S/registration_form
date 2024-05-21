function takevalue(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender = document.getElementById("gender").value;
    var studentid = document.getElementById("studentid").value;
    var s_mail = document.getElementById("s_mail").value;
    var s_class = document.getElementById("s_class").value;

    document.write("Name:", fname+ " " +lname + "<br>");
    document.write("Gender:", gender  + "<br>")
    document.write("StudentID:", studentid  + "<br>")
    document.write("Student_mail:", s_mail  + "<br>")
    document.write("Student_class:", s_class  + "<br>")
}
