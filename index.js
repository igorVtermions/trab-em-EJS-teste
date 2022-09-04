import  express  from "express";
import * as articleService from './ArticleService.js';
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req,res)=>{
    const articles  = articleService.getArticles()
    res.render('pages/home', {title:'EJS', articles})
})

app.get('/artigos/:articleId', (req,res)=>{
    const articleId = req.params.articleId
    const article = articleService.getArticleById(articleId)
    const title = (article) ? article.title : 'Artigo não encontrado';
    res.render('pages/artigos', {title, article  })
})

app.listen(PORT,()=>{
    console.log('Servidor OK!!')
})