<?php

namespace App\Http\Controllers;

use App\Goal;
use App\GoalAction;
use Illuminate\Http\Request;

class GoalActionsController extends Controller
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
            'action.name' => 'required',
            'action.person' => 'required'
        ]);

        $action = Goal::createAction(request('goal_id'), request('action'));

        return response()->json($action, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\GoalAction  $goalAction
     * @return \Illuminate\Http\Response
     */
    public function show(GoalAction $goalAction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\GoalAction  $goalAction
     * @return \Illuminate\Http\Response
     */
    public function edit(GoalAction $goalAction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\GoalAction  $goalAction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GoalAction $goalAction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\GoalAction  $goalAction
     * @return \Illuminate\Http\Response
     */
    public function destroy(GoalAction $goalAction)
    {
        //
    }
}
