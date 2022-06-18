// eslint-disable-next-line
const getSize: (url: string, rejectTimeout?: number) => Promise<{ width: number; height: number }> = (
    url: string,
    rejectTimeout?: number,
) => {
    return new Promise((resolve, reject) => {
        let timer: string | number | NodeJS.Timeout | undefined = undefined

        const img = new Image()

        img.addEventListener('load', () => {
            if (timer) {
                clearTimeout(timer)
            }

            resolve({ width: img.width, height: img.height })
        })

        img.addEventListener('error', event => {
            if (timer) {
                clearTimeout(timer)
            }

            reject(`${event.type}: ${event.message}`)
        })

        img.src = url

        if (rejectTimeout) {
            timer = setTimeout(() => reject('Timeout exception'), rejectTimeout)
        }
    })
}

export default getSize
