
$google_URL = 'https://maps.googleapis.com/maps/api/place/details/json';
$api = 'AIzaSyAHQzVbDSLvoAP4wJgRQpm7y8XXY1KUV9E';
$place = 'ChIJexDWKjAnGEcRl4EbYC5gvRI';    
// $field = [
//     'user_ratings_total',
//     'rating'
// ];
    
// $fields =  join(",", $field);
// $result_url = $google_URL.'?placeid='.$place.'&fields='.$fields.'&key='.$api;
$result_url = $google_URL.'?placeid='.$place.'&key='.$api;
$result_content = file_get_contents($result_url);
$json_data = json_decode($result_content, true);

if ( isset($json_data) && $json_data['status'] === 'OK' ) {
    echo json_encode($json_data['result']);
}else {
    echo json_encode($json_data['error_message']);
}

header("content-type: application/json");