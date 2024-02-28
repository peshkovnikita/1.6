import './index.html'
import './index.scss'

import { showSidebar, closeSidebar } from './modules/sidebar'
import { showCallModal, showFeedbackModal, closeCallModal, closeFeedbackModal } from './modules/modal'
import { swiper } from './modules/swiper'

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

//<button class="header__menu-button button" name="menu" title="Открыть меню">
//<button class="sidebar-menu__close-button button" name="close" title="Закрыть меню">

// const text = document.getElementById('text');
// const arrow = document.getElementById('arrowImg');
// const brandsContainer = document.getElementById('swiper-wrapper');
// let isHidden = true;
//
// function expandAndHide() {
//     if (isHidden === true) {
//         text.innerHTML = 'Скрыть';
//         arrow.classList.add('rotateImg');
//         brandsContainer.classList.add('brands--expand');
//         isHidden = false;
//     } else {
//         text.innerHTML = 'Показать все';
//         arrow.classList.remove('rotateImg');
//         brandsContainer.classList.remove('brands--expand');
//         isHidden = true;
//     }
// }


