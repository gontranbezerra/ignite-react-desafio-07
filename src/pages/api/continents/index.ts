import type { NextApiRequest, NextApiResponse } from 'next';

interface ContinentsProps {
  id: number;
  name: string;
  slogan: string;
  image: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ result: ContinentsProps[] }>
) {
  res.status(200).json({
    result: [
      {
        id: 1,
        name: 'América do Norte',
        slogan: 'América para o mundo',
        image: 'img/north_america.png',
      },
      {
        id: 2,
        name: 'América do Sul',
        slogan: 'Alegria, cultura e natureza',
        image: 'img/south_america.png',
      },
      {
        id: 3,
        name: 'Ásia',
        slogan: 'A diversidade do maior dos contineites',
        image: 'img/asian.png',
      },
      {
        id: 4,
        name: 'África',
        slogan: 'Os mistérios do berço da humnidade',
        image: 'img/africa.png',
      },
      {
        id: 5,
        name: 'Europa',
        slogan: 'O contineite mais antigo',
        image: 'img/europe.png',
      },
      {
        id: 6,
        name: 'Oceania',
        slogan: 'O menor e mais novo dos continentes',
        image: 'img/oceania.png',
      },
    ],
  });
}
