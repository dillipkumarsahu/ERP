<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_registrations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('company_name',85);
            $table->string('company_slug',85);
            $table->string('tagline',100)->nullable();
            $table->string('website',100)->nullable();
            $table->string('company_email',100);
            $table->string('founder',85);
            $table->string('founder_email',100);
            $table->bigInteger('contact_number');
            $table->string('street_address');
            $table->string('city',85);
            $table->string('state',85);
            $table->string('country',85);
            $table->bigInteger('pincode');
            $table->string('gstin',20)->nullable();
            $table->time('office_start_at');
            $table->time('office_end_at');
            $table->date('company_estd');
            $table->string('facebook_url')->nullable();
            $table->string('twitter_url')->nullable();
            $table->bigInteger('whats_app')->nullable();
            $table->string('category',50);
            $table->string('erp_url');
            $table->string('password',70);
            $table->string('admin_mac_address',200)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company_registrations');
    }
}
