package com.didit.models
import kotlinx.serialization.Serializable

@Serializable
data class Habit(
    val id: String,
    val name: String,
)
