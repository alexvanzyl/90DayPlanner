<?php

namespace Tests;

use App\Exceptions\Handler;
use Illuminate\Support\Facades\Schema;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function setUp()
    {
        parent::setUp();

        // SQLite foreign key constraints are disabled by default.
        // So let's go ahead and enable them here, for testing.
        Schema::enableForeignKeyConstraints();
    }

    protected function disableExceptionHandling()
    {
        $this->app->instance(ExceptionHandler::class, new class extends Handler {
            public function __construct() {}
            public function report(\Exception $e) {}
            public function renderForConsole($output, \Exception $e) {}
            public function render($request, \Exception $e) {
                throw $e;
            }
        });
    }
}
