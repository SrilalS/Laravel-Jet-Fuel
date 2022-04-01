<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Vinuri',
            'email' => 'admin@vam.lk',
            'password' => Hash::make('password'),
            'role' => 'admin'
        ]);
    }
}
