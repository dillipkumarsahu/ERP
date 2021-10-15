window.onload = function(){
	//step-1 ajax request
	showTeams("api/team?page=1");
}


$(document).ready(function(){
	$(".create-team-form").submit(function(e){
		e.preventDefault();
		var token = $("body").attr("token");
		$.ajax({
			type : "POST",
			url : "api/team",
			data : {
				_token : token,
				team_name : $(".team-name").val(),
				team_description : $(".team-description").val(),
				team_creator : $(".team-creator").val(),
				team_creator_role : $(".team-creator-role").val()
			},
			beforeSend : function(){
				$(".fullpage-loader").removeClass("d-none");
				$("#createTeamModal").modal('hide');
				$(".team-name").val("");
				$(".team-description").val("");
			},
			success : function(r){
				$(".fullpage-loader").addClass("d-none");
				var team_name = r.data.team_name;
				var team_description = r.data.team_description;

				var card = document.createElement("DIV");
				card.className = "card mt-2";

				var card_header = document.createElement("DIV");
				card_header.className = "card-header erpbg-default text-light";
				card_header.innerHTML = team_name;

				var card_bdy = document.createElement("DIV");
				card_bdy.className = "card-body";
				card_bdy.innerHTML = team_description;

				$(card).append(card_header);
				$(card).append(card_bdy);
				$(".teams-area").append(card);

			},
			error : function(ajax,error,response){
				$(".fullpage-loader").addClass("d-none");
				$("#createTeamModal").modal('hide');
				var alert = document.createElement("DIV");
				alert.className = "alert erpbg-warning d-flex align-items-center";

				if(ajax.status == 500)
				{
					alert.innerHTML = 'Internal Server Error';
					$(".teams-area").append(alert);

					//remove after 3 second
					setInterval(function(){
						alert.remove();
					},3000);
				}

				if(ajax.status == 404)
				{
					alert.innerHTML = response.notice;
					$(".teams-area").append(alert);

					//remove after 3 second
					setInterval(function(){
						alert.remove();
					},3000);
				}	
			}
		});
	});
});


/// show teams
function showTeams(url){
	var token = $("body").attr("token");
	$.ajax({
		type : "GET",
		url : url,
		data : {
			_token : token,
			fetch_type : "pagination"
		},
		beforeSend : function(){
			//$(".fullpage-loader").removeClass("d-none");
		},
		success : function(response)
		{
			//$(".fullpage-loader").addClass("d-none");
			$(".teams-area").html("");
			//show pagination number
			var start = response.data.from;
			var end = response.data.last_page;
			var total = "Total - "+response.data.total;
			$(".total-teams").html(total);
			//create pagination loop
			var ul = document.createElement("UL");
			ul.className = "pagination mt-4";
			var i;
			for(i = start;i<=end;i++)
			{	
				var li = document.createElement("LI");
				li.className = "page-item";
				$(ul).append(li);

				var a = document.createElement("A");
				a.className = "page-link";
				a.innerHTML = i;
				a.href = "api/team?page="+i;
				$(li).append(a);

				//get data onclick
				$(a).click(function(e){
					e.preventDefault();
					showTeams($(this).attr("href"));
				});
			}
			if ($(".teams-pagination").html() == "") 
			{
				$(".teams-pagination").append(ul);
			}

			response.data.data.forEach(function(data){
				var team_name = data.team_name;
				var team_description = data.team_description;

				var card = document.createElement("DIV");
				card.className = "card mt-2";

				var card_header = document.createElement("DIV");
				card_header.className = "card-header erpbg-default text-light";
				card_header.innerHTML = team_name;

				var card_bdy = document.createElement("DIV");
				card_bdy.className = "card-body";
				card_bdy.innerHTML = team_description;

				$(card).append(card_header);
				$(card).append(card_bdy);
				$(".teams-area").append(card);
			});

			//step-2 ajax request
			if ($(".show-jobroles").html() == "") 
			{
				// request data in ascending order
				showJobRoles("asc");
			}

		}
	});
}


