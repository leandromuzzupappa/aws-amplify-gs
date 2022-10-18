# AWS Amplify Tutorial w/ React

Amplify permite crear apps basadas en multiples servicios de AWS para poder subir imagenes, bases de datos, autenticacion, despliegue, etc.

En el getting started se crea una app basica con React y la app se conecta con AWS IAM, autenticar usuarios con AWS Cognito y crea una API de GraphQL con AWS AppSync y se hace el despliegue de la app con AWS Amplify.

## Instalacion

```bash
npm install -g @aws-amplify/cli
```

## Configuracion

```bash
> amplify configure # Configurar el CLI de Amplify
```

## Iniciar proyecto

```bash
> amplify init # Iniciar proyecto
```

## Crear proyecto

```bash
> amplify add auth # autenticacion con AWS Cognito (email, password, phone, etc)
> amplify add api # API GraphQL con AWS AppSync
> amplify add hosting # despliegue de la app con AWS Amplify
> amplify push # subir los cambios a AWS
```

## Desplegar proyecto

```bash
> amplify publish # desplegar la app

```
