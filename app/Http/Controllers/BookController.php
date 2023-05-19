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

      return Inertia::render('SingleProduct', ['book' => $book]);
    }
}
