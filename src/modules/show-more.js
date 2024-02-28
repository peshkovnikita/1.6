export const showInfoText = (infoButton, infoParagraph, infoArrow, infoButtonText, isHiddenInfo, screenWidth) => {
    infoButton.addEventListener('click', () => {
        if (screenWidth < 1120) {
            if (isHiddenInfo === true ) {
                infoButtonText.innerHTML = 'Скрыть';
                infoArrow.classList.add('show-more__btn--img-rotated');
                infoParagraph.style.display = 'block'
                isHiddenInfo = false;
            } else {
                infoButtonText.innerHTML = 'Читать далее';
                infoArrow.classList.remove('show-more__btn--img-rotated');
                infoParagraph.style.display = 'none'
                isHiddenInfo = true;
            }
        }
    })
}

export const showBrands = (brandButton, brandText, brandArrow, brandContainer, isHiddenBrand) => {
    brandButton.addEventListener('click', () => {
        if (isHiddenBrand === true) {
            brandText.innerHTML = 'Скрыть';
            brandArrow.classList.add('show-more__btn--img-rotated');
            brandContainer.classList.add('brands--expand');
            isHiddenBrand = false;
        } else {
            brandText.innerHTML = 'Показать все';
            brandArrow.classList.remove('show-more__btn--img-rotated');
            brandContainer.classList.remove('brands--expand');
            isHiddenBrand = true;
        }
    })
}

export const showRepairServices = (repairButton, repairText, repairArrow, repairContainer, isHiddenRepair) => {
    repairButton.addEventListener('click', () => {
        if (isHiddenRepair === true) {
            repairText.innerHTML = 'Скрыть';
            repairArrow.classList.add('show-more__btn--img-rotated');
            repairContainer.classList.add('repair--expand');
            isHiddenRepair = false;
        } else {
            repairText.innerHTML = 'Показать все';
            repairArrow.classList.remove('show-more__btn--img-rotated');
            repairContainer.classList.remove('repair--expand');
            isHiddenRepair = true;
        }
    })
}