//找到元素
const swiperControl = document.querySelector('#swiper-control')

swiperControl.onmouseenter = function(){
    for(let item of this.children){
        item.style.display = 'block'
    }
    console.log('enter')
}

swiperControl.onmouseleave = function(){
    for(let item of this.children){
        item.style.display = 'none'
    }
    console.log('leave')
}

