import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import Header from '../components/Header';
import { Flex } from '@chakra-ui/react';

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Continent() {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.continent ? `/api/continent/${router.query.continent}` : null,
    fetcher
  );

  console.log('Continent.data: ', data);
  console.log('Continent.error: ', error);

  if (!data)
    return (
      <Flex mt="20%" justifyContent="center">
        Carregando...
      </Flex>
    );

  if (error || !data?.result)
    return (
      <Flex mt="20%" justifyContent="center">
        Falha ao carregar dados.
      </Flex>
    );

  const continent: ContinentProps = data.result;

  return (
    <>
      <Header />
      <h1>{continent.name}</h1>
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [], // para que todas as páginas do preview sejam geradas no build
//     // paths: [
//     //   {
//     //     params: { slug: 'upload-de-imagens-no-front-end-com-reactjs-e-context' },
//     //   },
//     // ],
//     fallback: 'blocking', // true | false \ 'blocking'
//   };
// };

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// export const getStaticProps: GetStaticProps = async () => {
// //   const { data, error } = useSWR('/api/continents', fetcher);

// //   if (error) console.error('Failed to load data!');

//   return { props: data };
// };
