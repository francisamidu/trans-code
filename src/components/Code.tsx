import React from 'react'

type CodeProps = {
    code:string
}
const Code = ({
    code
}:CodeProps) => {
  return (
    <div>
        {code}
    </div>
  )
}

export default Code