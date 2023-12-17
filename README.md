# Устанавливаем зависимости
`npm i`

# Запускаем сервер
`npm run server`

Слушает порт 3001
# Запускаем фронт

`npm run dev`

Слушает порт 3000

# Как заставить работать с другим документом?

1. Кидаем в корень нужный файл .rtf формата. Обязательно должен называться `ri.rtf`
2. Парсим rtf в txt `npm run parse`
2. Скачиваем утилиту iconv на комп и запускаем
`npm run iconv` (на виндовс и линукс присутствует, про мак не уверен (возможно, стоит использовать `Docker`?) )
3. Создаем документ с именем `ri.docx`, открываем и перекидываем
туда содержимое файла `test.txt`
4. Готово.


