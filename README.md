## 使用 Laravel5.5 + Vue 开发的新闻管理项目

开发环境:

| 软件包 | 版本 |
| --- | --- |
| Php | 7.0 |
| Server | nginx |
| Laravel | 5.5 |
| Vue | > 2.0 |
| axios | > 0.17.0 |
| vue-router | > 3.0 |
| vuex | > 3.0 |
| bootstrap | 4.0.0 |
| MySQL | > 5.5 |


## 安装
首先从 `github` 克隆项目到本地
```
git clone https://github.com/mmlsx/laravel-vue-news.git
```

安装 Laravel 开发依赖
```
composer install
composer dump-autoload  // 生成自动加载文件
```

安装前端依赖
```
npm install
```

创建数据迁移
```
使用命令创建数据表迁移
php artisan migrate
```

填充测试数据
```
首先要创建数据库，根据自己的配置创建
php artisan db:seed
```

## 运行 
```
npm run dev  // 打包前端资源
或 npm run watch // 实时监测前端资源更新，并编译
```

## 配置服务器

### 1.使用内置服务器
```
php artisan serve // 开启 web 服务

```
打开浏览器访问 http://localhost:8000 查看效果

### 2.配置nginx虚拟主机
```nginx
	server {
		listen       80;
		server_name  www.laravel-vue-news.com laravel-vue-news.com;
			index  index.php index.html index.htm;
		root   "Your project path";
		location / {
		    try_files $uri $uri/ /index.php?$query_string;
		    #autoindex  on;
		}
		location ~ \.php(.*)$ {
		    fastcgi_pass   127.0.0.1:9000;
		    fastcgi_index  index.php;
		    fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
		    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
		    fastcgi_param  PATH_INFO  $fastcgi_path_info;
		    fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
		    include        fastcgi_params;
		}
	}
```
打开浏览器访问 http://www.laravel-vue-news.com 查看效果
