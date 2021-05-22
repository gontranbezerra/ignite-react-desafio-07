import type { NextApiRequest, NextApiResponse } from 'next';

import { continents } from '../../../data';

interface CitiesTop5 {
  rank: number;
  image: string;
  city: string;
  country: string;
  flag: string;
}
interface ContinentsProps {
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ result: ContinentsProps[] }>
) {
  res.status(200).json({
    result: continents,
  });
}
