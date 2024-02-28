import './index.html'
import './index.scss'

import { showSidebar, closeSidebar } from './modules/sidebar'
import { showCallModal, showFeedbackModal, closeCallModal, closeFeedbackModal } from './modules/modal'
import { swiper } from './modules/swiper'
import { showBrands, showRepairServices, showInfoText } from './modules/show-more'

// Sidebar
const menuSidebar = document.querySelector('.side-menu')
const openButton = document.querySelector('.burger-btn')
const closeButton = document.querySelector('.burger-icon--closed')
const hiddenSidebar = 'side-menu--hidden'

const overlaySideBar = document.querySelector('.overlay-sidebar')
const overlayVisible = 'overlay--visible'

showSidebar(menuSidebar, openButton, hiddenSidebar, overlaySideBar, overlayVisible)
closeSidebar(menuSidebar, closeButton, hiddenSidebar, overlaySideBar, overlayVisible)

// Modals
const openCallModal = document.querySelector('.call__modal--btn')
const openFeedbackModal = document.querySelector('.feedback__modal--btn')
const openCallModalDesk = document.querySelector('.call__modal-sidebar--btn')
const openFeedbackModalDesk = document.querySelector('.feedback__modal-sidebar--btn')
const closeCallModalButton = document.querySelector('.call-modal--close')
const closeFeedbackModalButton = document.querySelector('.feedback-modal--close')

const overlayModal = document.querySelector('.overlay-modal')
const callModal = document.querySelector('.call-modal')
const feedbackModal = document.querySelector('.feedback-modal')
const modalOpened = 'modal--opened'

showCallModal(callModal, openCallModal, openCallModalDesk, modalOpened, overlayModal, overlayVisible)
closeCallModal(callModal, closeCallModalButton, modalOpened, overlayModal, overlayVisible)
showFeedbackModal(feedbackModal, openFeedbackModal, openFeedbackModalDesk, modalOpened, overlayModal, overlayVisible)
closeFeedbackModal(feedbackModal, closeFeedbackModalButton, modalOpened, overlayModal, overlayVisible)

// Show more buttons
const infoButtonText = document.getElementById('info--read-more-txt')
const infoArrow = document.getElementById('info--read-more-img')
const infoParagraph = document.querySelector('.text-info__second-paragraph')
const infoButton = document.querySelector('.info__read-more-btn')
let isHiddenInfo = true;
const screenWidth = document.documentElement.clientWidth

showInfoText(infoButton, infoParagraph, infoArrow, infoButtonText, isHiddenInfo, screenWidth)

const brandText = document.getElementById('brand--show-more-txt')
const brandArrow = document.getElementById('brand--show-more-img')
const brandContainer = document.querySelector('.brand-wrapper')
const brandButton = document.querySelector('.brand__show-more-btn')
let isHiddenBrand = true;

showBrands(brandButton, brandText, brandArrow, brandContainer, isHiddenBrand)

const repairText = document.getElementById('repair--show-more-txt')
const repairArrow = document.getElementById('repair--show-more-img')
const repairContainer = document.querySelector('.repair-wrapper')
const repairButton = document.querySelector('.repair__show-more-btn')
let isHiddenRepair = true;

showRepairServices(repairButton, repairText, repairArrow, repairContainer, isHiddenRepair)


