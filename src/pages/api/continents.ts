import type { NextApiRequest, NextApiResponse } from 'next';

import { continents } from '../../../data';

import { ContinentProps } from '../../types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ result: ContinentProps[] }>
) {
  res.status(200).json({
    result: continents,
  });
}
