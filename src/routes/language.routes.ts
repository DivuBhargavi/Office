// // routes/languageRoute.ts
// import express, { Request, Response } from 'express';
// import Language from '../db/models/language';

// const languageRoute = express.Router();

// languageRoute.use(express.json());

// languageRoute.get('/lang', async (req: Request, res: Response) => {
//   try {
//     const language = await Language.findAll();
//     res.json(language);
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// });

// languageRoute.post('/lang', async (req: Request, res: Response) => {
//   const {id, languagename, languagecode} = req.body;

//   try {
//     const newHospital = await Language.create({id, languagename, languagecode});
//     res.status(201).json(newHospital);
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// });



//export default languageRoute;






// export default languageRoute;

// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Language from '../db/models/language';

const languageRoute = express.Router(); 

languageRoute.use(express.json());

// GET all languages
languageRoute.get('/lang', async (req: Request, res: Response) => {
  try {
    const languages = await Language.findAll();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// GET language by ID
languageRoute.get('/lang/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const language = await Language.findByPk(id);
    if (language) {
      res.json(language);
    } else {
      res.status(404).json({ error: 'Language not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// POST new language
languageRoute.post('/lang', async (req: Request, res: Response) => {
  const {  languagename, languagecode } = req.body;

  try {
    const newLanguage = await Language.create({  languagename, languagecode });
    res.status(201).json(newLanguage);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// PUT update language by ID
languageRoute.put('/lang/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { languagename, languagecode } = req.body;

  try {
    const language = await Language.findByPk(id);
    if (language) {
      language.languagename = languagename;
      language.languagecode = languagecode;
      await language.save();
      res.json(language);
    } else {
      res.status(404).json({ error: 'Language not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// DELETE language by ID
languageRoute.delete('/lang/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const language = await Language.findByPk(id);
    if (language) {
      await language.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Language not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default languageRoute;


