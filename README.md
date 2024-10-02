Documentation for Kitties Store
1. Описание запуска приложения
1.1. Установка необходимых зависимостей
Убедитесь, что у вас установлен Node.js и npm.

Вы можете проверить это, выполнив в терминале команды:
bash
复制代码
node -v
npm -v
Если у вас их нет, скачайте и установите Node.js.
Установите зависимости для backend (FastAPI):

Перейдите в корневую директорию проекта (где находится ваш requirements.txt файл) и выполните команду:
bash
复制代码
pip install -r requirements.txt
Убедитесь, что у вас установлен Python (рекомендуется версия 3.7 и выше). Если Python не установлен, вы можете скачать его с официального сайта.
Установите зависимости для frontend (React):

В корневой директории проекта выполните команду:
bash
复制代码
npm install
1.2. Запуск сервера
Для запуска сервера FastAPI выполните команду:

bash
复制代码
uvicorn main:app --reload
Здесь main — это имя вашего файла FastAPI, а app — это экземпляр FastAPI.
Дополнительно, для работы с базой данных (если используется SQLite):

Убедитесь, что файл базы данных создан (например, database.db). Это может быть сделано автоматически при первом запуске приложения, если вы настроили FastAPI для создания базы данных.
1.3. Запуск фронтенда
В другом терминале перейдите в директорию фронтенда и выполните команду:
bash
复制代码
npm run dev
Это запустит ваше React-приложение. Обычно оно будет доступно по адресу: http://localhost:3000.
2. Документация в формате Swagger
Swagger UI доступен по адресу: http://localhost:8000/docs.
Swagger автоматически генерирует документацию API на основе ваших маршрутов FastAPI. Вы можете использовать этот интерфейс для тестирования и проверки всех конечных точек API.
3. Минимум данных для проверки работоспособности приложения
3.1. Создание новых котов
Для создания нового кота используйте следующие данные в формате JSON:

json
复制代码
{
  "name": "Kitty",
  "age": 2,
  "color": "Black",
  "description": "A playful kitty",
  "type": "Siamese"
}
Для отправки POST-запроса используйте URL:
bash
复制代码
POST http://localhost:8000/cat
3.2. Получение всех котов
Для получения списка всех котов отправьте GET-запрос:

bash
复制代码
GET http://localhost:8000/cat
3.3. Получение кота по ID
Для получения информации о конкретном коте используйте его ID:

bash
复制代码
GET http://localhost:8000/cat/{catId}
3.4. Удаление кота
Чтобы удалить кота, используйте его ID:

bash
复制代码
DELETE http://localhost:8000/cat/{catId}
3.5. Обновление информации о коте
Для обновления информации о конкретном коте отправьте PUT-запрос с новыми данными:

json
复制代码
{
  "name": "Updated Kitty",
  "age": 3,
  "color": "White",
  "description": "An updated playful kitty",
  "type": "Bengal"
}
URL:
bash
复制代码
PUT http://localhost:8000/cat/{catId}
Заключение
Эта документация даст вам возможность разрабатывать и тестировать приложение "Kitties Store" с помощью API, а также использовать интерфейс Swagger для удобного взаимодействия с конечными точками вашего приложения.