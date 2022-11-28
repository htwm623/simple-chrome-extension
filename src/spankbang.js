const handlePageLoad = () => {
  const toolBar = document.querySelector('.video_toolbar')
  const downloadBtn = document.querySelector('.video_toolbar .dl')
  const newBtn = downloadBtn.cloneNode(true)
  toolBar.replaceChild(newBtn, downloadBtn)

  newBtn.addEventListener('click', (event) => {
    // const video = document.querySelector('#video')
    event.preventDefault()
    event.stopPropagation()
    const video = document.querySelector('#main_video_player_html5_api')
    const title = document.querySelector('#video h1').textContent
    const fileName = `${title}.mp4`
    const src = video.querySelector('source').src

    const a = document.createElement('a')
    a.href = src
    a.rel = 'noopener'
    a.setAttribute('download', fileName)
    a.target = '_blank'
    a.click()
  }, true)
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'tabUpdate') {
    setTimeout(() => {
      handlePageLoad()
    }, 1000)
  }
})


window.addEventListener('load', () => {
  setTimeout(() => {
    handlePageLoad()
  }, 1000)
})
