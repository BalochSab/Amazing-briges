// ------subscribed form------
function subscrib(){
	var blk = document.getElementById("mail");
	if (!blk.checkValidity()) {

		alert("Please put your Email first.");
	}else {
		alert("Thank you for Subscribing!");
	}
}
// ------more datail-----
function dtl(a){
	document.getElementById('bigimg').src = a
}
// --------------gallery------------
function galimg(a){
document.getElementById("bgimg").src = a;
}