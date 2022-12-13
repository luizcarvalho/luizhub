<h1 align="center">
    <img alt="FicandoOnline" title="#FicandoOnline" src=".images/header.jpg" width="100%" />
</h1>

<h4 align="center">
 LuizHub
</h4>

<p align="center">
  <a href="#information_source-o-que-é-o-ficando-online">O que é o LuizHub?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :information_source: O que é o LuizHub?

O LuizHub é uma aplicação feita em React Native que permite salvar um perfil com informações como nome da pessoa e uma foto, e possibilita consultar um repositório que armazena dados.

Como ele funciona? O app consome uma API externa, no caso, a API pública do Github ou uma fake API com json-server.

Esse projeto é utilizado no curso 4 da formação base de React Native da plataforma da Alura.

<h1 align="center">
    <img alt="Demonstracao" title="Demonstracao" src=".images/ficando-online-newdesign.gif" width="400px" />
</h1>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com a utilização das seguintes tecnologias:

- [React Native][rn]
- [Expo][expo]

## :information_source: Como usar

Para copiar e executar essa aplicação, você precisa de três pré-requisitos: [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] intalados no seu computador.

No terminal, digite os comandos a seguir:

### Baixar e instalar o projeto

```bash
# Clonar esse repositório
$ git clone https://github.com/luizcarvalho/reactapi.git

# Vá para o ropositório
$ cd reactapi

# Instale as dependências
$ npm install

# Rode a fake api
$ cd api
$ json-server --watch db.json

# Rode o ngrok
$ ngrok http 3000

```

### Executar o Mobile

```bash
# Execute em outro terminal (dentro da pasta luizhub)
$ expo start
```

[nodejs]: https://nodejs.org/
[expo]: https://docs.expo.dev/
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
