import type { NextApiRequest, NextApiResponse } from 'next';

import { continents } from '../../../../data';

interface CitiesTop5 {
  rank: number;
  image: string;
  city: string;
  country: string;
  flag: string;
}
interface ContinentProps {
  id: number;
  name: string;
  slogan: string;
  image: string;
  route: string;
  details: {
    image: string;
    resume: string;
    countries: number;
    languages: number;
    citiesTop100: number;
    citiesTop5: CitiesTop5[];
  };
}

export default function continentHandler(
  req: NextApiRequest,
  res: NextApiResponse<{ result: ContinentProps }>
) {
  const {
    query: { route },
  } = req;

  const continent: ContinentProps = continents.filter(
    (continent) => continent.route === route
  )[0];

  res.status(200).json({
    result: continent ? continent : null,
  });
}
