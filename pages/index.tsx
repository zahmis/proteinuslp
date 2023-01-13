import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

export default function Home() {
  return (
    <Main>
      <Navbar />
      <ImageGrid>
        <Image
          src='/cg1.PNG'
          alt='cg1'
          width={537}
          height={666}
          style={{
            objectFit: 'cover',
          }}
        />
        <Image
          src='/cg2.PNG'
          alt='cg2'
          width={560}
          height={507}
          style={{
            objectFit: 'cover',
          }}
        />
        <Image
          src=''
          alt='3'
          width={1203}
          height={533}
          style={{
            backgroundColor: '#797979',
            objectFit: 'cover',
            gridRow: 2,
            gridColumnStart: 1,
            gridColumnEnd: 3,
          }}
        />
        <Image
          src=''
          alt='4'
          width={422}
          height={524}
          style={{
            backgroundColor: '#797979',
            objectFit: 'cover',
            alignSelf: 'start',
            gridRow: 3,
            gridColumn: 1,
          }}
        />
        <Image
          src=''
          alt='5'
          width={705}
          height={1045}
          style={{
            backgroundColor: '#797979',
            objectFit: 'cover',
            justifySelf: 'end',
            gridRowStart: 3,
            gridRowEnd: 5,
            gridColumnStart: 2,
            gridColumnEnd: 3,
          }}
        />
        <Image
          src=''
          alt='6'
          width={422}
          height={390}
          style={{
            backgroundColor: '#797979',
            objectFit: 'cover',
            gridRow: 4,
            gridColumn: 1,
          }}
        />
      </ImageGrid>
      <HeartWrapper>
        <FaHeart color='#ff0000' size={30} />
      </HeartWrapper>
    </Main>
  );
}

const ImageGrid = styled.div`
  display: grid;
  margin-top: 127px;
  margin-right: 129px;
  margin-bottom: 120px;
  margin-left: 108px;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 537px 560px;
  grid-gap: 105px;
  align-items: end;
`;

const Main = styled.main``;

const HeartWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;
const Title = styled.div``;
