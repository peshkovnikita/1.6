export const showSidebar = (sidebar, openButton, hiddenSidebar, overlaySideBar, overlayVisible) => {
    openButton.addEventListener('click', () => {
        sidebar.classList.remove(hiddenSidebar)
        overlaySideBar.classList.add(overlayVisible)
        overlaySideBar.style.zIndex = '100'
    });
}
export const closeSidebar = (sidebar, closeButton, hiddenSidebar, overlaySideBar, overlayVisible) => {
    [closeButton, overlaySideBar].map(element => element.addEventListener('click', () => {
        sidebar.classList.add(hiddenSidebar)
        overlaySideBar.classList.remove(overlayVisible)
    }))
}
