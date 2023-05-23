<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;


class BookSeed extends Seeder
{
    /**
     * Run the database seeds.
     */

    /**
     * Open Library
     * https://openlibrary.org/subjects/fiction.json?limit={limit}&offset={offset}
     */

    public function run()
    {
        
        $apiKey = 'AIzaSyA57NM7q9SyG0Fr5EDpBFYsnKErc8im_T8';
    $category = 'Fiction'; // Replace with your own category
    $author = 'J.+K.+Rowling';
    // $response = Http::get('https://www.googleapis.com/books/v1/volumes?q=subject:' . $category . '&orderBy=relevance&maxResults=40&key=' . $apiKey);
    $response = Http::get('https://www.googleapis.com/books/v1/volumes?q=inauthor:' . $author . '&orderBy=relevance&maxResults=40&key=' . $apiKey);
    // $response = Http::get('https://openlibrary.org/subjects/fiction.json?limit=1');
    
    
    if ($response->failed()) {
        // Handle the errorS
    } else {
        $bookData = $response->json();
 
        dump($bookData);
        foreach ($bookData['items'] as $value) {      
            $data = $value['volumeInfo'];
            // dump($data['readingModes']);
            Book::updateOrCreate([
                'title'=>array_key_exists('title', $data) ? $data['title'] : '',
                'author'=>array_key_exists('authors', $data) ? $data['authors'][0] : '',
                'description'=>array_key_exists('description', $data) ? $data['description'] : '',
                'year'=>array_key_exists('publishedDate', $data) ? $data['publishedDate'] : '',
                'pages'=>array_key_exists('pageCount', $data) ? $data['pageCount'] : 1, 
                'image'=>array_key_exists('imageLinks', $data) ? $data['imageLinks']['thumbnail'] : ''
            ]);        
        }
    }

    }
}
