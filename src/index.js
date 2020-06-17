
import x from './x.js'
import png from './assets/b.png'

const div =document.getElementById('zhu')

div.innerHTML=`
<img src="${png}">
`

const button=document.createElement('button')
button.innerHTML='懒加载'
button.onclick=()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{
        console.log('加载错误')
    })
}
div.appendChild(button)