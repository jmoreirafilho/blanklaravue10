<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <!-- CSRF Token -->
    <link rel="manifest" href="/manifest.json" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('css/google-material-roboto.css') }}" rel="stylesheet">
    <meta name="msapplication-TileColor" content="#20467B">

    <!-- Apple -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="#20467B">
    <meta name="apple-mobile-web-app-title" content="{{ config('app.name', 'Blank') }}">

    <title>{{ config('app.name') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <app app-name="{{ config('app.name') }}">
            <template slot="content">
                @yield('content')
            </template>
        </app>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
