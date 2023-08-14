<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $fillable = ['survey_id', 'type', 'question', 'answer'];
    public $timestamps = false;

    public function survey()
    {
        return $this->belongsTo(Survey::class);
    }
}
