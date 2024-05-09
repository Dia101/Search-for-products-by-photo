require('dotenv').config();
const { ClarifaiStub, grpc } = require('clarifai-nodejs-grpc');


// Инициализация стаба Clarifai
const stub = ClarifaiStub.grpc();

// Создание метаданных для авторизации
const metadata = new grpc.Metadata();
metadata.set('authorization', `Key ${process.env.CLARIFAI_KEY}`);

// Проверка ключа API путём запроса списка моделей
stub.listModels({}, metadata, (err, response) => {
  if (err) {
    console.error('Ошибка при проверке ключа API:', err);
  } else {
    console.log('Ключ API работает корректно. Получен список моделей:', response);
  }
});
