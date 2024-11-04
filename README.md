# Hackaton MTS AI client

## Запуск в докере

```bash
docker build --build-arg BACKEND_URL=<your BACKEND_URL> -t react-starter .
```

```bash
docker run -d -p 3000:80 --name react-container react-starter
```

## Запуск на локалке

```bash
git clone https://github.com/rasskkazov/hackatonAI.git
cd ./hackatonAI
npm i
```

```bash
BACKEND_URL=<your backend address> npm run start
```

_или подставить адрес бека в файл_ [.env.default](./.env.default) _в переменную_ **BACKEND_URL_DEFAULT** _и выполнить:_

```bash
npm run start
```
