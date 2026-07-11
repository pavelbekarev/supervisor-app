# Supervisor App
- приложение для отслеживания статусов задач.
https://supervisor-app-iota.vercel.app/

Этот проект создан как пример моего подхода к разработке frontend-приложений. Основной акцент сделан не на функциональности, а на качестве архитектуры, типизации, организации кода и соблюдении современных практик React-разработки.

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
<img width="305" height="593" alt="image" src="https://github.com/user-attachments/assets/ac53f7e7-cfaa-4c0f-a382-b39bdc85e87d" />




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

1. User 1
- email: admin@mail.ru
- password: 123456

2. User 2
- email: user@mail.ru
- password: qwerty

Пользователи имеют одинаковые права и ничем не отличаются
