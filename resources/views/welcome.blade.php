<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <!-- Styles -->

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<!-- onload="onLoadFunct()" -->

<body id="bg-img">
    <div id="app">
        <!-- <router-link to="/">Home </router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/work">Prtfolio</router-link>
        <router-link to="/contact">Contact</router-link> -->

        <!-- <hr> -->

        <router-view> </router-view>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
    <!-- <script src="/js/app.js"></script> -->
    <!-- <script type="text/javascript" src="/js/main.js"></script> -->

</body>

</html>