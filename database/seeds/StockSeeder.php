<?php

use Illuminate\Database\Seeder;
use App\Stock;

class StockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $ch = curl_init();
        $url = "https://api.intrinio.com/historical_data?identifier=QCOM&item=close_price&start_date=2017-06-01&end_date=2018-06-01";
        $username = "b7095d651ce3ef200f62d719c91a257a";
        $password = "41de9d72d9278e3d05180dc699107420";
        curl_setopt_array($ch, [
            CURLOPT_USERPWD => $username.':'.$password,
            CURLOPT_URL     => $url,
            CURLOPT_RETURNTRANSFER => true,
        ]);
        $response = curl_exec($ch);
        curl_close($ch);
        $datas = json_decode($response)->data;
        DB::table('stock')->delete();
        foreach($datas as $data) {
            Stock::create(array(
                'date' => $data->date,
                'value' => $data->value
            ));
        }
    }
}
