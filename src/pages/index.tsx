import React, { useEffect, useState } from 'react';
import {
  Flex,
  Image,
  Box,
  Center,
  VStack,
  Text,
  useBreakpointValue,
  HStack,
  Wrap,
  WrapItem,
  Circle,
  Divider,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

const fetcher = (url) => fetch(url).then((res) => res.json());

SwiperCore.use([Pagination, Navigation]);

interface ContinentsProps {
  name: string;
  slogan: string;
  image: string;
}

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { data, error } = useSWR('/api/continents', fetcher);

  if (error) console.error('Failed to load data!');

  return (
    <>
      <Flex
        maxW={1440}
        minH={[50, 75, 100]}
        mx="auto"
        justifyContent="center"
        // border="1px"
        // borderColor="red"
      >
        <Flex alignItems="center" maxW={[100, 120, 185]}>
          <Image src="img/logo.svg" alt="Worldtrip" />
        </Flex>
      </Flex>

      <Flex
        maxW={1440}
        minH={[168, 251, 335]}
        mx="auto"
        px={[4, 20, 20, 140]}
        alignItems="flex-start"
        justifyContent="space-between"
        bgImage="url('img/background.png')"
        bgPosition="top"
        bgRepeat="no-repeat"
        // border="1px"
        // borderColor="red"
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
        // border="1px"
        // borderColor="red"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>

      <Flex
        mt={12}
        mb={10}
        maxW={1240}
        mx="auto"
        // border="1px"
        // borderColor="red"
      >
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
                    {continent.name}
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
