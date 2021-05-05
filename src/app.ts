import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import hbs from 'hbs';

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 8081;
const path: string = __dirname.split('/dist')[0];

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(path + '/views/partials');

// Middleware
// Serve static content
app.use(express.static('public'));

app.get('/', (_req: Request, res: Response) => {
  res.render('home', {
    name: 'Nikola',
    title: 'Node Course',
  });
});

app.get('/generic', (_req: Request, res: Response) => {
  res.render('generic', {
    name: 'Nikola',
    title: 'Node Course',
  });
});

app.get('/elements', (_req: Request, res: Response) => {
  res.render('elements', {
    name: 'Nikola',
    title: 'Node Course',
  });
});

app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Server listen at http://localhost:${port}`);
});
