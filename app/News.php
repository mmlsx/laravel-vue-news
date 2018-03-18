<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
	protected $table = "news";// 与模型关联的数据表
	public $timestamps = true; //是否自动维护时间戳
    protected $fillable = [
        'title', 'content'
    ];
}
