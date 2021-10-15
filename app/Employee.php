<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [
    	"employee_name",
    	"employee_email",
    	"job_role",
    	"salary",
        "employee_pic",
    	"residential_proof",
    	"qualification_proof",
    	"certification_proof",
    	"primary_contact",
    	"secondary_contact",
    	"dob",
    	"gender",
    	"street_address",
    	"city",
    	"pincode",
    	"state",
    	"country",
    	"company_name",
    	"experience",
    	"previous_salary",
    	"salary_sleep"
    ];
}