//load team name in add role
$(document).ready(function(){
	$("#job-role").on("show.bs.collapse",function(){
		var token = $("body").attr("token");
		var all_option = $(".select-team-name option");

		// reset to default
		$(".edit-jobrole-submit-btn").html("Set Role");
		$(".edit-jobrole-submit-btn").attr("role","insert");
		$("#job-role form").trigger('reset');

		if (all_option.length == 1) 
		{
			$.ajax({
				type : "GET",
				url : "api/team",
				data : {
					_token : token,
					fetch_type : "getonlyteamname"
				},
				beforeSend : function(){
					$(".fullpage-loader").removeClass("d-none");
				},
				success : function(response)
				{
					$(".fullpage-loader").addClass("d-none");
					response.data.forEach(function(data){
						var team_name = data.team_name;
						var option = document.createElement("OPTION");
						option.innerHTML = team_name;
						$(".select-team-name").append(option);
					});
				}
			});
		}
	});
});


//insert jobrole
$(document).ready(function(){
	$(".job-role-form").submit(function(e){
		e.preventDefault();
		var role = $(".edit-jobrole-submit-btn").attr("role");
		var id = $("[name=id]").val();
		var type = "";
		var url = "";
		if (role == "insert") 
		{
			type = "POST";
			url = "api/jobrole";
		}
		if(role == "update")
		{
			type = "PUT";
			url = "api/jobrole/"+id;
		}
		$.ajax({
			type : type,
			url : url,
			data : {
				_token: $("body").attr("token"),
				id: id,
				job_role: $("[name=job_role]").val(),
				qualifications: $("[name=qualifications]").val(),
				certifications: $("[name=certifications]").val(),
				experience: $("[name=experience]").val(),
				salary: $("[name=salary]").val(),
				team_name: $(".select-team-name").val()
			},
			beforeSend : function(){
				$(".fullpage-loader").removeClass("d-none");
			},
			success : function(response){
				$(".fullpage-loader").addClass("d-none");
				
				// collapse add role form
				$("#job-role").collapse('hide');
				$("#job-role form").trigger('reset');

				// request data in descending order
				showJobRoles("desc");
			},
			error: function(xhr){
				if (xhr.status == 500) 
				{
					$(".fullpage-loader").addClass("d-none");
					$(".duplicate-jobrole").removeClass("d-none");
					$("[name=job_role]").addClass("animate__animated animate__shakeX");

					// remove duplicate message
					$("[name=job_role]").click(function(){
						$(".duplicate-jobrole").addClass("d-none");
						$("[name=job_role]").removeClass("animate__animated animate__shakeX");
					});
				}
			}
		});
	});
});

//show job roles
function showJobRoles(arrange_by){
	var token = $("body").attr("token");
	$.ajax({
		type: "GET",
		url: "api/jobrole",
		data: {
			_token: token,
			fetch_type: "pagination",
			arrange_by: arrange_by
		},
		success: function(response)
		{
			//prevent from extra append
			$(".show-jobroles").html("");
			var total = "Total - "+response.data.total;
			$(".total-jobroles").html(total);

			//create table
				var table = document.createElement("TABLE");
				table.className = "table table-bordered text-center erpbg-light";
				var th_row = document.createElement("TR");
				var th_jobrole = document.createElement("TH");
				var th_salary = document.createElement("TH");
				var th_teamname = document.createElement("TH");
				var th_action = document.createElement("TH");

				th_jobrole.innerHTML = "Role";
				th_salary.innerHTML = "Salary";
				th_teamname.innerHTML = "Work As";
				th_action.innerHTML = "A";

				$(th_row).append(th_jobrole);
				$(th_row).append(th_salary);
				$(th_row).append(th_teamname);
				$(th_row).append(th_action);

				$(table).append(th_row);
				$(".show-jobroles").append(table);

			response.data.data.forEach(function(data,index){
				var job_role = data.job_role;
				var salary = data.salary;
				var team_name = data.team_name;

				var tr = document.createElement("TR");
				if (index == 0 && arrange_by == "desc") 
				{
					$(tr).addClass("erpbg-success animate__animated animate__shakeX");

					setTimeout(function(){
						$(tr).removeClass("erpbg-success animate__animated animate__shakeX");
					},3000);
				}
				
				var td_jobrole = document.createElement("TD");
				var td_salary = document.createElement("TD");
				var td_teamname = document.createElement("TD");
				var td_action = document.createElement("TD");

				td_jobrole.innerHTML = job_role;
				td_salary.innerHTML = salary;
				td_teamname.innerHTML = team_name;
				td_action.innerHTML = "<button class='btn p-0 edit-jobrole' data='"+JSON.stringify(data)+"'><span class='material-icons'>create</span></button>";

				$(tr).append(td_jobrole);
				$(tr).append(td_salary);
				$(tr).append(td_teamname);
				$(tr).append(td_action);

				$(table).append(tr);
			});

			//edit jobrole
			$(".edit-jobrole").each(function(){
				$(this).click(function(){
					var all_data = $(this).attr("data");
					all_data = JSON.parse(all_data);

					var id = all_data.id;
					var job_role = all_data.job_role;
					var qualifications = all_data.qualifications;
					var certifications = all_data.certifications;
					var experience = all_data.experience;
					var salary = all_data.salary;
					var team_name = all_data.team_name;

					if ($("#job-role").collapse('show')) 
					{
						// write data to input field
						$("[name=id]").val(id);
						$("[name=job_role]").val(job_role);
						$("[name=qualifications]").val(qualifications);
						$("[name=certifications]").val(certifications);
						$("[name=experience]").val(experience);
						$("[name=salary]").val(salary);
						$("[name=team_name]").val(team_name);
					}
					else{
						// open add role collapsible form
						$("#job-role").collapse('show');

						// write data to input field
						$("[name=id]").val(id);
						$("[name=job_role]").val(job_role);
						$("[name=qualifications]").val(qualifications);
						$("[name=certifications]").val(certifications);
						$("[name=experience]").val(experience);
						$("[name=salary]").val(salary);
						$("[name=team_name]").val(team_name);
					}

					$(".edit-jobrole-submit-btn").html("Save Changes");
					$(".edit-jobrole-submit-btn").attr("role","update");
				});
			});
			// step-3 ajax request
			var limit = 4;
			showEmployees(limit);
		}
	});
}

