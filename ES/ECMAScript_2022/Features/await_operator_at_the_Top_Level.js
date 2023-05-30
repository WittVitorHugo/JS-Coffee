// Before ES13
// await operator could only be used in an async function
// It could not do so in the global scope

function setTimeoutAsync(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}


//SyntaxError: await is only valid in async functions
await setTimeoutAsync(3000)



