<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'firts_name',
        'last_name',
        'middle_name',
        'address',
        'department_id',
        'country_id',
        'state_id',
        'city_id',
        'zip_code',
        'birthdate',
        'date_hired',
    ];

    protected $casts = [
        'birthdate' => 'datetime:Y-m-d',

        'date_hired' => 'datetime:Y-m-d',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }
    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function scopeSearch($query, $term)
    {
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('firts_name', 'like', $term)
                ->orWhere('last_name', 'like', $term)
                ->orWhere('address ', 'like', $term)
                ->orWhereHas('department', function ($query) use ($term) {
                    $query->where('name', 'like', $term);
                });
        });
    }
}
