package com.didit.repositories

import com.didit.models.Habit

interface HabitRepository {
    fun add(habit: Habit)
    fun allHabits(): List<Habit>
    fun withId(id: String): Habit?
    fun delete(id: String): Boolean
}

class HabitRepositoryInMemory: HabitRepository {
    private val habits = mutableListOf<Habit>()

    override fun add(habit: Habit) {
        habits.add(habit)
    }

    override fun allHabits(): List<Habit> {
        return habits
    }

    override fun withId(id: String): Habit? {
        return habits.singleOrNull { it.id == id }
    }

    override fun delete(id: String): Boolean {
        return habits.removeIf { it.id == id }
    }

}
