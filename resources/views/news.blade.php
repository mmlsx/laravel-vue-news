<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Laravel-vue-vuex-axios</title>
	<link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
	<!-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> -->
</head>
<body>
	<div id="app1" class="container">
		<router-view class="view"></router-view>
	</div>
	<script>
		var Laravel = {
			// 设置csrfToken 
			csrfToken: '{{ csrf_token() }}'
		}
	</script>
	<script src="{{ mix('js/manifest.js') }}"></script>
	<script src="{{ mix('js/vendor.js') }}"></script>
	<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>