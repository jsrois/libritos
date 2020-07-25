package net.jsrois.libritos.book

import org.springframework.stereotype.Repository

@Repository
class BookRepository {
    companion object {
        private val books: MutableList<Book> = mutableListOf(
                Book("The Communist Manifesto", "Karl Marx, Friedrich Engels"),
                Book("A Dónde Va el Capitalismo Español", "Pedro Ramiro, Erika González"),
                Book("Historical Capitalism","Immanuel Wallerstein"),
                Book("Abolish Silicon Valley","Wendy Liu"),
                Book("The Rise of Neoliberal Feminism","Catherine Rottenberg"),
                Book("Dangerous Liaisons - the marriages and divorces of Marxism and Feminism","Cinzia Aruzzo"),
                Book("Tocar Fondo","Manuel Gabarre"),
                Book("La farsa de las startups: la cara oculta del mito emprendedor", "Javier López Menacho"),
                Book("De la especulación al derecho a la vivienda", "Raquel Rodríguez, Mario Espinoza"),
                Book("The Origin of Capitalism","Ellen M. Wood"),
                Book("Breve Historia del Neoliberalismo","David Harvey"),
                Book("La vaga de la canadenca","Ferrán Aisa"),
                Book("Estrategias contra la gentrificación","Lisa Vollmer"),
                Book("Out of the Wreckage","George Monbiot"),
                Book("Feminism for the 99%","Nancy Fraser"),
                Book("The ABCs of Socialism","Jacobin"),
                Book("In Defense of Housing: The Politics of Crisis","David Madden and Peter Marcuse"),
                Book("Hope in the Dark","Rebecca Solnit"),
                Book("Marx: The alternative to Capitalism","Kieran Allen"),
                Book("Fighting Fascism", "Clara Zetkin"),
                Book("Socialism...Seriously","Danny Katch"),
                Book("Propaganda Blitz", "David Cromwell,David Edwards"),
                Book("Papel Mojado","Mongolia")
        )
    }

    fun findAll(): List<Book> = books

    fun add(book: Book) {
        books.add(book)
    }
}
