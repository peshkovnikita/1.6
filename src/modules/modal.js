export const showCallModal = (callModal, openCallModal, openCallModalDesk, modalOpened, overlayModal, overlayVisible) => {
    [openCallModal, openCallModalDesk].map(element => element.addEventListener('click', () => {
        callModal.classList.add(modalOpened)
        overlayModal.classList.add(overlayVisible)
        overlayModal.style.zIndex = '200'
    }))
}

export const showFeedbackModal = (feedbackModal, openFeedbackModal, openFeedbackModalDesk, modalOpened, overlayModal, overlayVisible) => {
    [openFeedbackModal, openFeedbackModalDesk].map(element => element.addEventListener('click', () => {
        feedbackModal.classList.add(modalOpened)
        overlayModal.classList.add(overlayVisible)
        overlayModal.style.zIndex = '200'
    }))
}

export const closeCallModal = (callModal, closeCallModalButton, modalOpened, overlayModal, overlayVisible) => {
    [closeCallModalButton, overlayModal].map(element => element.addEventListener('click', () => {
        callModal.classList.remove(modalOpened)
        overlayModal.classList.remove(overlayVisible)
    }))
}

export const closeFeedbackModal = (feedbackModal, closeFeedbackModalButton, modalOpened, overlayModal, overlayVisible) => {
    [closeFeedbackModalButton, overlayModal].map(element => element.addEventListener('click', () => {
        feedbackModal.classList.remove(modalOpened)
        overlayModal.classList.remove(overlayVisible)
    }))
}