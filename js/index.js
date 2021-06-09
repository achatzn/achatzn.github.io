document.getElementById("skills").addEventListener("click", Skills);
document.getElementById("border").addEventListener("click", Home);
//document.getElementById("name").addEventListener("click", Delete());
//document.getElementById("button").addEventListener("click", Send);
//document.getElementById("contact").addEventListener("click", Contact);
document.getElementById("about").addEventListener("click", About);
document.getElementById("rotate").addEventListener("click", Rotate);
document.getElementById("projects").addEventListener("click", Project);

document.getElementById("skills-mobile").addEventListener("click", Skills);
document.getElementById("border-mobile").addEventListener("click", Home);
//document.getElementById("contact-mobile").addEventListener("click", Contact);
document.getElementById("about-mobile").addEventListener("click", About);
document.getElementById("projects-mobile").addEventListener("click", Project);




var modal = document.getElementById("modal");
var modal2 = document.getElementById("modal2");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];



var number = getRandomInt(100);
//document.getElementById("spam-prot").placeholder = number;

var current = 0;


function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

function Rotate()
{
    if(current == 4)
        current = 0;

    console.log("run");

    switch(current)
    {
        case 0:
            document.getElementById("education").style.display = "none";
            document.getElementById("professions").style.display = "flex";
            current++;
            break;
        case 1:
            document.getElementById("professions").style.display = "none";
            document.getElementById("clubs").style.display = "flex";
            current++;
            break;
        case 2:
            document.getElementById("clubs").style.display = "none";
            document.getElementById("hobbies").style.display = "flex";
            current++;
            break;
        case 3:
            document.getElementById("hobbies").style.display = "none";
            document.getElementById("education").style.display = "flex";
            current++;
            break;


    }


}

function Project()
{

    document.getElementById("secone").style.display = "none";
    document.getElementById("sectwo").style.display = "none";
    //document.getElementById("secthree").style.display = "none";
    document.getElementById("secfive").style.display = "none";

    document.getElementsByClassName("contain");

    var hold = document.getElementsByClassName("contain");

    for( var i = 0; i < hold.length; i++)
        hold[i].style.flexDirection = "column";

    document.getElementById("secfour").style.display = "flex";

}

function About()
{

    document.getElementById("secone").style.display = "none";
    document.getElementById("sectwo").style.display = "none";
    //document.getElementById("secthree").style.display = "none";
    document.getElementById("secfour").style.display = "none";
    document.getElementsByClassName("contain");

    var hold = document.getElementsByClassName("contain");

    for( var i = 0; i < hold.length; i++)
        hold[i].style.flexDirection = "column";

    document.getElementById("secfive").style.display = "flex";

}

function Contact()
{

    document.getElementById("secone").style.display = "none";
    document.getElementById("sectwo").style.display = "none";
    document.getElementById("secfour").style.display = "none";
    document.getElementById("secfive").style.display = "none";

    document.getElementsByClassName("contain");

    var hold = document.getElementsByClassName("contain");

    for( var i = 0; i < hold.length; i++)
        hold[i].style.flexDirection = "column";

    document.getElementById("secthree").style.display = "flex";

}

function Send()
{
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var spam = document.getElementById("spam-prot");

    var sum = 0;
    var val = spam.value.split(" + ");

    
    for(var i = 0; i < val.length; i++)
        sum += parseInt(val[i]);




    if(email.value == "" || name.value == "" || message.value == "" || sum != number || val.length == 1)
    {
        modal.style.display = "flex";

        if(email.value == "")
            email.style.boxShadow = "0 0 0 4px rgba(228, 21, 21, 0.4)";
        else
            email.style.boxShadow = "none";
        if(name.value == "")
            name.style.boxShadow = "0 0 0 4px rgba(228, 21, 21, 0.4)";
        else
            name.style.boxShadow = "none";
        if(message.value == "")
            message.style.boxShadow = "0 0 0 4px rgba(228, 21, 21, 0.4)";
        else
            message.style.boxShadow = "none";
        if(sum != number || val.length == 1)
            spam.style.boxShadow = "0 0 0 4px rgba(228, 21, 21, 0.4)";
        else
            sum.style.boxShadow = "none";

        return;
    }


    document.getElementById("popup").style.display = "flex";
    document.getElementById("contact-box").style.display = "none";



}


function Delete(i)
{
    if(i == 1)
        document.getElementById("name").value = "";

}

function Skills()
{

    document.getElementById("secone").style.display = "none";
    //document.getElementById("secthree").style.display = "none";
    document.getElementById("secfour").style.display = "none";
    document.getElementById("secfive").style.display = "none";

    document.getElementsByClassName("contain");

    var hold = document.getElementsByClassName("contain");

    for( var i = 0; i < hold.length; i++)
        hold[i].style.flexDirection = "row";

    document.getElementById("sectwo").style.display = "flex";

}

function Home()
{

    document.getElementById("sectwo").style.display = "none";
    document.getElementById("secthree").style.display = "none";
    document.getElementById("secfour").style.display = "none";
    document.getElementById("secfive").style.display = "none";


    document.getElementsByClassName("contain");

    var hold = document.getElementsByClassName("contain");

    for( var i = 0; i < hold.length; i++)
        hold[i].style.flexDirection = "column";

    document.getElementById("secone").style.display = "flex";


}


// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// span2.onclick = function() {
//   modal2.style.display = "none";
// }
