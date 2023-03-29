import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    ActiveCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeuserselectDropdown = event => {
    this.setState({ActiveCapitalId: event.target.value})
  }

  getActiveCountry = () => {
    const {ActiveCapitalId} = this.state
    const countyName = countryAndCapitalsList.find(
      each => each.id === ActiveCapitalId,
    )
    return countyName.country
  }

  render() {
    const {ActiveCapitalId} = this.state
    const ActiveCountry = this.getActiveCountry()
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="Quetion-Container">
            <select
              className="dropDown-container"
              onChange={this.onChangeuserselectDropdown}
              value={ActiveCapitalId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="quation-text">is capital of which country?</p>
          </div>
          <p className="contry-result-name">{ActiveCountry}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
