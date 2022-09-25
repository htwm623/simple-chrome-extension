window.addEventListener('load', () => {
  setTimeout(() => {
    handlePageLoaded()
  }, 1000)
})

const handlePageLoaded = () => {
  changeDownloadBtnEvent()
  console.log('change download event')
}

const changeDownloadBtnEvent = () => {
  const downloadBtns = document.querySelectorAll('.icon-xiazai')
  for (const item of downloadBtns) {
    item.addEventListener('click', (event) => {
      event.stopPropagation()
      event.preventDefault()
      console.log('btnclicked')
      console.log('btnclicked')
      const icon = getIconInfo(event.target)
      downloadIconToFile(icon)
    })
  }
}

const getIconInfo = (element) => {
  const li = element.parentElement.parentElement
  const name = li.getElementsByClassName('icon-name')[0].textContent
  const content = li.getElementsByClassName('icon-twrap')[0].innerHTML
  return {name, content}
}

const downloadIconToFile = ({name, content}) => {
  const a = document.createElement('a')
  const dataUrl = `data:,${content}`
  a.download = `${name}.svg`
  a.href = dataUrl
  a.rel = 'noopener'
  a.click()
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'tabUpdate') {
    console.log('tabl update')
    setTimeout(() => {
      changeDownloadBtnEvent()
    }, 1000)
  }
})

