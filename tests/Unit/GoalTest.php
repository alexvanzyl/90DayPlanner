<?php

namespace Tests\Unit;

use Mockery;
use App\Goal;
use App\GoalMetric;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class GoalTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_goal_can_create_its_own_metric()
    {
        $goal = factory(Goal::class)->create();


        $metric = Goal::createMetric($goal->id, [
            'name' => 'Metric Name'
        ]);

        $this->assertEquals('Metric Name', $metric->name);
    }

    /** @test */
    public function a_goal_can_create_its_own_action()
    {
        $goal = factory(Goal::class)->create();


        $action = Goal::createAction($goal->id, [
            'name' => 'Action Name',
            'person' => 'John Doe'
        ]);

        $this->assertEquals('Action Name', $action->name);
    }
}
