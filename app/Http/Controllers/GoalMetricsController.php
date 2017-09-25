<?php

namespace App\Http\Controllers;

use App\Goal;
use App\GoalMetric;
use Illuminate\Http\Request;

class GoalMetricsController extends Controller
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
            'metric.name' => 'required'
        ]);

        $metric = Goal::createMetric(request('goal_id'), request('metric'));

        return response()->json($metric, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\GoalMetric  $goalMetric
     * @return \Illuminate\Http\Response
     */
    public function show(GoalMetric $goalMetric)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\GoalMetric  $goalMetric
     * @return \Illuminate\Http\Response
     */
    public function edit(GoalMetric $goalMetric)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\GoalMetric  $goalMetric
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GoalMetric $goalMetric)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\GoalMetric  $goalMetric
     * @return \Illuminate\Http\Response
     */
    public function destroy(GoalMetric $goalMetric)
    {
        //
    }
}
