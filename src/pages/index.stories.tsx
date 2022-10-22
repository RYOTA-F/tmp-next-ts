import React from 'react'
import { Story } from '@storybook/react'

import Home from './'

export default {
  title: 'Pages/Home',
  component: Home,
}

const Template: Story = () => <Home />

export const Normal = Template.bind({})
