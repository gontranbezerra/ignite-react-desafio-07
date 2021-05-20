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

import Header from '../../components/Header';

export default function Continent() {
  return (
    <>
      <Header />

      <Flex
        maxW={1440}
        minH={[150, 250, 350, 500]}
        mx="auto"
        position="relative"
        // border="1px"
        // borderColor="red"
      >
        <Flex
          width="full"
          //   height="auto"
          bgSize="cover"
          bgImage="url('img/europe_continent.png')"
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
            Europa
            {/* {continent.name} */}
          </Text>
        </Flex>
      </Flex>

      <Flex
        maxW={1440}
        // px={120}
        mt={[2, 4, 6, 16]}
        mx="auto"
        justifyContent="center"
        // border="1px"
        // borderColor="red"
      >
        <Wrap
          spacing="0px"
          justify="center"
          align="center"
          //   border="1px"
          //   borderColor="green"
        >
          <WrapItem>
            <Text
              maxW={600}
              textAlign="justify"
              fontSize={[14, 18, 20, 24]}
              m={4}
            >
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </WrapItem>
          <WrapItem>
            <Flex
              minW={[343, 400, 400, 490]}
              ml={[0, 0, 0, 14]}
              justifyContent="space-between"
              //   border="1px"
              //   borderColor="green"
            >
              <VStack spacing="0px">
                <Text
                  fontSize={[24, 30, 38, 48]}
                  fontWeight={600}
                  lineHeight={1}
                  color="highlight"
                >
                  50
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
                  60
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
                  27
                </Text>
                <HStack spacing="5px">
                  <Text
                    fontSize={[16, 18, 20, 24]}
                    fontWeight={[400, 400, 500, 600]}
                  >
                    cidades +100
                  </Text>
                  <Tooltip
                    label="Cidades turísticas mais importantes"
                    fontSize="md"
                  >
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
        // border="1px"
        // borderColor="red"
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
          // border="1px"
          // borderColor="blue"
        >
          <WrapItem>
            <Box
              maxW={256}
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderRadius="4px"
              overflow="hidden"
            >
              <Image src="img/card/london.png" alt="Londres" />
              <HStack mt={18} mx={6} mb={25} justifyContent="space-between">
                <Flex flexDirection="column">
                  <Text fontFamily="Barlow" fontSize={20} fontWeight={600}>
                    Londres
                  </Text>
                  <Text
                    mt="12px"
                    fontFamily="Barlow"
                    fontSize={16}
                    fontWeight={500}
                    color="dark.info"
                  >
                    Reino Unido
                  </Text>
                </Flex>
                <Image
                  src="img/card/flag/united_kingdom.png"
                  alt="Reino Unido"
                />
              </HStack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={256}
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderRadius="4px"
              overflow="hidden"
            >
              <Image src="img/card/paris.png" alt="Londres" />
              <HStack mt={18} mx={6} mb={25} justifyContent="space-between">
                <Flex flexDirection="column">
                  <Text fontFamily="Barlow" fontSize={20} fontWeight={600}>
                    Paris
                  </Text>
                  <Text
                    mt="12px"
                    fontFamily="Barlow"
                    fontSize={16}
                    fontWeight={500}
                    color="dark.info"
                  >
                    França
                  </Text>
                </Flex>
                <Image src="img/card/flag/france.png" alt="França" />
              </HStack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={256}
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderRadius="4px"
              overflow="hidden"
            >
              <Image src="img/card/rome.png" alt="Londres" />
              <HStack mt={18} mx={6} mb={25} justifyContent="space-between">
                <Flex flexDirection="column">
                  <Text fontFamily="Barlow" fontSize={20} fontWeight={600}>
                    Roma
                  </Text>
                  <Text
                    mt="12px"
                    fontFamily="Barlow"
                    fontSize={16}
                    fontWeight={500}
                    color="dark.info"
                  >
                    Itália
                  </Text>
                </Flex>
                <Image src="img/card/flag/italy.png" alt="Itália" />
              </HStack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={256}
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderRadius="4px"
              overflow="hidden"
            >
              <Image src="img/card/prague.png" alt="Londres" />
              <HStack mt={18} mx={6} mb={25} justifyContent="space-between">
                <Flex flexDirection="column">
                  <Text fontFamily="Barlow" fontSize={20} fontWeight={600}>
                    Praga
                  </Text>
                  <Text
                    mt="12px"
                    fontFamily="Barlow"
                    fontSize={16}
                    fontWeight={500}
                    color="dark.info"
                  >
                    República Tcheca
                  </Text>
                </Flex>
                <Image
                  src="img/card/flag/czech_republic.png"
                  alt="Repúblic Tcheca"
                />
              </HStack>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box
              maxW={256}
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderRadius="4px"
              overflow="hidden"
            >
              <Image src="img/card/amsterdam.png" alt="Londres" />
              <HStack mt={18} mx={6} mb={25} justifyContent="space-between">
                <Flex flexDirection="column">
                  <Text fontFamily="Barlow" fontSize={20} fontWeight={600}>
                    Amsterdã
                  </Text>
                  <Text
                    mt="12px"
                    fontFamily="Barlow"
                    fontSize={16}
                    fontWeight={500}
                    color="dark.info"
                  >
                    Holanda
                  </Text>
                </Flex>
                <Image src="img/card/flag/netherlands.png" alt="Holanda" />
              </HStack>
            </Box>
          </WrapItem>
        </Wrap>
      </VStack>
    </>
  );
}
