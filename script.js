
window.onload = init;
function init(){

}

function changeContent(page){

	var c = document.getElementsByClassName("summary")[0];

	if(page.id == "index-link"){

		c.innerHTML = "\
		<p>Hi, I'm Sarabeth. </p>\
		\
		<p>Woman in tech. Former Microsoft. Current Tech Educator @ Unloop. </p> \
		\
		<p>Seattle living via Maryland. Alumna of RPI. </p> \
		\
		<p>Forever lover of animals. </p>\
		\
		<p>Live intentionally.</p> \
		\
		";
	}

	else if(page.id == "work-link"){

		c.innerHTML	= "\
		\
		<h2> Currently @ Unloop </h2>\
		<ul><li> breaking the prison cycle through technical education. </li></ul> \
		\
		<h2> Formerly @ Microsoft </h2>\
		<ul><li> Visual Studio, File Explorer, and XBox One teams. </li></ul>\
		\
		<h2> Shtuff </h2>\
		<ul><li> Founder of ACM-W at RPI. Founder of Free Hug Friday at RPI. :) </li></ul>\
		\<br>\
		<p>Passionate about tech with <em>impact</em>. </p>\
\
		<a href='#'> resume </a>\
		";
	}

	else if(page.id == "speaking-link"){

		c.innerHTML = "\
		<h2> Previously @ </h2>\
		<ul>\
			<li> Seattle Linux/GNU Conference 2017 </li>\
			<li> DevFest Czech Republic 2017 </li>\
			<li> Ignite Panel </li>\
		</ul>\
		<h2> Topic Areas </h2>\
	<ul>\
		<li> Non-profit Tech </li>\
		<li> Developing for the web/mobile </li>\
		<li> Women in Technology </li>\
		<li> LGBT in Technology </li>\
	</ul>";
	}

	else if(page.id == "contact-link"){

		c.innerHTML = "\
		<h2> sarabethjaffe [@] gmail.com </h2>;";
	}
}


$(function () {
        var fileName = "Sarabeth_Jaffe_Resume.pdf";
        $("#trigger").click(function () {
            $("#dialog").dialog({
                modal: false,
                width: 550,
                height: 670,
                open: function () {
                    var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"530px\" height=\"650px\">";
                    object += "If you are unable to view file, you can download from <a href = \"{FileName}\">here</a>";
                  object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
                    object += "</object>";
                    object = object.replace(/{FileName}/, fileName);
                    $("#dialog").html(object);
                }
            });
        });
    });