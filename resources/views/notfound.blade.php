@extends("template.default")

@section("title")
	Congrats !
@endsection

@section("custom-css")
	<link rel="stylesheet" type="text/css" href="../lang/css/congrats.css?cache=<?php echo time(); ?>">
@endsection

@section("content")
	
	<div class="page">
		<i class="fa fa-warning icon text-danger"></i>
		<h1 class="text-danger">Oops ! Page Not Found</h1>
	</div>

@endsection