<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;

Route::get("/", [WelcomeController::class, "index"]);

require __DIR__ . "/auth.php";

require __DIR__ . "/ecommerce.php";
require __DIR__ . "/dashboard.php";
require __DIR__ . "/dashboard_api.php";

require __DIR__ . "/datatables/dashboard.php";
require __DIR__ . "/datatables/ecommerce.php";
