import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import { MainPageRoot } from '../src/MainPageRoot'

describe('MainPage', () => {
	let container

	beforeEach(() => {
		container = document.createElement('div')
	})

	const render = component => ReactDOM.render(component, container)

	it('Renders a h1 tag', () => {
		render(<MainPageRoot />)
		expect(container.querySelector('h1')).not.toBeNull()
	})
	it('Renders a paragraph tag', () => {
		render(<MainPageRoot />)
		expect(container.querySelector('p')).not.toBeNull()
	})
})