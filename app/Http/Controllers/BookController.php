<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
      return  Inertia::render('/',Book::all());

    }


    public function show($id)
    {
      $book = Book::where('id', $id)->get()->toArray();
      $book2 = Book::where('id', '4')->get();

      // $similar_books = Book::where('category', $book->category)->get()->take(3);

      return Inertia::render('SingleProduct', ['book' => $book, 'book2' => $book2]);
    }
}
