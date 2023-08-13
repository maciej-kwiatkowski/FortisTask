<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Fortis</title>
    <link rel="icon" type="image/x-icon" href="{{ asset('') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    @vite('resources/css/app.css')
    @yield('style')
</head>
<body>
<div id="app">
    <div class="container mx-auto">
        @yield('content')
    </div>
</div>
</body>
@yield('js')
@vite('resources/js/app.js')
</html>

