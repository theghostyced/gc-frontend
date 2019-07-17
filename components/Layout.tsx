import * as React from 'react'

type Props = {}

const Layout: React.FunctionComponent<Props> = ({
  children,
}) => (
  <React.Fragment>
    {children}
  </React.Fragment>
)

export default Layout
