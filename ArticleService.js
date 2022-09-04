const articles = [
    {
        id: 1,
        title: 'Xbox adiciona suporte ao discord',
        resume: 'De surpresa, a Microsoft anunciou nesta quarta-feira (20) que Xbox Series X|S e Xbox One receberam suporte ao Discord. O recurso está disponível em fase de teste no momento, apenas para jogadores do programa Xbox Insider. O lançamento oficial está previsto para acontecer ainda neste ano.'
    },
    {
        id: 2,
        title: 'Telescópio James Webb captou assinatura de água em exoplaneta',
        resume: 'Após divulgar a primeira imagem feita pelo telescópio James Webb, a NASA revelou mais registros hoje (12), que mostram uma assinatura de água em um exoplaneta. De acordo com a Agência Espacial, o telescópio encontrou um exoplaneta a 1.150 anos-luz de distância da Terra, orbitando uma estrela distante semelhante ao Sol. Além da assinatura de água, também há evidências de nuvens e neblina na atmosfera do planeta gasoso, chamado de WASP 96-b'
    },
    {
        id: 3,
        title: 'Alura abre mais de 70 mil vagas para curso gratuito e online de programação',
        resume: 'A área de tecnologia prevê a criação de cerca de 780 mil vagas de emprego até 2025, é o que aponta estudo conduzido pela Brasscom (Associação das Empresas de Tecnologia da Informação e Comunicação e de Tecnologias Digitais). Diante desse cenário e com o objetivo de disseminar o ensino de ferramentas tecnológicas no país, a Alura, maior escola online  em tecnologia do Brasil - anunciou a abertura de mais de 70 mil vagas para a 5ª edição da Imersão Dev, curso online e gratuito sobre o tema que acontece entre os dias 5 e 16 de setembro.'
    },
    {
        id: 4,
        title: 'O que é Web 3.0 — e o que muda em relação à Web 2.0?',
        resume: 'Já contamos aqui que a Web 3.0 é a próxima fase da internet, só que descentralizada. Isso porque, é gerida pela blockchain, a mesma plataforma de transações de criptomoedas (vamos falar mais sobre isso adiante). Dessa forma, a nova geração vem com uma modificação na segurança e privacidade dos usuários. “Não é mais a empresa que tem o controle da informação. É a gente — como sempre deveria ter sido”, diz em entrevista ao videocast Mulheres do Agora Ana Laura Magalhães, co-fundadora da EVE, organização autônoma descentralizada que tem o foco em incluir mulheres na Web 3.0.'
    }
]

function getArticles(){
    return articles;
}

function getArticleById (articleId){
    return articles.find(article =>{
      return  article.id === Number(articleId)
    })
}

export{ getArticles, getArticleById };