import React from 'react';
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
import { rootCertificates } from 'node:tls';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
        px={[4, 20, 140]}
        alignItems="flex-start"
        justifyContent="space-between"
        bgImage="url('img/background.png')"
        bgPosition="top"
        bgRepeat="no-repeat"
        // border="1px"
        // borderColor="red"
      >
        <Flex marginTop={[7, 10, 20]} marginRight={[4]}>
          <VStack spacing={[2, 5]} maxW={[400, 700, 700]} align="left">
            <Text
              maxWidth={426}
              fontSize={[20, 24, 36]}
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
            fontWeight={['500', '500', '500', '600']}
            fontSize={['18', '18', '18', '24']}
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
            fontWeight={['500', '500', '500', '600']}
            fontSize={['18', '18', '18', '24']}
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
            fontWeight={['500', '500', '500', '600']}
            fontSize={['18', '18', '18', '24']}
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
            fontWeight={['500', '500', '500', '600']}
            fontSize={['18', '18', '18', '24']}
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
            fontWeight={['500', '500', '500', '600']}
            fontSize={['18', '18', '18', '24']}
          >
            e mais...
          </Text>
        </Flex>
      </Flex>

      {/* <Divider borderColor="dark.text" marginTop={9} /> */}
    </>
  );
}
