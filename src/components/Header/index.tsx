import { Flex, Image } from '@chakra-ui/react';

interface HeaderProps {
  icon?: string;
}

export default function Header(props: HeaderProps) {
  const { icon, ...rest } = props;
  return (
    <Flex
      maxW={1440}
      minH={[50, 75, 100]}
      mx="auto"
      justifyContent="center"
      // border="1px"
      // borderColor="green"
      {...rest}
    >
      <Flex alignItems="center" maxW={[100, 120, 185]}>
        <Image src="img/logo.svg" alt="Worldtrip" />
      </Flex>
    </Flex>
  );
}
