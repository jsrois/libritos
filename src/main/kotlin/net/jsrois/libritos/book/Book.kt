package net.jsrois.libritos.book

data class Book(
        val title: String,
        val author: String,
        val alreadyRead: Boolean = true,
        val imageUrl: String? = null
)