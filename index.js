
function sqrt(n) {
  return Math.sqrt(n)
}

let t = 0

setInterval(() => {
  console.log(sqrt(t))
    t+=2
}, 1000)
