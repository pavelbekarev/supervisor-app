# Supervisor App
- приложение для отслеживания статусов задач.

## Стек
- React
- TypeScript
- React Router
- Zustand
- TanStack Query
- Axios
- Yup
- SCSS
- Vite

## Возможности
- Авторизация пользователя
- Просмотр списка задач
- Добавление задачи
- Редактирование задачи
- Удаление задачи
- Пагинация
- Кастомный Dropdown
- Модальные окна
- Валидация форм

## Архитектура - Feature-Sliced Design
features/
│
├── Authorization
├── AddTodo
├── EditTodo
├── Pagination
├── CustomDropdown

entities/
│
├── Todo
├── User

shared/
│
├── api
├── hooks
├── ui

## Установка
1. git clone https://github.com/pavelbekarev/supervisor-app.git
2. cd supervisor-app
3. npm install
4. npm run dev

## API
Для получения данных используется JSONPlaceholder.
https://jsonplaceholder.typicode.com/

