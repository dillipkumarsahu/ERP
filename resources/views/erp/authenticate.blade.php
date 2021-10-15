@if(!session()->get("authentication"))
    <script>
        window.location = "/";
    </script>
@endif

@extends("../template.default")

@section("title")
	WAP ERP SOLUTIONS
@endsection

@section("custom-css")
	<link rel="stylesheet" type="text/css"  href="{{url('/')}}/lang/css/authenticate.css?cache=<?php echo time();?>">
@endsection

@section("custom-js")
    <script type="text/javascript" src="{{url('/')}}/lang/js/adminRegister.js?cache=<?php echo time();?>"></script>
@endsection


@section("content")

    @if(session()->get("mac_authentication") == "notRegistered")
    <div class="page py-4">
        <div class="branding">
            <h1 class="text-white text-center">WES</h1>
            <p class="text-white text-center">WAP ERP SOLUTIONS</p>
        </div>
    <div class="px-4">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#admin" data-toggle="tab">ADMIN</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#employee" data-toggle="tab">EMPLOYEE</a>
        </li>

      </ul>

      <div class="tab-content py-4">
        <div id="admin" class="active tab-pane">
            <div class="alert alert-warning">
                <i class="fa fa-warning text-dark"></i>
                Register admin panel from your personal pc. Once you register, you only access your admin panel from this pc.
                <i class="fa fa-times-circle close mt-2 text-danger" data-dismiss="alert"></i>
            </div>
            <form class="admin-form" slug="{{ session()->get('authentication') }}">
                <div class="form-group">
                    <label>COMPANY ESTD</label>
                    <input type="date" class="form-control border-0 rounded-0 company-estd" name="company_estd">
                </div>

                <div class="form-group">
                    <label>PASSWORD</label>
                    <input type="password" class="form-control border-0 rounded-0 company-password" name="password" placeholder="******">
                </div>

                <div class="form-group mt-4">

                    <button class="btn btn-danger rounded-0 float-left">
                    <i class="fa fa-sign-in"></i>
                    REGISTER THIS PC
                    </button>

                    <div class="preloader">
                        <div class="spinner"></div>
                        <div class="spinner-2"></div>
                    </div>
                </div>
            </form>
        </div>

        <div id="employee" class="tab-pane fade">
            <form class="employee-form">
                <div class="form-group">
                    <label>USERNAME</label>
                    <input type="email" class="form-control border-0 rounded-0" name="username" placeholder="employee@wes.com">
                </div>

                <div class="form-group">
                    <label>PASSWORD</label>
                    <input type="password" class="form-control border-0 rounded-0" name="password" placeholder="******">
                </div>

                <div class="form-group mt-4">
                    <button class="btn btn-danger rounded-0 float-left">
                    <i class="fa fa-sign-in"></i>
                    LOGIN
                    </button>

                    <div class="preloader">
                        <div class="spinner"></div>
                        <div class="spinner-2"></div>
                    </div>

                </div>
            </form>
        </div>


      </div>
    </div>
    </div>
    @endif

    @if(session()->get("mac_authentication") == "admin")
    <div class="page py-4">
        <div class="branding">
            <h1 class="text-white text-center">WES</h1>
            <p class="text-white text-center">WAP ERP SOLUTIONS</p>
        </div>
    <div class="px-4">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#admin" data-toggle="tab">ADMIN</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#employee" data-toggle="tab">EMPLOYEE</a>
        </li>

      </ul>

      <div class="tab-content py-4">
        <div id="admin" class="active tab-pane">
            <form class="admin-form" slug="{{ session()->get('authentication') }}">
                <div class="form-group">
                    <label>COMPANY ESTD</label>
                    <input type="date" class="form-control border-0 rounded-0 company-estd" name="company_estd">
                </div>

                <div class="form-group">
                    <label>PASSWORD</label>
                    <input type="password" class="form-control border-0 rounded-0 company-password" name="password" placeholder="******">
                </div>

                <div class="form-group mt-4">

                    <button class="btn btn-danger rounded-0 float-left">
                    <i class="fa fa-sign-in"></i>
                    LOGIN
                    </button>

                    <div class="preloader">
                        <div class="spinner"></div>
                        <div class="spinner-2"></div>
                    </div>
                </div>
            </form>
        </div>

        <div id="employee" class="tab-pane fade">
            <form class="employee-form">
                <div class="form-group">
                    <label>USERNAME</label>
                    <input type="email" class="form-control border-0 rounded-0" name="username" placeholder="employee@wes.com">
                </div>

                <div class="form-group">
                    <label>PASSWORD</label>
                    <input type="password" class="form-control border-0 rounded-0" name="password" placeholder="******">
                </div>

                <div class="form-group mt-4">
                    <button class="btn btn-danger rounded-0 float-left">
                    <i class="fa fa-sign-in"></i>
                    LOGIN
                    </button>

                    <div class="preloader">
                        <div class="spinner"></div>
                        <div class="spinner-2"></div>
                    </div>

                </div>
            </form>
        </div>


      </div>
    </div>
    </div>
    @endif

    @if(session()->get("mac_authentication") == "employee")
    <div class="page py-4">
        <div class="branding">
            <h1 class="text-white text-center">WES</h1>
            <p class="text-white text-center">WAP ERP SOLUTIONS</p>
        </div>
    <div class="px-4">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#employee" data-toggle="tab">EMPLOYEE</a>
        </li>

      </ul>

      <div class="tab-content py-4">
        <div id="employee" class="tab-pane active">
            <form class="employee-form">
                <div class="form-group">
                    <label>USERNAME</label>
                    <input type="email" class="form-control border-0 rounded-0" name="username" placeholder="employee@wes.com">
                </div>

                <div class="form-group">
                    <label>PASSWORD</label>
                    <input type="password" class="form-control border-0 rounded-0" name="password" placeholder="******">
                </div>

                <div class="form-group mt-4">
                    <button class="btn btn-danger rounded-0 float-left">
                    <i class="fa fa-sign-in"></i>
                    LOGIN
                    </button>

                    <div class="preloader">
                        <div class="spinner"></div>
                        <div class="spinner-2"></div>
                    </div>

                </div>
            </form>
        </div>


      </div>
    </div>
    </div>
    @endif

@endsection
