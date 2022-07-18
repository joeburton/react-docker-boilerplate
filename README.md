# Docker React Boilerplate

## Docker for Development

### docker-compose.yml

```
$ docker-compose build
$ docker-compose up
```

## Docker for Production

```
docker build -t react-docker .
docker run -p 3000:80 react-docker

```
