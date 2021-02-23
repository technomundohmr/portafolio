@extends('layouts.layout')

@section($titulo = "Andres Rincon")
@section($estilo = "index")
@section('content')
@include('layouts.navbar')
<div class="fondo-dark" id="fondo">
    @include('index.section1')
    @include('index.section2')
</div>
@endsection
