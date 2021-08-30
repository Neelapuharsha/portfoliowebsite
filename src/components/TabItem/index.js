import './index.css'

const TabItem = props => {
  const {tabDetails, renderSelectedTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    renderSelectedTab(tabId)
  }
  const applyStyle = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        onClick={onClickTab}
        type="button"
        className={`tab-btn ${applyStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
