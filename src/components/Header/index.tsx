import { Flex, Image, Link, LinkOverlay } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import React from 'react';

export default function Header() {
  const router = useRouter();
  const isRoot = router.asPath==='/' ? true: false;
  // console.log('Header.router: ', router);

  return (
    <>
      {!isRoot && <Link href={`/`}>
        <ChevronLeftIcon
          w={[4, 6, 6, 8]}
          h={[4, 6, 6, 8]}
          position="absolute"
          minH={[50, 75, 100]}
          ml={[4, 16, 24, 36]}
        />
      </Link>}
      <Flex
        maxW={1440}
        minH={[50, 75, 100]}
        mx="auto"
        justifyContent="center"
        direction="row"
      >
        <Flex alignItems="center" maxW={[100, 120, 185]}>
          <Image src="img/logo.svg" alt="Worldtrip" />
        </Flex>
      </Flex>
    </>
  );
}