// show job role in employee registration area
$(document).ready(function(){
	$("#add-employee").on("show.bs.collapse",function(){
		var token = $("body").attr("token");
		var all_option = $(".select-job-role option");

		// reset to default
		// $(".edit-jobrole-submit-btn").html("Set Role");
		// $(".edit-jobrole-submit-btn").attr("role","insert");
		// $("#job-role form").trigger('reset');

		if (all_option.length == 1) 
		{
			$.ajax({
				type : "GET",
				url : "api/jobrole",
				data : {
					_token : token,
					fetch_type : "get-jobrole-with-salary"
				},
				beforeSend : function(){
					$(".fullpage-loader").removeClass("d-none");
				},
				success : function(response)
				{
					$(".fullpage-loader").addClass("d-none");
					response.data.forEach(function(data){
						var job_role = data.job_role;
						var salary = data.salary;
						var option = document.createElement("OPTION");
						option.innerHTML = job_role;
						$(option).attr("salary",salary);
						$(".select-job-role").append(option);
					});
				}
			});
		}
	});
});

// set salary according to job role
$(document).ready(function(){
	$(".select-job-role").on("change",function(){
		var option_index = this.selectedIndex;
		//alert(option_index);
		var option = $(".select-job-role option");
		var salary = $(option[option_index]).attr("salary");
		$("input[name=salary]").val(salary);
	});
});

// add required attribute to worked before field
$(document).ready(function(){
	$("#agree-form").on("show.bs.collapse",function(){
		var input = $("#agree-form input");
		$(input).each(function(){
			$(this).attr("required","required");
		});
	});
});

// remove required attribute to worked before field
$(document).ready(function(){
	$("#agree-form").on("hide.bs.collapse",function(){
		var input = $("#agree-form input");
		$(input).each(function(){
			$(this).removeAttr("required");
		});
	});
});

// validate upload input from employee registration area
$(document).ready(function(){
	$("#add-employee input[type=file]").each(function(){
		$(this).on("change",function(){
			var file = this.files[0];
			var file_size = file.size;
			var file_type = file.type;

			// validate file size
			if (file_size < 3145728) 
			{
				if (file_type == "image/jpeg" || file_type == "image/jpg" || file_type == "image/png" || file_type == "image/gif") 
				{
					if(!$(this).next().hasClass("upload-message"))
					{
						$(this).next().remove();
					}

				}
				else{
					if(!$(this).next().hasClass("upload-message"))
					{
						$("<div class='upload-message d-flex align-items-center'><sapn class='material-icons text-danger mt-1' style='font-size:17px;'>error</sapn><span class='text-danger quicksand-font'>Uploaded File Is Not a Image</sapn></div>").insertAfter(this);
					}
				}
			}
			else{
				if(!$(this).next().hasClass("upload-message"))
				{
					$("<div class='upload-message d-flex align-items-center'><sapn class='material-icons text-danger mt-1' style='font-size:17px;'>error</sapn><span class='text-danger quicksand-font'>Upload Limit Less Than 3MB</sapn></div>").insertAfter(this);
					$(".upload-message").each(function(){
						$(this).prev().val("");
						if ($(this).prev().prev().hasClass("employee-avatar")) 
						{
							$(this).prev().prev().attr("src","assets/images/employee-avatar.png");
						}
					});
				}
			}

		});
	});
});

