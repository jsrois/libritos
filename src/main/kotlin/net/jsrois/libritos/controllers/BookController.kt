package net.jsrois.libritos.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

data class Book(val title: String)

@RestController
class BookController {
    @GetMapping("/books")
    fun allBooks() = listOf(Book("The Communist Manifesto by Karl Marx and Friedrich Engels"))
}

