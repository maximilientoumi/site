import React from 'react'
import styled from 'styled-components'
import { Box, Image, Link, theme } from '@hackclub/design-system'

const Base = styled(Box)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  align-items: center;
  justify-content: center;
  img {
    max-width: 12rem;
  }
`

const Sponsor = ({ name, href, ...props }) => (
  <Link href={href || `https://${name.toLowerCase()}.com`} target="_blank">
    <Image
      src={`/inkind_logos/${name.toLowerCase()}.svg`}
      alt={name}
      {...props}
    />
  </Link>
)

const Sponsors = props => (
  <Base maxWidth={48} {...props}>
    {[
      'FullStory',
      'BrowserStack',
      'Stripe',
      'Segment',
      'Bugsnag',
      'Google',
      'Dialpad'
    ].map(name => (
      <Sponsor name={name} key={name} />
    ))}
  </Base>
)

export default Sponsors
