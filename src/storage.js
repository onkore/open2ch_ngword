const getStatesFromChromeStorage = () => {
  return new Promise(resolve => {
    chrome.storage.local.get({state: []}, storage => resolve(storage.state))
  })
}

export default getStatesFromChromeStorage
