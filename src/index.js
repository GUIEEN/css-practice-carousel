// document.addEventListener('DOMContentLoaded', function () {
// }, false)

var callback = function () {
  const nextBtn = document.querySelector('.js-nextBtn'),
    prevBtn = document.querySelector('.js-prevBtn'),
    slideList = document.querySelector('.js-slideList'),
    slides = slideList.querySelectorAll('li'),
    slideLength = Array.from(slides).length,
    slider = document.querySelector('.js-slider'),
    ACTIVE_CLASS = 'active__slide'

  let currentSlide
  let currentSlideNumber = 1

  const calRotate = (slideNum, slideLength) => {
    slideNum = (((slideNum - 1) % slideLength) + slideLength) % slideLength + 1
    return slideNum
  }

  const getCurrentSlide = () => slideList.querySelector(`li:nth-child(${currentSlideNumber})`)

  const toNextSlide = () => {
    if (currentSlide != null) currentSlide.classList.remove(ACTIVE_CLASS)
    currentSlide = getCurrentSlide()
    currentSlide.classList.add(ACTIVE_CLASS)
  }

  toNextSlide()

  const handle = {
    prev: () => {
      currentSlideNumber--
      currentSlideNumber = calRotate(currentSlideNumber, slideLength)
      toNextSlide()
    },
    next: () => {
      currentSlideNumber++
      currentSlideNumber = calRotate(currentSlideNumber, slideLength)
      toNextSlide()
    }
  }

  const interval = {
    kill: () => interval.id != null ? clearInterval(interval.id) : '',
    start: () => {
      interval.id = setInterval(handle.next, 1000)
    },
    id: null
  }
  interval.start()

  prevBtn.addEventListener('click', handle.prev)
  nextBtn.addEventListener('click', handle.next)

  slider.addEventListener('mouseover', interval.kill)
  slider.addEventListener('mouseout', interval.start)
// prevBtn.onclick = handle.prev
}

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callback()
} else {
  document.addEventListener('DOMContentLoaded', callback)
}
