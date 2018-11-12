@extends('layouts.master')

@section('content')

<h1>Welcome Home</h1>
<p class="lead">This app will do CRUD for Task model with Laravel.</p>
<hr>

<a href="{{ route('tasks.index') }}" class="btn btn-info">View Tasks</a>
<a href="{{ route('tasks.create') }}" class="btn btn-primary">Add New Task</a>

@stop