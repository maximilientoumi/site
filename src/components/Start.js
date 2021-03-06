import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text, LargeButton, theme } from '@hackclub/design-system'
import Sheet from 'components/Sheet'
import Link from 'gatsby-link'

const Base = styled(Sheet).attrs({ maxWidth: 64 - 2 })`
  background-color: ${theme.colors.red[5]};
  background-image: ${theme.gradient('orange.5', 'red.5', 'red.6')};
  display: grid;
  grid-gap: ${theme.space[4]}px;
  align-items: center;
  ${theme.mediaQueries.md} {
    grid-gap: ${theme.space[5]}px;
    grid-template-columns: 4fr 2fr;
  }
  h3 {
    font-weight: normal;
    line-height: 1.5;
    opacity: 0.9;
  }
`

LargeButton.link = LargeButton.withComponent(Link)

const Start = ({ buttonProps = {}, ...props }) => (
  <Base p={[4, 5]} my={4} {...props}>
    <Box align={['center', null, 'right']}>
      <Heading.h2 color="white" f={[5, 6]} m={0}>
        Apply by Sept 30th.
      </Heading.h2>
      <Text color="red.0" f={[3, 4]} my={2}>
        Build the class you wish you took.
      </Text>
      <Text color="red.0" f={[3, 4]} m={0}>
        Bring the movement to your school.
      </Text>
    </Box>
    <Box align={['center', null, 'left']}>
      <LargeButton.link
        to="/start"
        inverted
        children="Get started"
        chevronRight
        fontSize={[3, 4]}
        scale
        {...buttonProps}
      />
    </Box>
  </Base>
)

export default Start
