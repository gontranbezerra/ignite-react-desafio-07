import {
  Flex,
  HStack,
  Text,
  VStack,
  Tooltip,
  Wrap,
  WrapItem,
  Box,
  Image,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import Header from '../components/Header';

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

      <Flex
        maxW={1440}
        minH={[150, 250, 350, 500]}
        mx="auto"
        position="relative"
      >
        <Flex
          width="full"
          bgSize="cover"
          bgImage={`url(${continent.image})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: 'rgba(28, 20, 1, 0.35)',
          }}
        >
          <Text
            position="absolute"
            mt={[14, 150, 230, 369]}
            ml={[136, 136, 136, 140]}
            fontStyle="normal"
            fontWeight="600"
            fontSize={[24, 28, 36, 48]}
            color="light.text"
          >
            {continent.name}
          </Text>
        </Flex>
      </Flex>

      <Flex
        maxW={1440}
        mt={[2, 4, 6, 16]}
        mx="auto"
        justifyContent="center"
      >
        <Wrap
          spacing="0px"
          justify="center"
          align="center"
        >
          <WrapItem>
            <Text
              maxW={600}
              textAlign="justify"
              fontSize={[14, 18, 20, 24]}
              m={4}
            >
              {continent.details.resume}
            </Text>
          </WrapItem>
          <WrapItem>
            <Flex
              minW={[343, 400, 400, 490]}
              ml={[0, 0, 0, 14]}
              justifyContent="space-between"
            >
              <VStack spacing="0px">
                <Text
                  fontSize={[24, 30, 38, 48]}
                  fontWeight={600}
                  lineHeight={1}
                  color="highlight"
                >
                  {continent.details.countries}
                </Text>
                <Text
                  fontSize={[16, 18, 20, 24]}
                  fontWeight={[400, 400, 500, 600]}
                >
                  países
                </Text>
              </VStack>
              <VStack spacing="0px">
                <Text
                  fontSize={[24, 30, 38, 48]}
                  fontWeight={600}
                  lineHeight={1}
                  color="highlight"
                >
                  {continent.details.languages}
                </Text>
                <Text
                  fontSize={[16, 18, 20, 24]}
                  fontWeight={[400, 400, 500, 600]}
                >
                  línguas
                </Text>
              </VStack>
              <VStack spacing="0px">
                <Text
                  fontSize={[24, 30, 38, 48]}
                  fontWeight={600}
                  lineHeight={1}
                  color="highlight"
                >
                  {continent.details.citiesTop100}
                </Text>
                <HStack spacing="5px">
                  <Text
                    fontSize={[16, 18, 20, 24]}
                    fontWeight={[400, 400, 500, 600]}
                  >
                    cidades +100
                  </Text>
                  <Tooltip label="Top 100 City Destinations" fontSize="md">
                    <InfoOutlineIcon
                      w={[2, 3, 3, 4]}
                      h={[2, 3, 3, 4]}
                      color="dark.info50"
                    />
                  </Tooltip>
                </HStack>
              </VStack>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>

      <VStack
        maxW={1200}
        px={[2, 3, 4, 5]}
        mt={[8, 10, 12, 16]}
        mb={[35]}
        mx="auto"
        alignItems="flex-start"
      >
        <Text
          fontSize={[24, 28, 32, 36]}
          fontWeight={500}
          mb={3}
          ml={[2, 0, 0, 0]}
        >
          Cidades +100
        </Text>

        <Wrap
          spacing={[4, 6, 8, 10]}
          direction="row"
          justify={['center', 'center', 'left', 'left']}
        >
          {continent.details.citiesTop5.map((top5) => (
            <WrapItem key={top5.rank}>
              <Box
                maxW={256}
                border="1px solid rgba(255, 186, 8, 0.5)"
                borderRadius="4px"
                overflow="hidden"
              >
                <Image src={top5.image} alt={top5.city} />
                <HStack mt={18} mx={6} mb={25} justifyContent="space-between">
                  <Flex flexDirection="column">
                    <Text fontFamily="Barlow" fontSize={20} fontWeight={600}>
                      {top5.city}
                    </Text>
                    <Text
                      mt="12px"
                      fontFamily="Barlow"
                      fontSize={16}
                      fontWeight={500}
                      color="dark.info"
                    >
                      {top5.country}
                    </Text>
                  </Flex>
                  <Image src={top5.flag} alt={top5.country} />
                </HStack>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </>
  );
}
