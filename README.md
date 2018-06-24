# IlegraStarwars

Um [PWA](https://developers.google.com/web/progressive-web-apps/) desenvolvido para o desafio FrontEnd Ilegra.

## Tecnologias Utilizadas:

* Aplicação desenvolvida utilizando do NG-CLI 6.
* *ServiceWorker* para cacheamento de recursos, desenvolvido com ngsw.
* *Lazy Routes*, com chunks separados para cada módulo da aplicação.
* Build básico do Bootstrap 4, trazendo ferramentas basicas como Flex Layout.
* Material Icons.
* YouTube API.

## Notas do Desenvolvedor
> Optei por não utilizar um framework de UI junto ao Angular para não sobrecarregar a aplicação, tendo em vista de se tratar de uma aplicação simples.


## Rodando a Aplicação

Para executar a aplicação em *localhost*, basta executar:
``` bash
ng serve
```

### PWA
Para testar o PWA:
``` bash
ng serve --host 0.0.0.0
```
E acessar de qualquer smartphone na mesma rede pela URL `<ip do host>:4200`.
Após isso, pode-se adicionar o site à tela inicial:
![Add to home screen](https://s3.amazonaws.com/GoRoost-Heroku/wp-content/uploads/2015/07/add-to-homescreen-add-button-3.png)


Se deseja testar o PWA e as funcionalidades Offline:

``` bash
ng build --prod
```

Logo após, deve-se submeter os códigos gerados em `/dist/ilegra-starwars/` à algum servidor preparado com HTTPS, uma vez que [SW's não irão se registrar a partir de um domínio nao seguro](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers).
