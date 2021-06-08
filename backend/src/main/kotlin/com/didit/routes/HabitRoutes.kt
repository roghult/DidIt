package com.didit.routes

import com.didit.models.Habit
import com.didit.repositories.HabitRepository
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlinx.serialization.Serializable

@Serializable
data class HabitResponse(
    val habits: List<Habit>,
)

fun Route.habitRouting(habitRepository: HabitRepository) {
    route("/habits") {
        get {
            call.application.environment.log.info("GET /habits")
            call.respond(HabitResponse(habitRepository.allHabits()))
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
            call.application.environment.log.info("POST /habits")
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

fun Application.registerHabitRoutes(habitRepository: HabitRepository) {
    routing {
        habitRouting(habitRepository)
    }
}
