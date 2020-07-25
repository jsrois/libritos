package net.jsrois.libritos.controllers

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class AuthController {

    @PostMapping("/auth")
    fun authenticate() = true
}