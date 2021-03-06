<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
        <title>laravel-vue-vuerouter-vuex-axios</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
    <script type="text/javascript">
        var Laravel = {
            // 设置 csrfToken
            csrfToken: '{{ csrf_token() }}' 
        };
    </script>
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</html>