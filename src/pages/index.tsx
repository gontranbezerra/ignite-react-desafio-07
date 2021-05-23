import {
  Flex,
  Image,
  VStack,
  Text,
  useBreakpointValue,
  Circle,
  Divider,
  LinkOverlay,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import Header from '../components/Header';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

SwiperCore.use([Pagination, Navigation]);

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

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { data, error } = useSWR('/api/continents', fetcher);

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

  return (
    <>
      <Header />

      <Flex
        maxW={1440}
        minH={[168, 251, 335]}
        mx="auto"
        px={[4, 20, 20, 140]}
        alignItems="flex-start"
        justifyContent="space-between"
        bgImage="url('img/background.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Flex marginTop={[7, 10, 20, 20]} marginRight={[4]}>
          <VStack spacing={[2, 5]} maxW={[400, 700, 700]} align="left">
            <Text
              maxWidth={426}
              fontSize={[20, 24, 24, 36]}
              fontStyle="normal"
              fontWeight="500"
              color="light.text"
              noOfLines={2}
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Text>
            <Text
              fontSize={[14, 16, 20]}
              fontStyle="normal"
              fontWeight="normal"
              color="light.info"
              noOfLines={2}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </VStack>
        </Flex>

        {isWideVersion && (
          <Flex mt={76}>
            <Image
              src="img/airplane.svg"
              alt="Airplane"
              sx={{ transform: 'rotate(3deg)' }}
            />
          </Flex>
        )}
      </Flex>

      <Flex
        mt={[9, 9, 9, 20]}
        maxW={1160}
        mx="auto"
        px={4}
        justifyContent={[
          'space-around',
          'space-around',
          'space-around',
          'space-between',
        ]}
        alignItems="center"
        wrap="wrap"
      >
        <Flex
          direction={['row', 'row', 'row', 'column']}
          alignItems="center"
          marginX={[2, 4, 4, 8]}
        >
          {isWideVersion ? (
            <Image src="img/cocktail.svg" marginBottom={6} />
          ) : (
            <Circle size="8px" bg="highlight" marginRight={2} />
          )}
          <Text
            fontStyle="normal"
            fontWeight={[500, 500, 500, 600]}
            fontSize={[18, 18, 18, 24]}
          >
            vida noturna
          </Text>
        </Flex>
        <Flex
          direction={['row', 'row', 'row', 'column']}
          alignItems="center"
          marginX={[2, 4, 4, 8]}
          marginY={[3, 3, 0, 0]}
        >
          {isWideVersion ? (
            <Image src="img/surf.svg" marginBottom={6} />
          ) : (
            <Circle size="8px" bg="highlight" marginRight={2} />
          )}
          <Text
            fontStyle="normal"
            fontWeight={[500, 500, 500, 600]}
            fontSize={[18, 18, 18, 24]}
          >
            praia
          </Text>
        </Flex>
        <Flex
          direction={['row', 'row', 'row', 'column']}
          alignItems="center"
          marginX={[2, 4, 4, 8]}
          marginY={[3, 3, 0, 0]}
        >
          {isWideVersion ? (
            <Image src="img/building.svg" marginBottom={6} />
          ) : (
            <Circle size="8px" bg="highlight" marginRight={2} />
          )}
          <Text
            fontStyle="normal"
            fontWeight={[500, 500, 500, 600]}
            fontSize={[18, 18, 18, 24]}
          >
            moderno
          </Text>
        </Flex>
        <Flex
          direction={['row', 'row', 'row', 'column']}
          alignItems="center"
          marginX={[2, 4, 4, 8]}
          marginY={[3, 3, 0, 0]}
        >
          {isWideVersion ? (
            <Image src="img/museum.svg" marginBottom={6} />
          ) : (
            <Circle size="8px" bg="highlight" marginRight={2} />
          )}
          <Text
            fontStyle="normal"
            fontWeight={[500, 500, 500, 600]}
            fontSize={[18, 18, 18, 24]}
          >
            clássico
          </Text>
        </Flex>
        <Flex
          direction={['row', 'row', 'row', 'column']}
          alignItems="center"
          marginX={[2, 4, 4, 8]}
          marginY={[3, 3, 0, 0]}
        >
          {isWideVersion ? (
            <Image src="img/earth.svg" marginBottom={6} />
          ) : (
            <Circle size="8px" bg="highlight" marginRight={2} />
          )}
          <Text
            fontStyle="normal"
            fontWeight={[500, 500, 500, 600]}
            fontSize={[18, 18, 18, 24]}
          >
            e mais...
          </Text>
        </Flex>
      </Flex>

      <Flex
        marginTop={[9, 9, 9, 20]}
        maxW={1160}
        mx="auto"
        justifyContent="center"
      >
        <Divider
          borderColor="dark.text"
          width={['60px', '70px', '80px', '90px']}
          border={['1px', '1px', '1px', '2px']}
        />
      </Flex>

      <Text
        mt={[6, 6, 6, 14]}
        maxW={839}
        mx="auto"
        fontSize={[20, 24, 28, 36]}
        fontStyle="normal"
        fontWeight="500"
        color="dark.text"
        noOfLines={2}
        textAlign="center"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>

      <Flex mt={12} mb={10} maxW={1240} mx="auto">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {data &&
            data.result.map((continent: ContinentsProps, index: number) => (
              <SwiperSlide key={index}>
                <Flex
                  width="full"
                  minH={[375, 400, 425, 450]}
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  bgImage={`url(${continent.image})`}
                  bgPosition="top"
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
                    position="relative"
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize={[24, 28, 36, 48]}
                    color="light.text"
                  >
                    <LinkOverlay href={`/${continent.route}`}>
                      {continent.name}
                    </LinkOverlay>
                  </Text>
                  <Text
                    position="relative"
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize={[14, 18, 20, 24]}
                    color="light.text"
                  >
                    {continent.slogan}
                  </Text>
                </Flex>
              </SwiperSlide>
            ))}
        </Swiper>
      </Flex>
    </>
  );
}
