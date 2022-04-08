import { handler } from './lambda.js'

(async () => {
  switch (process.argv[2]) {
    case 'latest':
      await handler({ type: 'latest' })
      break
    case 'up':
      await handler({ type: 'up' })
      break
    case 'down':
      await handler({ type: 'down' })
      break
    case 'rollback':
      await handler({ type: 'rollback' })
      break
    default:
      throw new Error('Unsupported operation: ' + process.argv[2])
  }
})()
