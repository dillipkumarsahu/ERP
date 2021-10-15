@extends("template.default")


@section("title")
	Wap Erp Solutions
@endsection


@section("custom-css")
	<link rel="stylesheet" href="lang/css/welcome.css?catch=<?php echo time(); ?>">
@endsection


@section("custom-js")
	<script src="lang/js/welcome.js?catch=<?php echo time(); ?>"></script>
@endsection





@section("content")
	
	<div class="container bg-white shadow-lg my-2" style="min-height: 90vh">
		<div class="row">
			<div class="col-md-6 p-0 welcome-image"></div>
			<div class="col-md-6 py-5">
				<div class="branding">
					<h1>WES</h1>
					<p>WAP REP SOLUTIONS</p>
				</div>

				<div class="welcome-form p-3">
					<form autocomplete="off" class="signup-form" action="/api/company" method="post">
						@csrf
						<!-- start step 1 -->
						<div class="step-1">
							<input type="text" name="company_name" class="form-control welcome-form-input rounded-0 required company-name" placeholder="Company name" value="dk" maxlength="85">

							<input type="text" name="company_slug" class="form-control welcome-form-input rounded-0 mt-4 d-none company-slug" placeholder="Company slug" maxlength="85">

							<input type="url" name="erp_url" class="form-control welcome-form-input rounded-0 mt-4 d-none erp-url" placeholder="ERP URL">

							<input type="password" name="password" class="form-control welcome-form-input rounded-0 mt-4 d-none password" placeholder="Password" maxlength="9">

							<input type="text" name="tagline" class="form-control welcome-form-input rounded-0 mt-4" placeholder="Tagline" value="dk vision" maxlength="100">

							<input type="website" name="website" class="form-control welcome-form-input rounded-0 mt-4 url" placeholder="Website"
							value="https://www.dkvis.com" maxlength="100">

							<input type="email" name="company_email" class="form-control welcome-form-input rounded-0 mt-4 required" placeholder="Company Email" value="sahudillipkumar466@gmail.com" maxlength="100">

							<input type="text" name="founder" class="form-control welcome-form-input rounded-0 mt-4 required" placeholder="Founder" value="Dillip Kumar" maxlength="85">

							<input type="email" name="founder_email" class="form-control welcome-form-input rounded-0 mt-4 required" placeholder="Founder Email" value="sahudillipkumar466@gmail.com" maxlength="100">

							<div class="mt-4 w-100">
								<button class="btn float-right next-btn step-1-next-btn">NEXT <i class="fa fa-angle-double-right"></i></button>
							</div>
						</div>
						<!-- end step 1 -->

						<!-- star step 2 -->
						<div class="step-2 d-none">
							<input type="number" name="contact_number" class="form-control welcome-form-input rounded-0 required" placeholder="Contact number" value="934864745" maxlength="15">

							<input type="text" name="street_address" class="form-control welcome-form-input rounded-0 mt-4 required" placeholder="Street address" value="chasipada,amarda road,basta">

							<input type="text" name="city" class="form-control welcome-form-input rounded-0 mt-4 required" placeholder="City" value="Balasore" maxlength="85">

							<input type="text" name="state" class="form-control welcome-form-input rounded-0 mt-4 required" placeholder="State" value="Odisha" maxlength="85">

							<input type="text" name="country" class="form-control welcome-form-input rounded-0 mt-4 required" placeholder="Country"
							 value="India" maxlength="85">

							<input type="number" name="pincode" class="form-control welcome-form-input rounded-0 mt-4 required" placeholder="Pincode" value="756030" maxlength="10">

							<div class="mt-4 w-100">
								<button class="btn float-left back-btn step-2-back-btn"><i class="fa fa-angle-double-left"></i> BACK</button>

								<button class="btn float-right next-btn step-2-next-btn">NEXT <i class="fa fa-angle-double-right"></i></button>
							</div>
						</div>
						<!-- end step 2 -->

						<!-- start step 3 -->
						<div class="step-3 d-none">
							<input type="text" name="gstin" placeholder="GSTIN" class="form-control welcome-form-input rounded-0" value="DK5236" maxlength="20">
							
							<label class="mt-3">Office start at</label>
							<input type="time" name="office_start_at" class="form-control welcome-form-input rounded-0 required" value="10:00">

							<label class="mt-3">Office end at</label>
							<input type="time" name="office_end_at" class="form-control welcome-form-input rounded-0 required" value="05:00">

							<label class="mt-3">Established in</label>
							<input type="date" name="company_estd" class="form-control welcome-form-input rounded-0 required">

							<input type="url" name="facebook_url" placeholder="Facebook page url" class="form-control welcome-form-input rounded-0 mt-4 url" value="https://facebook.com/dkvis">

							<input type="url" name="twitter_url" placeholder="Twitter page url" class="form-control welcome-form-input rounded-0 mt-4 url" value="https://twitter.com/dkvis">

							<div class="mt-4 w-100">
								<button class="btn float-left back-btn step-3-back-btn"><i class="fa fa-angle-double-left"></i> BACK</button>

								<button class="btn float-right next-btn step-3-next-btn">NEXT <i class="fa fa-angle-double-right"></i></button>
							</div>
						</div>
						<!-- end step 3 -->

						<!-- start step 4 -->
						<div class="step-4 d-none">
							<input type="number" name="whats_app" placeholder="What's app number" class="form-control welcome-form-input rounded-0 mt-4" value="7561526388" maxlength="15">

							<label class="mt-4">Category</label>
							<select name="category" class="form-control rounded-0 required">
								<option>Education</option>
							</select>

							<div class="mt-4 w-100">
								<button class="btn float-left back-btn step-4-back-btn"><i class="fa fa-angle-double-left"></i> BACK</button>

								<button type="submit" class="btn float-right submit-btn rounded-0">SUBMIT</button>
							</div>
						</div>
						<!-- end step 4 -->
					</form>
				</div>
			</div>
		</div>
	</div>


@endsection