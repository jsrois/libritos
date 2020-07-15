package net.jsrois.libritos.acceptance.page_objects

import org.openqa.selenium.By
import org.openqa.selenium.WebDriver

class MainPage(private val driver: WebDriver, port: Int) {

    private val url = "http://localhost:${port}/"

    init {
        print("url is $url")
    }

    fun visit() = driver.get(url)

    fun title(): String? = driver.findElement(By.id("page-title")).text

    fun books(): List<String> =
            driver.findElements(By.cssSelector(".book .book__title")).map { it.text }

    fun addNewBookWith(title: String, author: String) {
        driver.findElement(By.cssSelector("input.bookTitle")).sendKeys("$title by $author")
        // driver.findElement(By.cssSelector("input.bookAuthor")).sendKeys(author)
        driver.findElement(By.cssSelector("input.submitNewBook")).click()
    }
}