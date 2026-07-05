# Supervisor App
- приложение для отслеживания статусов задач.
https://supervisor-app-iota.vercel.app/

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
- Feature-Sliced Design

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
<img width="246" height="509" alt="image" src="https://github.com/user-attachments/assets/64c0fb6c-ac68-4054-a529-760e14a4efd4" />



## Установка
1. git clone https://github.com/pavelbekarev/supervisor-app.git
2. cd supervisor-app
3. npm install
4. npm run dev

## API
Для получения данных используется JSONPlaceholder.
https://jsonplaceholder.typicode.com/

## Авторизация в приложении
- замоканы два тестовых пользователя

1. 
- email: admin@mail.ru
- password: 123456

2. 
- email: user@mail.ru
- password: qwerty

Пользователи имеют одинаковые права и ничем не отличаются
