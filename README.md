# Приложение Погода

Это простое приложение для просмотра информации о погоде, которое позволяет пользователям просматривать данные о погоде для выбранных городов. Приложение создано с использованием React и интегрирует API OpenWeather для получения данных о погоде.

## Особенности

- Выбор города из списка доступных городов.
- Просмотр данных о текущей погоде и прогноза погоды на пять дней для выбранного города.
- Опция просмотра данных о погоде на основе геолокации пользователя.

## Начало работы

1. Клонируйте репозиторий;
2. Перейдите в директорию проекта:
cd weather-app
3. Установите зависимости:
npm install
4. Запустите сервер разработки:
npm start
5. Откройте веб-браузер и перейдите по адресу `http://localhost:3000`, чтобы увидеть приложение в действии.

## Использование

Выберите город из списка, для которого вы хотите узнать погоду.
Нажмите на кнопку "Fetch Weather Data" для получения текущей погоды и прогноза на ближайшие пять дней.

## Технологии

React
React-Yandex-Maps
Axios

## Примечание

Для работы с API OpenWeather необходимо указать свой API-ключ в файле services/weatherService.js. Замените ваш-ключ на фактический ключ.
