<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string("employee_name",50);
            $table->string("employee_email",100);
            $table->string("job_role",50);
            $table->float("salary",8,2);
            $table->mediumText("employee_pic");
            $table->mediumText("residential_proof");
            $table->mediumText("qualification_proof");
            $table->mediumText("certification_proof");
            $table->bigInteger("primary_contact");
            $table->bigInteger("secondary_contact");
            $table->date("dob");
            $table->string("gender",10);
            $table->mediumText("street_address");
            $table->string("city",50);
            $table->integer("pincode");
            $table->string("state",50);
            $table->string("country",50);

            $table->string("company_name",50)->nullable();
            $table->integer("experience")->nullable();
            $table->float("previous_salary",8,2)->nullable();
            $table->mediumText("salary_sleep")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
