# Detalhes da camada de front-end

###Apoio: 

  - [angular](https://angular.io/);
  - [@angular-cli](https://cli.angular.io/);
  - [flatlab](http://thevectorlab.net/flatlab/#);
  - [fontawesome](http://fontawesome.io/);


### Linguagens utilizadas:
  - HTML
  - CSS | Sass
  - JS | Typescript
  
### Dependências do projeto: 
  - {dependência} (versão {versão})

### Arquitetura:
  - OOP


# Utilizando o template:

### Compile

Entrar na pasta /code pelo terminal e executar os seguintes comandos: 

	npm install (versão 6.9 do node ou superior)

	ng serve

## Injeção dos templates e dependêcias

Todas as dependências devem ser instaladas via cli com o comando --save-dev, ao final.

Com relação aos templates, manter em arquivos separados, da mesma forma que já é proposto pelo @angular-cli, na criação de componentes.

### Javacript

Todas as classes devem ser criadas via @angula-cli e escritas em Typescript. Mantendo a estrutura proposta pelo mesmo.
	
### CSS

Neste projeto utilizaremos Sass, desta forma, o @angular-cli foi configurado de inicio para tal extensão.

### Imagem

Existe um diretório assets/img, neste devem ser colocadas todas as imagens utilizadas no projeto.
O npm, além de move-las ao destino também já é executada a otimização das mesmas.

### Fonts

Todas as fontes devem ser colocadas no diretório assets/fonts, o npm fará a cópia das mesmas para a o diretório de destino.

### Json

Qualquer dado que precise ser carregado via json, deve ser disponibilizado no diretório assets/data. 
O npm fará a cópia dos arquivos para a o diretório de destino.

# Importante

- Realizar o GitFlow antes de inciar o desenvolvimento.
- Fazer commits regulares, sempre descrevendo no máximo de detalhes o que foi feito.
- Sempre executar a task ```ng build prod``` antes de publicar.






