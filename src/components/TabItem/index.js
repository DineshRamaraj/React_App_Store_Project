// Write your code here
import './index.css'

const tabItem = props => {
  const {eachItem, onClickRandomTabButton, isActive} = props
  const {tabId, displayText} = eachItem

  const onClickItem = () => {
    onClickRandomTabButton(tabId)
  }

  const tabActiveButton = isActive ? 'active' : ''

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={`tab-list-item-button ${tabActiveButton}`}
        onClick={onClickItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default tabItem
