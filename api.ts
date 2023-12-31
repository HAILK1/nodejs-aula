import { Router, Request, Response } from 'express';

const router = Router();

router.get('/ping', (req: Request, res: Response) => {
    res.json({ pong: true });
});

router.get('/random', (req: Request, res: Response) => {
    let nRand: number = Math.floor(Math.random() * 10);
    res.json({ number: nRand });

});

router.get('/nome/:nome', (req: Request, res: Response) => {
    let nome: string = req.params.nome;
    res.json({ nome });
});

export default router;


