// Write your code here
import './index.css'

const appItem = props => {
  const {eachItem} = props
  const {appName, imageUrl} = eachItem
  return (
    <li className="app-list-item">
      <img className="app-list-image" src={imageUrl} alt={appName} />
      <p className="app-list-title">{appName}</p>
    </li>
  )
}

export default appItem
