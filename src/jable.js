
const handlePageLoad = () => {
  appendCopyLinkBtn()
  appendDeleteBtn()
}

const appendCopyLinkBtn = () => {
  const ul = document.querySelector('.profile-nav ul')
  const item = document.createElement('li')
  item.innerHTML = `
    <a href="javascript:void(0)" style="display: flex;justify-content: center;align-items: center">
       <svg class="ml-2 ml-sm-0 mr-2" height="18" width="16"><use xlink:href="#icon-download"></use></svg>
      <span>复制链接</span>
    </a>
  `
  item.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    copyCurrentPageFavourites()
  })
  ul.appendChild(item)
}

const deleteCurrentPageFavourites = () => {
  const buttons = document.getElementsByClassName('fav-remove')
  for (let i = 0; i< buttons.length; i++) {
    buttons[i].click()
  }
}

const appendDeleteBtn = () => {
  const ul = document.querySelector('.profile-nav ul')
  const item = document.createElement('li')
  item.innerHTML = `
    <a href="javascript:void(0)" style="display: flex;justify-content: center;align-items: center">
       <svg class="ml-2 ml-sm-0 mr-2" height="18" width="16"><use xlink:href="#icon-close"></use></svg>
      <span>删除当前页收藏</span>
    </a>
  `
  item.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    deleteCurrentPageFavourites()
  })
  ul.appendChild(item)
}

const copyCurrentPageFavourites = () => {
  const imgBoxes = document.querySelectorAll('.img-box')
  const arr = []
  for (let i = 0; i < imgBoxes.length; i++) {
    let item = imgBoxes[i]
    let href = item.getElementsByTagName('a')[0].href
    arr.push(`jable --url ${href}`)
  }
  const content = arr.join('\n')
  console.log(content)
  if (navigator.clipboard) {
    navigator.clipboard.writeText(content)
  }
}

window.addEventListener('load', () => {
  console.log('load')
  setTimeout(() => {
    handlePageLoad()
  }, 100)
})
