<?php

namespace Tests\Feature;

use App\Goal;
use App\GoalAction;
use App\GoalMetric;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class GoalsAPITest extends TestCase
{
    use DatabaseMigrations;

    protected function assertValidationError($response, $field)
    {
        $response->assertStatus(422);
        $this->assertArrayHasKey($field, $response->decodeResponseJson());
    }

    /** @test */
    public function creating_a_goal_returns_its_id()
    {
        $response = $this->json('POST', 'api/goal', [
           'name' => 'Test Goal'
        ]);

        $response
            ->assertStatus(201)
            ->assertJson(['id' => 1, 'name' => 'Test Goal']);
    }

    /** @test */
    public function deleting_a_goal_deletes_itself_and_related_resources()
    {
        $goal = factory(Goal::class)->create();
        factory(GoalMetric::class, 3)->create(['goal_id' => $goal->id]);
        factory(GoalAction::class, 3)->create(['goal_id' => $goal->id]);

        $response = $this->json('DELETE', 'api/goal/' . $goal->id);

        $response->assertStatus(200)->assertJson([]);
        $this->assertEquals(0, Goal::all()->count());
        $this->assertEquals(0, GoalMetric::all()->count());
        $this->assertEquals(0, GoalAction::all()->count());
    }

    /** @test */
    public function a_goal_should_be_listed_with_its_metrics()
    {
        $goal = factory(Goal::class)->create();
        $metrics = factory(GoalMetric::class, 3)->create(['goal_id' => $goal->id]);

        $response = $this->json('GET', 'api/goal/'. $goal->id);

        $response->assertStatus(200)->assertJson(['metrics' => $metrics->toArray()]);
    }

    /** @test */
    public function a_goal_should_be_listed_with_its_actions()
    {
        $goal = factory(Goal::class)->create();
        $actions = factory(GoalAction::class, 3)->create(['goal_id' => $goal->id]);

        $response = $this->json('GET', 'api/goal/'. $goal->id);

        $response->assertStatus(200)->assertJson(['actions' => $actions->toArray()]);
    }

    /** @test */
    public function goal_without_a_name_is_not_created()
    {
        $response = $this->json('POST', 'api/goal', [
            'name' => null
        ]);

        $this->assertValidationError($response, 'name');
    }

    /** @test */
    public function a_goal_can_save_its_own_metric()
    {
        $goal = factory(Goal::class)->create();

        $response = $this->json('POST', 'api/goal/metrics', [
            'goal_id' => $goal->id,
            'metric' => ['name' => 'Metric 1'],
        ]);

        $response
            ->assertStatus(201)
            ->assertJson(['id' => 1, 'name' => 'Metric 1']);
    }

    /** @test */
    public function a_goal_can_save_its_own_actions()
    {
        $goal = factory(Goal::class)->create();

        $response = $this->json('POST', 'api/goal/actions', [
            'goal_id' => $goal->id,
            'action' => ['name' => 'Action 1', 'person' => 'John Doe'],
        ]);

        $response
            ->assertStatus(201)
            ->assertJson(['id' => 1, 'name' => 'Action 1', 'person' => 'John Doe']);
    }

    /** @test */
    public function only_a_metric_with_a_valid_name_can_be_created()
    {
        $goal = factory(Goal::class)->create();

        $response = $this->json('POST', 'api/goal/metrics', [
            'goal_id' => $goal->id,
            'metric' => ['name' => null],
        ]);

        $this->assertValidationError($response, 'metric.name');
    }

    /** @test */
    public function only_an_action_with_valid_name_and_person_can_be_created()
    {
        $goal = factory(Goal::class)->create();

        $response = $this->json('POST', 'api/goal/actions', [
            'goal_id' => $goal->id,
            'action' => ['name' => null, 'person' => null],
        ]);

        $this->assertValidationError($response, 'action.name');
        $this->assertValidationError($response, 'action.person');
    }
}
