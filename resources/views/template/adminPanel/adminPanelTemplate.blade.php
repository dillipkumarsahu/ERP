<!DOCTYPE html>
<html lang="en">
<head>
  <title>@yield("title")</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="lang/css/adminPanel/adminPanelTemplate.css?catch=<?php echo time(); ?>">
  <link rel="stylesheet" type="text/css" href="lang/css/customFramework.css?catch=<?php echo time(); ?>">
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
  <!-- start custom css -->
  	@yield("custom-css")
  <!-- end custom css -->

  <!-- start custom js -->
  	@yield("custom-js")
  <!-- end custom js -->

</head>
<body class="bg-light" token="{{csrf_token()}}">

<div class="container-fluid px-0">
	<div class="sidenav shadow-sm bg-white p-4">
		<center>
			<div class="admin-profile">
				<span class="material-icons" style="font-size: 
				60px;">
					account_circle
				</span>
				<h5 class="quicksand-font">Hi ! Admin</h5>
			</div>
		</center>

		<div class="admin-menu my-4">
			<ul class="navbar-nav">
				<li class="d-flex align-item-center">
					<span class="material-icons mr-2">
						group_work
					</span>
					<a href="/teamdesign" class="quicksand-font">
						Team Design
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="page">

		<!-- start navbar -->
		<nav class="navbar navbar-expand-lg py-3">
		  <a class="navbar-brand" href="#">Navbar</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul class="navbar-nav mr-auto">
		      <li class="nav-item active">
		        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Link</a>
		      </li>
		      <li class="nav-item dropdown">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          Dropdown
		        </a>
		        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a class="dropdown-item" href="#">Action</a>
		          <a class="dropdown-item" href="#">Another action</a>
		          <div class="dropdown-divider"></div>
		          <a class="dropdown-item" href="#">Something else here</a>
		        </div>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link disabled" href="#">Disabled</a>
		      </li>
		    </ul>
		  </div>
		</nav>
		<!-- end navbar -->
		<div class="admin-area p-3">
			@yield("content")
		</div>
	</div>
</div>
<!-- start full page loader -->
<div class="fullpage-loader d-none">
	<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div>
</div>
<!-- end full page loader -->
</body>
</html>