import React from 'react'
import loadable from '@loadable/component'

const OtherComponent = loadable(() => import('react-scroll-button'))

export default function ScrollButton() {
  return (
      <OtherComponent
        targetId={'inicioDeTodo'}
        behavior={'auto'} 
        buttonBackgroundColor={'red'}
        iconType={'arrow-up'}
        style= {{fontSize: '24px'}}
        />
  )
}