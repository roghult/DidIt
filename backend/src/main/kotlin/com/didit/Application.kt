package com.didit

import com.didit.routes.registerHabitRoutes
import com.didit.repositories.HabitRepositoryInMemory
import com.didit.models.Habit
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.serialization.*


private val habitRepository = HabitRepositoryInMemory(
    Habit(
        id="1",
        name="Habit 1",
    ),
    Habit(
        id="2",
        name="Habit 2",
    ),
    Habit(
        id="3",
        name="Habit 3",
    ),
    Habit(
        id="4",
        name="Habit 4",
    ),
)


fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

fun Application.module(testing: Boolean = false) {
    install(ContentNegotiation) {
        json()
    }
    install(CORS) {
        allowCredentials = true
        allowNonSimpleContentTypes = true
        method(HttpMethod.Options)
        method(HttpMethod.Post)
        method(HttpMethod.Get)
        anyHost()
    }
    registerHabitRoutes(habitRepository)
}
