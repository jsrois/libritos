package net.jsrois.libritos.controllers

import org.junit.jupiter.api.Test
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.get
import org.springframework.test.web.servlet.setup.MockMvcBuilders

class BookControllerShould {

    @Test
    internal fun `return all books`() {


        val bookController = BookController()

        val backend = MockMvcBuilders.standaloneSetup(bookController).build()

        backend.get("/books")
                .andExpect {
                    status { isOk }
                    content { contentType(MediaType.APPLICATION_JSON) }
                    content {
                        json("""[{"title":"The Communist Manifesto by Karl Marx and Friedrich Engels"}]""".trimMargin())
                    }
                }

    }
}