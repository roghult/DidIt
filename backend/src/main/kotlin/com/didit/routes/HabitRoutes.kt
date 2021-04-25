package com.didit.routes

import com.didit.models.Habit
import com.didit.repositories.HabitRepositoryInMemory
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*

private val habitRepository = HabitRepositoryInMemory()

fun Route.habitRouting() {
    route("/habit") {
        get {
            call.respond(habitRepository.allHabits())
        }
        get("{id}") {
            val id = call.parameters["id"] ?: return@get call.respondText(
                "Missing or malformed id",
                status = HttpStatusCode.BadRequest,
            )
            val habit = habitRepository.withId(id) ?: return@get call.respondText(
                "No habit found with that ID",
                status = HttpStatusCode.NotFound
            )
            call.respond(habit)
        }
        post {
            val habit = call.receive<Habit>()
            habitRepository.add(habit)
            call.respondText("Habit stored correctly", status = HttpStatusCode.Created)
        }
        delete("{id}") {
            val id = call.parameters["id"] ?: return@delete call.respond(HttpStatusCode.BadRequest)
            if (habitRepository.delete(id)) {
                call.respondText("Habit removed successfully", status = HttpStatusCode.Accepted)
            } else {
                call.respondText("No habit found with that ID", status = HttpStatusCode.NotFound)
            }
        }
    }
}

fun Application.registerHabitRoutes() {
    routing {
        habitRouting()
    }
}
