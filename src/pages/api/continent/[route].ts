import type { NextApiRequest, NextApiResponse } from 'next';

import { continents } from '../../../../data';

import { ContinentProps } from '../../../types'

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
