import React from 'react'
import {
  Container,
  Box,
  Card,
  Flex,
  Heading,
  Text,
  BackgroundImage,
  LargeButton
} from '@hackclub/design-system'
import Link from 'gatsby-link'
import Animator from 'components/Animator'

const Base = Box.extend`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 32rem;
`

const Photo = Box.withComponent('img').extend`
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	object-fit: cover;
`

const Start = Card.extend`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: calc(100% - 12vw);
  max-width: 40rem;
  text-align: center;
  z-index: 2;
  border-radius: ${props => props.theme.radii[2]};
  box-shadow: ${props => props.theme.boxShadows[3]};
  background-color: rgba(255, 255, 255, 0.75);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    backdrop-filter: saturate(180%) blur(16px);
  }
  h2 {
    background-image: linear-gradient(
      48deg,
      ${props => props.theme.colors.orange[4]},
      ${props => props.theme.colors.red[5]},
      ${props => props.theme.colors.red[6]}
    );
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${props => props.theme.mediaQueries.sm} {
    br {
      display: none;
    }
  }
`

const Action = LargeButton.withComponent(Link).extend`
	transition: transform 0.125s ease-out;
  transform: scale(1);
  &:hover,
  &:focus {
    transform: scale(1.06);
  }
  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`

const Promo = () => (
  <Start p={[3, 4, 5]}>
    <Heading.h2 f={[4, 5, 6]} m={0}>
      Get your club started.
    </Heading.h2>
    <Text f={[2, 4]} my={2}>
      Build the class you wish you could take.
    </Text>
    <Text f={[2, 4]} mb={4}>
      Bring the movement to your school.
    </Text>
    <Action to="/start" children="Start Your Club »" />
  </Start>
)

const Frame = Box.extend`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  pointer-events: none;
`

const BorderBase = Box.extend`
  position: absolute;
  z-index: 4;
  background: white;
`

const BorderTop = BorderBase.extend`
  top: 0;
  left: 0;
  width: 100%;
  height: 5vw;
  min-height: ${props => props.theme.space[4]}px;
  transform-origin: center top;
`

const BorderRight = BorderBase.extend`
  top: 0;
  right: 0;
  width: 5vw;
  height: 100%;
  min-width: ${props => props.theme.space[4]}px;
  transform-origin: right center;
`

const BorderBottom = BorderBase.extend`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5vw;
  transform-origin: center bottom;
  ${props => props.theme.mediaQueries.md} {
    height: calc(2.5vh);
  }
`

const BorderLeft = BorderBase.extend`
  top: 0;
  left: 0;
  width: 5vw;
  height: 100%;
  transform-origin: left center;
`

const BorderX = props => (
  <Animator
    data={{
      transform: [{ scaleX: 1 }, { scaleX: 0 }]
    }}
    {...props}
  />
)

const BorderY = props => (
  <Animator
    data={{
      transform: [{ scaleY: 1 }, { scaleY: 0 }]
    }}
    {...props}
  />
)

export default () => (
  <Base>
    <Frame>
      <BorderY is={BorderTop} />
      <BorderX is={BorderRight} />
      <BorderY is={BorderBottom} />
      <BorderX is={BorderLeft} />
    </Frame>
    <Photo src="/action.jpg" alt="Large group of students coding together" />
    <Promo />
  </Base>
)
