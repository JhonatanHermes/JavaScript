let valores = [5,4,8,7,9]
valores.sort()

/*for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}