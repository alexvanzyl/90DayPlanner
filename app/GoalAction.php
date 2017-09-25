<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GoalAction extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'person'];

    /**
     * An action belongs to a goal.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function goal()
    {
        return $this->belongsTo(Goal::class);
    }
}
