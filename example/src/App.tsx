import React from 'react'
import { LeafPoll } from 'react-leaf-polls'
import 'react-leaf-polls/dist/index.css'

const resData = [
  { text: 'YES', votes: 0 },
  { text: 'NO', votes: 0 },
  { text: 'Answer3', votes: 0 }
]

const themeData = {
  // textColor: '',
  // mainColor: '#00B87B',
  // backgroundColor: 'white',
  alignment: 'center',
  leftColor: '#00B87B',
  rightColor: '#FF2E00'
}

const App = () => {
  return (
    <LeafPoll
      type='binary'
      question='How long do you?'
      results={resData}
      theme={themeData}
    />
  )
}

export default App