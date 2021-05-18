import { Flex, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex maxW={1440} minH={[50, 75, 100]} mx="auto" justifyContent="center">
      <Flex alignItems="center" maxW={[100, 120, 185]}>
        <Image src="img/logo.svg" alt="Worldtrip" />
      </Flex>
    </Flex>
  );
}
