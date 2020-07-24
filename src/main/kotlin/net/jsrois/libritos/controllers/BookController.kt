package net.jsrois.libritos.controllers

import net.jsrois.libritos.book.Book
import net.jsrois.libritos.book.BookRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class BookController {

    @Autowired
    lateinit var bookRepository : BookRepository

    @GetMapping("/books")
    fun allBooks(): List<Book> = bookRepository.findAll()

    @PostMapping("/books")
    fun addBook(@RequestBody book: Book) = bookRepository.add(book)
}

