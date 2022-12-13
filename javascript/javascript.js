function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function footerSubscribe(){
	var x = document.getElementById("footer-email");
	if (x.value != ""){
		x.style.border = "5px solid green";
	}
	else {
		x.style.border = "3px solid red";
	}
}

function validator(){
    var check = true;

    var full_name = document.getElementById("name").value;
    var email_address = document.getElementById("email").value;
    var phone_number = document.getElementById("phone").value;
    var subject_field = document.getElementById("subject").value;
    var contact_message = document.getElementById("msg").value;
    var privacy_checked = document.getElementById("privacy").checked;


    if (full_name == ""){
        check = false;
        document.getElementById("incomplete-field-name").innerHTML = "Please enter your Full Name";
    }
    if (email_address == ""){
        check = false;
        document.getElementById("incomplete-field-email").innerHTML = "Please enter your Email Address";
    }
    if (phone_number == ""){
        check = false;
        document.getElementById("incomplete-field-phone").innerHTML = "Please enter your Phone Number"
    }
    if (subject_field == "none"){
        check = false;
        document.getElementById("incomplete-field-subject").innerHTML = "Please choose a Subject"
    }
    if (contact_message.length < 10){
        check = false;
        document.getElementById("incomplete-field-msg").innerHTML = "Please enter at least 10 characters"
    }
    if (!privacy_checked){
        check = false;
        document.getElementById("privacy-check").style.color = "red";
    }

	if (check){
		alert("Thanks for submitting the form, we will get in touch with you as soon as possible 😀");
	}

    return check;
	
}

function revert_privacy_color() {
    document.getElementById("privacy-check").style.color = "white";
}

function dice(){
	var x= Math.floor(Math.random()*6)+1;
	if(x==1){
		document.getElementById("dice11").setAttribute("src","images/game/dice1.png");
	}
	if(x==2){
		document.getElementById("dice11").setAttribute("src","images/game/dice2.png");
	}
	if(x==3){
		document.getElementById("dice11").setAttribute("src","images/game/dice3.png");
	}
	if(x==4){
		document.getElementById("dice11").setAttribute("src","images/game/dice4.png");
	}
	if(x==5){
		document.getElementById("dice11").setAttribute("src","images/game/dice5.png");
	}
	if(x==6){
		document.getElementById("dice11").setAttribute("src","images/game/dice6.png");
	}
	
	var y= Math.floor(Math.random()*6)+1;
	if(y==1){
		document.getElementById("dice22").setAttribute("src","images/game/dice1.png");
	}
	if(y==2){
		document.getElementById("dice22").setAttribute("src","images/game/dice2.png");
	}
	if(y==3){
		document.getElementById("dice22").setAttribute("src","images/game/dice3.png");
	}
	if(y==4){
		document.getElementById("dice22").setAttribute("src","images/game/dice4.png");
	}
	if(y==5){
		document.getElementById("dice22").setAttribute("src","images/game/dice5.png");
	}
	if(y==6){
		document.getElementById("dice22").setAttribute("src","images/game/dice6.png");
	}
	
	if(x>y){
	document.getElementById("result").innerHTML ="Congratulations, You win!";
	}
	else if(y>x){
		document.getElementById("result").innerHTML ="You Lose!";
	}
	else if(y==x){
		document.getElementById("result").innerHTML ="Its a Draw! Roll Again?";
	}
	else{
		document.getElementById("result").innerHTML ="Oops! There seems to be an error, <a href=\"/contacts.html\">please report it to us here.</a>"
	}
}

var counter1 = 0;
function overlayer1(){
	var overlay = document.getElementById("pane1");
	if (counter1%2 == 0){
		overlay.style.transform = "scale(1.05)";
		overlay.style.opacity = "0.9";
		overlay.style.zIndex = "1";	
	}
	else{
		overlay.style.transform = "1";
		overlay.style.opacity = "0";
		overlay.style.zIndex = "0";
	}
	counter1+=1;
}

var counter2 = 0;
function overlayer2(){
	var overlay = document.getElementById("pane2");
	if (counter2%2 == 0){
		overlay.style.transform = "scale(1.05)";
		overlay.style.opacity = "0.9";
		overlay.style.zIndex = "1";	
	}
	else{
		overlay.style.transform = "1";
		overlay.style.opacity = "0";
		overlay.style.zIndex = "0";
	}
	counter2+=1;
}

var counter3 = 0;
function overlayer3(){
	var overlay = document.getElementById("pane3");
	if (counter3%2 == 0){
		overlay.style.transform = "scale(1.05)";
		overlay.style.opacity = "0.9";
		overlay.style.zIndex = "1";	
	}
	else{
		overlay.style.transform = "1";
		overlay.style.opacity = "0";
		overlay.style.zIndex = "0";
	}
	counter3+=1;
}

var counter4 = 0;
function overlayer4(){
	var overlay = document.getElementById("pane4");
	if (counter4%2 == 0){
		overlay.style.transform = "scale(1.05)";
		overlay.style.opacity = "0.9";
		overlay.style.zIndex = "1";	
	}
	else{
		overlay.style.transform = "1";
		overlay.style.opacity = "0";
		overlay.style.zIndex = "0";
	}
	counter4+=1;
}

var counter5 = 0;
function overlayer5(){
	var overlay = document.getElementById("pane5");
	if (counter5%2 == 0){
		overlay.style.transform = "scale(1.05)";
		overlay.style.opacity = "0.9";
		overlay.style.zIndex = "1";	
	}
	else{
		overlay.style.transform = "1";
		overlay.style.opacity = "0";
		overlay.style.zIndex = "0";
	}
	counter5+=1;
}

var counter6 = 0;
function overlayer6(){
	var overlay = document.getElementById("pane6");
	if (counter6%2 == 0){
		overlay.style.transform = "scale(1.05)";
		overlay.style.opacity = "0.9";
		overlay.style.zIndex = "1";	
	}
	else{
		overlay.style.transform = "1";
		overlay.style.opacity = "0";
		overlay.style.zIndex = "0";
	}
	counter6+=1;
}


var counter7 = 0;
function overlayer7(){
	var overlay = document.getElementById("pane7");
	if (counter7%2 == 0){
		overlay.style.transform = "scale(1.05)";
		overlay.style.opacity = "0.9";
		overlay.style.zIndex = "1";	
	}
	else{
		overlay.style.transform = "1";
		overlay.style.opacity = "0";
		overlay.style.zIndex = "0";
	}
	counter7+=1;
}

var counter8 = 0;
function overlayer8(){
	var overlay = document.getElementById("pane8");
	if (counter8%2 == 0){
		overlay.style.transform = "scale(1.05)";
		overlay.style.opacity = "0.9";
		overlay.style.zIndex = "1";	
	}
	else{
		overlay.style.transform = "1";
		overlay.style.opacity = "0";
		overlay.style.zIndex = "0";
	}
	counter8+=1;
}