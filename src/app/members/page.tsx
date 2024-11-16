import { Button, Link } from '@nextui-org/react'
import React from 'react'

const MembersPage = () => {
  return (
    <div>
      MembersPage
      <Button
       as={Link}
       href='/'
       color='secondary'
      >
        Go Back
      </Button>
    </div>
  )
}

export default MembersPage
