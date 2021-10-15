
//slide to next
$(document).ready(function(){
	$(".step-1-next-btn").click(function(e){
		e.preventDefault();
		empty_field_validation("step-1","step-2");
	});

	$(".step-2-next-btn").click(function(e){
		e.preventDefault();
		empty_field_validation("step-2","step-3");
	});

	$(".step-3-next-btn").click(function(e){
		e.preventDefault();
		empty_field_validation("step-3","step-4");
	});
});
//validation on next click
function empty_field_validation(first_class,second_class){

	var container = document.getElementsByClassName(first_class)[0];
	var input = container.getElementsByClassName("required");
	var url = container.getElementsByClassName("url");
	var tem = [];
	$(input).each(function(i){
		if($(this).val().trim() == "")
		{
			if(this.nextSibling.nodeName == "SMALL")
			{
				this.nextSibling.remove();
			}
			$(this).addClass("border-danger");
			$("<small class='text-danger required-notice'><i class='fa fa-warning'></i> This field can't be empty</small>").insertAfter(this);
		}
		else{
			tem[i] = $(this).val().trim();
			if(this.type == "email")
			{
				validate_email(this);
			}
		}
	});

	//validate url field 
	$(url).each(function(){
		if($(this).val().trim() != "")
		{
			validate_url(this);
		}
	});
	//slide if all required field is not empty
	if (tem.length == input.length && $(".required-notice").length == 0) 
	{
		company_validation(first_class,second_class);
	}

	//remove required notice on input
	$(input).each(function(){
		$(this).on("input",function(){
			if(this.nextSibling.nodeName == "SMALL")
			{
				$(this).removeClass("border-danger");
				this.nextSibling.remove();
			}
		});
	});

	//remove url notice on input
	$(url).each(function(){
		$(this).on("input",function(){
			if(this.nextSibling.nodeName == "SMALL")
			{
				$(this).removeClass("border-danger");
				this.nextSibling.remove();
			}
		});
	});
}

//validate email
function validate_email(input)
{
	var reg_exp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if(!reg_exp.test(input.value))
	{
		if(input.nextSibling.nodeName == "SMALL")
			{
				input.nextSibling.remove();
			}
			$(this).addClass("border-danger");
			$("<small class='text-danger required-notice'><i class='fa fa-warning'></i> Enter a valid email</small>").insertAfter(input);
	}
}

//validate url
function validate_url(input)
{
	var reg_exp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 

	if(!reg_exp.test(input.value))
	{
		if(input.nextSibling.nodeName == "SMALL")
			{
				input.nextSibling.remove();
			}
			$(this).addClass("border-danger");
			$("<small class='text-danger required-notice'><i class='fa fa-warning'></i> Enter a valid URL</small>").insertAfter(input);
	}
}

//validate company name
function company_validation(first_class,second_class){
	var company_name = $(".company-name").val().trim();
	var company_slug = company_name.replace(/ /g,"");
	var input = document.querySelector(".company-name");
	
	var erp_url = window.location+"erp/"+company_slug;
	$.ajax({
		type : "get",
		url : "/erp/"+company_slug,
		data : {
			_token : $("body").attr("token")
		},
		success : function(){
			if(input.nextSibling.nodeName == "SMALL")
			{
				input.nextSibling.remove();
			}
			$(this).addClass("border-danger");
			$("<small class='text-danger required-notice'><i class='fa fa-warning'></i> Company name already exist !</small>").insertAfter(input);
		},

		error : function(){
			$(".erp-url").val(erp_url);
			$(".company-slug").val(company_slug);
			generate_password();
			$("."+first_class).addClass("d-none");
			$("."+second_class).removeClass("d-none");
		}
	});
}

//generate password
function generate_password(){
	var password = "!a@(Gklso@9))&$ldjk_oPOnJKmS^+!%#JjHbM";
	var i;
	var final_password = " ";
	for(i=0;i<8;i++)
	{
		var index = Math.random()*password.length-1;
		index = Math.floor(index);
		final_password += password[index];
	}
	$(".password").val(final_password);
}


//slide to back
$(document).ready(function(){
	$(".step-2-back-btn").click(function(e){
		e.preventDefault();
		$(".step-2").addClass("d-none");
		$(".step-1").removeClass("d-none");
	});

	$(".step-3-back-btn").click(function(e){
		e.preventDefault();
		$(".step-3").addClass("d-none");
		$(".step-2").removeClass("d-none");
	});

	$(".step-4-back-btn").click(function(e){
		e.preventDefault();
		$(".step-4").addClass("d-none");
		$(".step-3").removeClass("d-none");
	});
});