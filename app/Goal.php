<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name'];

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['metrics', 'actions'];

    /**
     * Create a metric for the goal.
     *
     * @param int   $id
     * @param array $metric
     *
     * @return \App\GoalMetric
     */
    public static function createMetric($id, array $metric)
    {
        return self::findOrFail($id)->metrics()->create($metric);
    }

    /**
     * Create an action for the goal.
     *
     * @param int   $id
     * @param array $action
     *
     * @return \App\GoalAction
     */
    public static function createAction($id, array $action)
    {
        return self::findOrFail($id)->actions()->create($action);
    }

    /**
     * A goal can have many metrics.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function metrics()
    {
        return $this->hasMany(GoalMetric::class);
    }

    /**
     * A goal can have many actions.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function actions()
    {
        return $this->hasMany(GoalAction::class);
    }

}
