import styled from '@emotion/styled';
import { Container } from '../../components/';

const pxToRem = (px: number): string => `${px / 16}rem`;
const pxToVw = (px: number): string => `${(px / 1080) * 100}vw`;
// Some size constants
const cardHeight = 216;
const boxWidth: string = `30%`;

const AssistantItem = styled('div')`
  /* Color */
  background: white;
  color: var(--colour-main-black);

  /* Sizing */
  height: ${cardHeight / 16}rem;
  margin-bottom: 2.25rem;
  border: 0.5px solid var(--colour-border);

  /* Flex */
  display: flex;

  /* Text */
  text-align: left;

  button {
    padding: 1rem 0;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
  }
`;

const HeaderWrapper = styled('div')`
  /* Flex */
  display: flex;
  justify-content: space-between;

  /* Sizing */
  margin-bottom: 2.25rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    button {
      margin-top: 1.125rem;
    }
  }
`;

const ButtonContainer = styled('div')`
  /* Sizing */
  margin: 0 0 0 0.75rem;
  width: ${boxWidth};
  height: auto;
  /* Flex */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* Text */
  font-size: ${pxToRem(20)};
`;

const ThumbNail = styled('img')`
  width: ${(cardHeight - 5) / 16}rem;
  height: ${(cardHeight - 5) / 16}rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
`;

const CardHeading = styled('div')`
  width: 100%;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

const CardBody = styled('div')`
  padding: 0 2.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media only screen and (max-width: 600px) {
    margin: 0;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const CheckList = styled('div')`
  /* Sizing */
  padding: 10px 15px 45px;
  height: 6.25rem;
  width: ${boxWidth};
  border: 0.5px solid var(--colour-border);
  /* Text */
  text-align: center;
  font-size: 1.5rem;
  font-weight: light;
  /* Flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    font-weight: bold;
  }
  .secondary {
    color: var(--colour-accent);
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

const Asst = styled('div')`
  /* Sizing */
  margin: 0 0 0 0.75rem;
  padding: 10px 15px 45px;
  width: ${boxWidth};
  height: 6.25rem;
  border: var(--border);
  /* Text */
  text-align: center;
  font-size: 1.5rem;
  font-weight: light;
  /* Flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .secondary {
    color: var(--colour-accent);
  }
  p {
    margin: 0;
    font-weight: bold;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

const AssistantHeader = styled('span')`
  font-size: 1.8rem;
  top: 0;
  left: 0;
  text-align: left;
  border-bottom: 1px solid #b8003f;
  align-items: flex-start;
  max-width: 18.125rem;
`;

const AssistantDetailContainer = styled(Container)`
  flex-direction: row;
`;

const AssistantBar = styled('div')`
  height: 54rem;
  width: 21rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--colour-border);
`;

const AsstDetail = styled('div')`
  height: 6rem;
  color: white;
  background: var(--colour-accent);
  display: flex;
  flex-direction: row;
  border: 1px solid var(--colour-border);
`;

const AsstProperty = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid var(--colour-border);
`;

const PropertyContainer = styled('div')`
  border: 0.5px solid var(--colour-border);
  background: white;
  height: 300px;
  width: 18rem;
`;

const PropertyHeading = styled('div')`
  color: var(--colour-accent);
  background: #eeeff5;
  height: 3.75rem;
  border-bottom: 1px solid var(--colour-border);
  padding: 0.3rem 0;
`;

export {
  AssistantItem,
  AssistantDetailContainer,
  ButtonContainer,
  ThumbNail,
  CardHeading,
  CardBody,
  CheckList,
  Asst,
  AssistantHeader,
  HeaderWrapper,
  AssistantBar,
  AsstDetail,
  AsstProperty,
  PropertyContainer,
  PropertyHeading,
};
