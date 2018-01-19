# Aplicação Desaparecidos-RJ (Web)

## Introdução ##

O Sistema de Gerenciamento de Desaparecidos (nome provisório), idealizado no âmbito do projeto Desaparecidos-RJ (nome provisório), é um sistema sendo desenvolvido por um grupo de voluntários da Universidade Federal do Estado do Rio de Janeiro (UNIRIO) em colaboração com a Delegacia de Descoberta de Paradeiros (DDPA) da Polícia Civil do Estado do Rio de Janeiro.

Esse sistema é composto de duas aplicações, uma web e uma móvel, que, quando combinadas, permitem aos usuários do aplicativo móvel pesquisar por pessoas desaparecidas com base em dados de descrição física. Assim, através do uso dessa nova ferramenta, assistentes sociais, enfermeiras, policiais e outros agentes públicos terão uma chance de descobrirem mais facilmente a identidade de pessoas sem identificação, o que poderá colaborar para um aumento no número de casos de desaparecimento solucionados.

## Funcionamento ##

O sistema web é desenvolvido em Python 3, utilizando o framework Django (versão 1.1). Apresenta opções para cadastro e busca de pessoas desaparecidas e usuários, provendo busca apenas para desaparecidos, que, assim, como no caso do aplicativo móvel, é baseada em características físicas. A principal função da aplicação web é permitir aos policiais e funcionários da DDPA cadastrar pessoas desaparecidas e manter e gerenciar esses dados.

O aplicativo móvel, presente neste repositório, é desenvolvido em Javascript/Typescript, utilizando o framework Ionic, o que permite que sejam suportadas as plataformas Android e iOS. É o componente que ficará nas mãos daqueles que lidam com pessoas sem identificação, ou seja, assistentes sociais, funcionários de serviços de saúde, policiais, dentre outros. 

A comunicação entre essas duas partes é feita através de uma API simples, constituída de um método, que permite ao aplicativo móvel efetuar buscas no webserver.

![planning_1_crop_small](https://user-images.githubusercontent.com/6119173/35132273-8b8ec8e4-fcb1-11e7-8910-70e5e126680e.png)

## Execução do Código Fonte ##

Pendente.

## Instalação do Aplicativo ##

O aplicativo possui versões para duas plataformas: Android e iOS. O passo-a-passo para a instalação em cada uma delas é descrito a seguir.

### Android ###

#### Configurar o Android ####

Para começar, é preciso liberar a instalação de aplicativos de "fontes desconhecidas" no Android. Para isso, em seu dispositivo Android, abra "Configurar" > "Segurança" e marque a opção "Fontes desconhecidas".
Essa opção está disponível no Android 4.0 ou superior. Se você tem uma versão anterior do Android, você deve acessar "Configurações > Aplicativos", selecionar a opção "Fontes Desconhecidas" e tocar em OK.

#### Instalar o Aplicativo ####

Opção 1- Baixando o aplicativo (arquivo ".apk") direto no smartphone

(1) Através do navegador Google Chrome, em seu smartphone, faça o download do "arquivo apk" disponível em:
https://github.com/Projetos-BSI-UNIRIO/desaparecidos-rj-mobile/releases

(2) Em alguns casos, o Chrome (ou o e-mail) pode exibir uma mensagem informando que o arquivo pode danificar o seu dispositivo e perguntando se você quer mantê-lo mesmo assim. Toque em "OK" para autorizar o download.

(3) Uma vez terminado o download, abra a área de notificação do seu smartphone e toque na notificação de "download concluído" para iniciar a instalação do aplicativo.
Nota: Se você não conseguir iniciar a instalação do aplicativo através da notificação, você pode encontrar o arquivo APK baixado abrindo o aplicativo "Downloads" do seu smartphone e executá-lo a partir dessa pasta. Outra opção é acessar diretamente a pasta “Downloads” do dispositivo utilizando qualquer aplicativo de gerenciamento de pastas e arquivos que você possua instalado e executar o arquivo “.apk” diretamente.

(4) Por fim, será exibida uma tela com todas as permissões que o aplicativo precisa. Role-a para baixo para ver todas e toque em "Instalar" para iniciar a instalação do aplicativo.

Opção 2. Transferir o arquivo APK para o Android

(1) Baixe o aplicativo no computador (o link se encontra na “opção” anterior), conecte o smartphone ao computador via cabo USB e copie o arquivo APK para seu dispositivo Android (por exemplo para a pasta "Download" do seu smartphone ou tablet).

(2) Abra o aplicativo gerenciador de arquivos e pastas que possuir instalado em seu smartphone, navegue até a pasta para a qual você copiou o arquivo APK e toque nele. Em seguida, verifique as permissões e toque em "Instalar" para iniciar a instalação.


### iOS ###

Pendente.

## Informação Adicional ##

Software em desenvolvimento por equipe voluntária da Universidade Federal do Estado do Rio de Janeiro (UNIRIO), sob orientação das professoras Geiza M. H. Silva e Renata M. Araújo. 

Desenvolvido utilizando:
- Ionic 2 (?)
