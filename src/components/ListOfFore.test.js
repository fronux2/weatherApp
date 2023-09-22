import ListOfFore from './ListOfFore.jsx'
import { render, screen } from '@testing-library/react-native'
import renderer from 'react-test-renderer'

const forecast = [
  {
    date_apoch: 12345,
    date: '2012-02-02T12:00:00',
    day: {
      condition: {
        icon: 'sunny.png'
      },
      maxtemp_c: '77',
      mintemp_c: '33'
    }
  },
  {
    date_apoch: 54321,
    date: '2023-09-20T15:30:00',
    day: {
      condition: {
        icon: 'sunny.png'
      },
      maxtemp_c: '82',
      mintemp_c: '25'
    }
  }
]

test('should render one element', () => {
  const component = renderer.create(<ListOfFore />).toJSON()
  expect(component).toMatchSnapshot()
})

test('render text', () => {
  const component = render(<ListOfFore foreCast={forecast} />)
  component.getByText('25')
})
