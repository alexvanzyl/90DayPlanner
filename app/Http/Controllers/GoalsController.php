<?php

namespace App\Http\Controllers;

use App\Goal;
use Illuminate\Http\Request;

class GoalsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
       $this->validate(request(), [
           'name' => 'required'
       ]);

       $goal = Goal::create(request()->all());

        return response()->json($goal, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Goal  $goal
     * @return \Illuminate\Http\Response
     */
    public function show(Goal $goal)
    {
        return response()->json($goal);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Goal  $goal
     * @return \Illuminate\Http\Response
     */
    public function update(Goal $goal)
    {
        $goal->update([
            'name' => request('name')
        ]);

        return response()->json([]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Goal  $goal
     * @return \Illuminate\Http\Response
     */
    public function destroy(Goal $goal)
    {
        if (! $goal->delete()) {
            return abort(404);
        }

        return response()->json([]);
    }
}
