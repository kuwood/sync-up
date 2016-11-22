import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import { FormControl } from 'react-bootstrap'
import { PlayerControls } from '../components/PlayerControls'
import { App } from '../components/App'
import { Chat } from '../components/Chat'
import { ChatForm } from '../components/ChatForm'
import { ChatMessage } from '../components/ChatMessage'

describe('App', () => {
  const video = {
    playing: false
  }
  const userState = {
    isOwner: false,
    isReady: false
  }
  it('renders App component without crashing', () => {
    shallow(<App video={video} user={userState} />)
  })
})

describe('PlayerControls', () => {
  it('renders PlayerControls without crashing', () => {
    const userState = {
      isOwner: false,
      isReady: false
    }
    const div = document.createElement('div')
    ReactDOM.render(
      <PlayerControls
        user={userState}
      />, div)
  })
})

describe('Chat', () => {
  const state = {
    video: {
      playing: false,
      position: 0,
      id: null
    },
    chat: {
      messages: [{message: 'hi', user: 'me'}]
    },
    room: {
      isReady: false,
      ownerReady: false,
      id: null,
      users: []
    },
    user: {
      isReady: false,
      isOwner: false,
      alias: null
    }
  }
  it('renders Chat component without crashing', () => {
    shallow(<Chat room={state.room} chat={state.chat}/>)
  })
  it('renders ChatForm component without crashing', () => {
    const wrapper = mount(<ChatForm />)
    expect(wrapper.find('.chat-input').length).toBe(1)
  })
  it('renders ChatMessage without crashing', () => {
    shallow(<ChatMessage user={state.chat.messages[0].user} message={state.chat.messages[0].message} />)
  })
})
