//debugger;
let item = document.querySelectorAll('div[data-s]')
if (item.length > 0) {
    for (let index = 0; index < item.length; index++) {
        const element = item[index];
        element.getAttribute('data-s').split(' ').forEach(element => {
            if (element === 's-flex') {
                item[index].classList.add('_s-flex')
            } else if (element === 's-flex-row') {
                item[index].classList.add('_s-flex-row')
            } else if (element === 's-flex-col') {
                item[index].classList.add('_s-flex-col')
            } else if (element === 's-flex-jc-c') {
                item[index].classList.add('_s-flex-jc-c')
            } else if (element === 's-flex-jc-sb') {
                item[index].classList.add('_s-flex-jc-sb')
            } else if (element === 's-flex-jc-sa') {
                item[index].classList.add('_s-flex-jc-sa')
            } else if (element === 's-flex-jc-s') {
                item[index].classList.add('_s-flex-jc-s')
            } else if (element === 's-flex-jc-e') {
                item[index].classList.add('_s-flex-jc-e')
            } else if (element === 's-flex-ai-c') {
                item[index].classList.add('_s-flex-ai-c')
            } else if (element === 's-flex-ai-s') {
                item[index].classList.add('_s-flex-ai-s')
            } else if (element === 's-flex-ai-e') {
                item[index].classList.add('_s-flex-ai-e')
            } else if (Number.isInteger(parseInt(element.match(/\d+/)))) {
                if (element.substr(2, 3) === 'mt-' && element.substr(element.length-2, element.length-1) === 'px') {
                    item[index].style.marginTop = `${parseInt(element.match(/\d+/))}px`
                }else if (element.substr(2, 3) === 'mb-' && element.substr(element.length-2, element.length-1) === 'px') {
                    item[index].style.marginBottom = `${parseInt(element.match(/\d+/))}px`
                }else if (element.substr(2, 3) === 'ml-' && element.substr(element.length-2, element.length-1) === 'px') {
                    item[index].style.marginLeft = `${parseInt(element.match(/\d+/))}px`
                }else if (element.substr(2, 3) === 'mr-' && element.substr(element.length-2, element.length-1) === 'px') {
                    item[index].style.marginRight = `${parseInt(element.match(/\d+/))}px`
                } else if (element.substr(2, 3) === 'pt-' && element.substr(element.length-2, element.length-1) === 'px') {
                    item[index].style.paddingTop = `${parseInt(element.match(/\d+/))}px`
                } else if (element.substr(2, 3) === 'pb-' && element.substr(element.length-2, element.length-1) === 'px') {
                    item[index].style.paddingBottom = `${parseInt(element.match(/\d+/))}px`
                } else if (element.substr(2, 3) === 'pl-' && element.substr(element.length-2, element.length-1) === 'px') {
                    item[index].style.paddingLeft = `${parseInt(element.match(/\d+/))}px`
                } else if (element.substr(2, 3) === 'pr-' && element.substr(element.length-2, element.length-1) === 'px') {
                    item[index].style.paddingRight = `${parseInt(element.match(/\d+/))}px`
                }  else if (element.substr(2, 3) === 'fz-') {
                    item[index].style.fontSize = `${parseInt(element.match(/\d+/))}px`
                } else if (element.substr(2, 3) === 'mt-' && element.substr(element.length-1, element.length) === '%') {
                    item[index].style.marginTop = `${parseInt(element.match(/\d+/))}%`
                } else if (element.substr(2, 3) === 'mb-' && element.substr(element.length-1, element.length) === '%') {
                    item[index].style.marginBottom = `${parseInt(element.match(/\d+/))}%`
                } else if (element.substr(2, 3) === 'ml-' && element.substr(element.length-1, element.length) === '%') {
                    item[index].style.marginLeft = `${parseInt(element.match(/\d+/))}%`
                } else if (element.substr(2, 3) === 'mr-' && element.substr(element.length-1, element.length) === '%') {
                    item[index].style.marginRight = `${parseInt(element.match(/\d+/))}%`
                } else if (element.substr(2, 3) === 'pt-' && element.substr(element.length-1, element.length) === '%') {
                    item[index].style.paddingTop = `${parseInt(element.match(/\d+/))}%`
                } else if (element.substr(2, 3) === 'pb-' && element.substr(element.length-1, element.length) === '%') {
                    item[index].style.paddingBottom = `${parseInt(element.match(/\d+/))}%`
                } else if (element.substr(2, 3) === 'pl-' && element.substr(element.length-1, element.length) === '%') {
                    item[index].style.paddingLeft = `${parseInt(element.match(/\d+/))}%`
                } else if (element.substr(2, 3) === 'pr-' && element.substr(element.length-1, element.length) === '%') {
                    item[index].style.paddingRight = `${parseInt(element.match(/\d+/))}%`
                } 
            }
        });
    }
}