/*post comment*/
function postComment(){
	var postcmt = document.getElementById("postcomment");
	var postreply = document.getElementById("postreply");
	if (postcmt.style.display != "block" && postreply.style.display != "block") {
		postcmt.style.display = "block";
		postreply.style.display = "block";
	} else {
		postcmt.style.display = "none";
		postreply.style.display = "none";
	}
}

/*comment reply*/
function cmtReply(){
	var cmtreply = document.getElementById("cmtreply");
	if (cmtreply.style.display != "block") {
		cmtreply.style.display = "block";
	}
}

/*post photo input*/

const realfile = document.getElementById("real-photo-input");
const customfile = document.getElementById("custom-photo-input");
const customtxt = document.getElementById("custom-txt");
customfile.addEventListener("click", function(){
	realfile.click();
});
realfile.addEventListener("change", function(){
	if (realfile.value) {
		customtxt.innerHTML = "<span class='text-success'>Photo selected!</span>";
	} else {
		customtxt.innerHTML = "Select a photo.";
	}
});



/*message photo input*/

const msgphoto = document.getElementById("msgphoto");
const custommsgphoto = document.getElementById("custommsgphoto");
const custommsgtxt = document.getElementById("custommsgtxt");
custommsgphoto.addEventListener("click", function(){
	msgphoto.click();
});
msgphoto.addEventListener("change", function(){
	if (msgphoto.value) {
		custommsgtxt.innerHTML = "Photo selected!";
	}
});

/*popup message box hide show*/
function popupmsgboxshow(){
	var popupmsgbox = document.getElementById("popupmsgbox");
	if (popupmsgbox.style.display != "block") {
		popupmsgbox.style.display = "block";
	}
}

/*rightbar messege list*/
function rightpopupmsgshow(){
	var rightpopupmsg = document.getElementById("rightpopupmsg");
	if (popupmsgbox.style.display != "block") {
		popupmsgbox.style.display = "block";
	}
}

function popupmsghide(){
	var popupmsgbox = document.getElementById("popupmsgbox");
	if (popupmsgbox.style.display != "none") {
		popupmsgbox.style.display = "none";
	}
}
function popupmsgcollapse(){
	var popupmsgbox = document.getElementById("popupmsgbox");
	if (popupmsgbox.style.bottom != "-297px") {
		popupmsgbox.style.bottom = "-297px";
	} else {
		popupmsgbox.style.bottom = "0";
	}
}