package net.jsrois.libritos.acceptance

import io.github.bonigarcia.wdm.WebDriverManager
import net.jsrois.libritos.acceptance.page_objects.MainPage
import org.hamcrest.MatcherAssert.assertThat
import org.hamcrest.core.Is.`is`
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.chrome.ChromeOptions
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.web.server.LocalServerPort
import java.util.concurrent.TimeUnit

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class LibritosPageShould {

    @LocalServerPort
    val port = 0

    val webDriver: WebDriver = WebDriverManager.chromedriver().setup().run {
        ChromeDriver(ChromeOptions().apply {

            addArguments(
                    "--headless",
                    "--no-sandbox",
                    "--disable-gpu",
                    "--disable-dev-shm-usage"
            )
        }).apply {
            manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS)
        }
    }

    @Test
    fun `load`() {
        val mainPage = MainPage(webDriver, port)
        mainPage.visit()
        assertThat(mainPage.title(), `is`("Libritos"))
    }

    @Test
    internal fun `allow to add books to the list`() {
        val mainPage = MainPage(webDriver, port)

        mainPage.visit()

        mainPage.login("some-user", "some-password")


        mainPage.addNewBookWith(title="The Communist Manifesto", author="Karl Marx & Friedrich Engels")

        assertThat(mainPage.books(), `is`(listOf("The Communist Manifesto by Karl Marx & Friedrich Engels")))
    }
}