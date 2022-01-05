<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'username' => 'Super Admin',
            'first_name' => 'Jonh',
            'last_name' => 'Doe',
            'email' => 'superadmin@example.com',
            'password' => bcrypt('superadmin123')
        ]);
    }
}