// validate employee pic
$(document).ready(function(){
	$(".employee-pic").on("change",function(){
		var file = this.files[0];
		var file_size = file.size;
		var file_type = file.type;

		// validate filesize 50kb
		if(file_size > 51200)
		{
			alert("large");
		}
		else{
			if (file_type == "image/jpg" || file_type == "image/jpeg" || file_type == "image/png" || file_type == "image/gif") 
			{
				var url = URL.createObjectURL(file);
				$(".employee-avatar").attr("src",url);
				$(".employee-avatar").css({
					width: "100%",
				});
			}
		}
	});
});

// validate salary sleep
$(document).ready(function(){
	$(".salary-sleep").on("change",function(){
		var file = this.files;
		var allfilesize = 0;
		if (file.length == 4) 
		{
			for (var i = 0; i < file.length; i++) 
			{
				allfilesize += file[i].size;
			}

			// validate filesize 12mb
			if(allfilesize > 12582912)
			{
				$(this).val("");
				alert("Filesize too large total upload limit 12mb");
			}
		}
		else{
			$(this).val("");
			alert("Upload 4 copies of salary sleep");
		}
	});
});

// show employees

function showEmployees(limit){
	var token = $("body").attr("token");

	$.ajax({
		type : "GET",
		url : "api/employee",
		data : {
			_token : token,
			fetch_type : "pagination",
			limit: limit
		},
		success : function(response){
			// prevent from extra append
			$("#show-employees .active .row").html("");

			// getting total number of employees
			var total = response.data.total;
			$(".total-employees").html(total);

			response.data.data.forEach(function(data){
				var name = data.employee_name;
				var image = data.employee_pic;
				var job_role = data.job_role;
				var primary_number = data.primary_contact;
				var secondary_number = data.secondary_contact;
				var city = data.city;

				// prepare ui
				var data = `<div class="col-md-3 text-center">
				<div class="d-flex flex-column align-items-center">
				<img src="`+image+`" width="100" class="rounded-circle">
				<span>`+name+`</span>
				<small>-`+job_role+`-</small>
				<div class="d-flex mt-2">
				<button class="mr-1 btn border rounded-0 d-flex justify-content-center align-items-center" style="width:30px;height:30px;">
				<span class="material-icons" style="font-size:15px;">call</sapn>
				</button>

				<button class="mr-1 btn border rounded-0 d-flex justify-content-center align-items-center" style="width:30px;height:30px;">
				<span class="material-icons" style="font-size:15px;">chat</sapn>
				</button>

				<button class="mr-1 btn border rounded-0 d-flex justify-content-center align-items-center" style="width:30px;height:30px;">
				<span class="material-icons" style="font-size:15px;">fiber_manual_record</sapn>
				</button>
				</div>
				</div>
				</div>`;

				$("#show-employees .active .row").append(data);
			});
		}
	});
}

// control input field when search by selected
$(document).ready(function(){
	$(".employees-search-by").on("change",function(){
		if ($(this).val() == "Search by") 
		{
			$(".employee-search-field").attr("disabled",true);
			$(".employee-search-field").attr("placeholder","Choose option from search by");
			$(".employee-search-field").removeClass("pl-0");
			$(".employee-search-field").val("");
		}
		else{
			var index = this.selectedIndex;
			var options = $("option",this);
			var current_option = options[index];

			// read attributes
			var data_type = $(current_option).attr("data-type");
			var data_hint = $(current_option).attr("data-hint");

			// writting type and hint in input field
			$(".employee-search-field").attr("type",data_type);
			$(".employee-search-field").attr("placeholder",data_hint);
			$(".employee-search-field").val("");
			$(".employee-search-field").attr("disabled",false);
			$(".employee-search-field").addClass("pl-0");
		}
	});
});

// show employee with limit 
$(document).ready(function(){
	$(".employee-search-limit").on("change",function(){
		var limit = $(this).val();
		showEmployees(limit);
	});
});