# Todo App Plan

## 1. Application Features

- Пользователь может создавать задачу

- Пользователь может редактировать задачу

- Пользователь может удалять задачу

- Пользователь может отмечать задачу выполненой

- Пользователь может очищать список задачь

- Пользователь может искать задачу

- Пользователь может фильтровать задачу

## 2. Task Data Structure

Задача:

- id
- title
- completed
- createdAt
- completedAt
- updatedAt

## 3. Functions List

- createTask()
- updateTask()
- deleteTask()
- toggleTask()
- cleanTaskList()
- searchTask()

## 4. DOM Elements

Task App

-Header / Title

-Input Section
-- Input (поле ввода задачи)
-- Add Button (кнопка добавления)

-Filters
--All tasks
--Active tasks
--Completed tasks

-Search Section
-- Input (поле ввода поиска)
-- Search Button (кнопка искать)

-Task List Container
--Task Item
---Checkbox
---Task Text
---Delete Button

--Task Item
---Checkbox
---Task Text
---Delete Button

-Footer
--Tasks counter
--Clear completed button
