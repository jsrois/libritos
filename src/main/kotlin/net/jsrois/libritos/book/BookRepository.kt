package net.jsrois.libritos.book

import org.springframework.stereotype.Repository

@Repository
class BookRepository {
    companion object {
        private val books: MutableList<Book> = mutableListOf(Book("The Communist Manifesto", "Karl Marx and Friedrich Engels"))
    }

    fun findAll(): List<Book> = books

    fun add(book: Book) {
        books.add(book)
    }
}
