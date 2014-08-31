/*
* Quick script to allow users to upload an image via localStorage
* and re-display the image as a Data URI
*/

var userUpload = document.getElementById("user-upload");
var userImage = document.getElementById("user-image");

(function(){

	userUpload.addEventListener("change", function(){

		var reader = new FileReader();

		reader.onload = function(e){
			window.localStorage.setItem("image-base64", e.target.result);
			getImage();
		};
		// parse first item in files list array as DataURL
		reader.readAsDataURL(this.files[0]);

	});
	
	function getImage(){
		userImage.src = window.localStorage.getItem("image-base64");
	}
	
	getImage();

})();