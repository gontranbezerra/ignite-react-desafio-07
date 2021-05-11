import type { NextApiRequest, NextApiResponse } from 'next';

interface ContinentsProps {
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
        name: 'América do Norte',
        slogan: 'América para o mundo',
        image: 'img/north_america.png',
      },
      {
        name: 'América do Sul',
        slogan: 'Alegria, cultura e natureza',
        image: 'img/south_america.png',
      },
      {
        name: 'Ásia',
        slogan: 'A diversidade do maior dos contineites',
        image: 'img/asian.png',
      },
      {
        name: 'África',
        slogan: 'Os mistérios do berço da humnidade',
        image: 'img/africa.png',
      },
      {
        name: 'Europa',
        slogan: 'O contineite mais antigo',
        image: 'img/europe.png',
      },
      {
        name: 'Oceania',
        slogan: 'O menor e mais novo dos continentes',
        image: 'img/oceania.png',
      },
    ],
  });
}
