package com.didit

import com.didit.routes.registerHabitRoutes
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.serialization.*


fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

fun Application.module(testing: Boolean = false) {
    install(ContentNegotiation) {
        json()
    }
    install(CORS) {
        method(HttpMethod.Options)
        header(HttpHeaders.XForwardedProto)
        anyHost()
    }
    registerHabitRoutes()
}
