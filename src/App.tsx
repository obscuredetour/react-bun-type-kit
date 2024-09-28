import { useState } from 'react'
import reactLogo from './assets/images/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-neutral-800 w-full h-full flex flex-col justify-center items-center">
        <div className="flex gap-6 items-center mb-4">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-12 h-auto" alt="React logo" />
          </a>
          <a href="https://bun.sh" target="_blank">
            <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQnVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA3MCI+PHRpdGxlPkJ1biBMb2dvPC90aXRsZT48cGF0aCBpZD0iU2hhZG93IiBkPSJNNzEuMDksMjAuNzRjLS4xNi0uMTctLjMzLS4zNC0uNS0uNXMtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjUtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjVBMjYuNDYsMjYuNDYsMCwwLDEsNzUuNSwzNS43YzAsMTYuNTctMTYuODIsMzAuMDUtMzcuNSwzMC4wNS0xMS41OCwwLTIxLjk0LTQuMjMtMjguODMtMTAuODZsLjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNUMxOS41NSw2NS4zLDMwLjE0LDY5Ljc1LDQyLDY5Ljc1YzIwLjY4LDAsMzcuNS0xMy40OCwzNy41LTMwQzc5LjUsMzIuNjksNzYuNDYsMjYsNzEuMDksMjAuNzRaIi8+PGcgaWQ9IkJvZHkiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kIiBkPSJNNzMsMzUuN2MwLDE1LjIxLTE1LjY3LDI3LjU0LTM1LDI3LjU0UzMsNTAuOTEsMywzNS43QzMsMjYuMjcsOSwxNy45NCwxOC4yMiwxM1MzMy4xOCwzLDM4LDNzOC45NCw0LjEzLDE5Ljc4LDEwQzY3LDE3Ljk0LDczLDI2LjI3LDczLDM1LjdaIiBzdHlsZT0iZmlsbDojZmJmMGRmIi8+PHBhdGggaWQ9IkJvdHRvbV9TaGFkb3ciIGRhdGEtbmFtZT0iQm90dG9tIFNoYWRvdyIgZD0iTTczLDM1LjdhMjEuNjcsMjEuNjcsMCwwLDAtLjgtNS43OGMtMi43MywzMy4zLTQzLjM1LDM0LjktNTkuMzIsMjQuOTRBNDAsNDAsMCwwLDAsMzgsNjMuMjRDNTcuMyw2My4yNCw3Myw1MC44OSw3MywzNS43WiIgc3R5bGU9ImZpbGw6I2Y2ZGVjZSIvPjxwYXRoIGlkPSJMaWdodF9TaGluZSIgZGF0YS1uYW1lPSJMaWdodCBTaGluZSIgZD0iTTI0LjUzLDExLjE3QzI5LDguNDksMzQuOTQsMy40Niw0MC43OCwzLjQ1QTkuMjksOS4yOSwwLDAsMCwzOCwzYy0yLjQyLDAtNSwxLjI1LTguMjUsMy4xMy0xLjEzLjY2LTIuMywxLjM5LTMuNTQsMi4xNS0yLjMzLDEuNDQtNSwzLjA3LTgsNC43QzguNjksMTguMTMsMywyNi42MiwzLDM1LjdjMCwuNCwwLC44LDAsMS4xOUM5LjA2LDE1LjQ4LDIwLjA3LDEzLjg1LDI0LjUzLDExLjE3WiIgc3R5bGU9ImZpbGw6I2ZmZmVmYyIvPjxwYXRoIGlkPSJUb3AiIGQ9Ik0zNS4xMiw1LjUzQTE2LjQxLDE2LjQxLDAsMCwxLDI5LjQ5LDE4Yy0uMjguMjUtLjA2LjczLjMuNTksMy4zNy0xLjMxLDcuOTItNS4yMyw2LTEzLjE0QzM1LjcxLDUsMzUuMTIsNS4xMiwzNS4xMiw1LjUzWm0yLjI3LDBBMTYuMjQsMTYuMjQsMCwwLDEsMzksMTljLS4xMi4zNS4zMS42NS41NS4zNkM0MS43NCwxNi41Niw0My42NSwxMSwzNy45Myw1LDM3LjY0LDQuNzQsMzcuMTksNS4xNCwzNy4zOSw1LjQ5Wm0yLjc2LS4xN0ExNi40MiwxNi40MiwwLDAsMSw0NywxNy4xMmEuMzMuMzMsMCwwLDAsLjY1LjExYy45Mi0zLjQ5LjQtOS40NC03LjE3LTEyLjUzQzQwLjA4LDQuNTQsMzkuODIsNS4wOCw0MC4xNSw1LjMyWk0yMS42OSwxNS43NmExNi45NCwxNi45NCwwLDAsMCwxMC40Ny05Yy4xOC0uMzYuNzUtLjIyLjY2LjE4LTEuNzMsOC03LjUyLDkuNjctMTEuMTIsOS40NUMyMS4zMiwxNi40LDIxLjMzLDE1Ljg3LDIxLjY5LDE1Ljc2WiIgc3R5bGU9ImZpbGw6I2NjYmVhNztmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJPdXRsaW5lIiBkPSJNMzgsNjUuNzVDMTcuMzIsNjUuNzUuNSw1Mi4yNy41LDM1LjdjMC0xMCw2LjE4LTE5LjMzLDE2LjUzLTI0LjkyLDMtMS42LDUuNTctMy4yMSw3Ljg2LTQuNjIsMS4yNi0uNzgsMi40NS0xLjUxLDMuNi0yLjE5QzMyLDEuODksMzUsLjUsMzgsLjVzNS42MiwxLjIsOC45LDMuMTRjMSwuNTcsMiwxLjE5LDMuMDcsMS44NywyLjQ5LDEuNTQsNS4zLDMuMjgsOSw1LjI3QzY5LjMyLDE2LjM3LDc1LjUsMjUuNjksNzUuNSwzNS43LDc1LjUsNTIuMjcsNTguNjgsNjUuNzUsMzgsNjUuNzVaTTM4LDNjLTIuNDIsMC01LDEuMjUtOC4yNSwzLjEzLTEuMTMuNjYtMi4zLDEuMzktMy41NCwyLjE1LTIuMzMsMS40NC01LDMuMDctOCw0LjdDOC42OSwxOC4xMywzLDI2LjYyLDMsMzUuNywzLDUwLjg5LDE4LjcsNjMuMjUsMzgsNjMuMjVTNzMsNTAuODksNzMsMzUuN0M3MywyNi42Miw2Ny4zMSwxOC4xMyw1Ny43OCwxMyw1NCwxMSw1MS4wNSw5LjEyLDQ4LjY2LDcuNjRjLTEuMDktLjY3LTIuMDktMS4yOS0zLTEuODRDNDIuNjMsNCw0MC40MiwzLDM4LDNaIi8+PC9nPjxnIGlkPSJNb3V0aCI+PGcgaWQ9IkJhY2tncm91bmQtMiIgZGF0YS1uYW1lPSJCYWNrZ3JvdW5kIj48cGF0aCBkPSJNNDUuMDUsNDNhOC45Myw4LjkzLDAsMCwxLTIuOTIsNC43MSw2LjgxLDYuODEsMCwwLDEtNCwxLjg4QTYuODQsNi44NCwwLDAsMSwzNCw0Ny43MSw4LjkzLDguOTMsMCwwLDEsMzEuMTIsNDNhLjcyLjcyLDAsMCwxLC44LS44MUg0NC4yNkEuNzIuNzIsMCwwLDEsNDUuMDUsNDNaIiBzdHlsZT0iZmlsbDojYjcxNDIyIi8+PC9nPjxnIGlkPSJUb25ndWUiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kLTMiIGRhdGEtbmFtZT0iQmFja2dyb3VuZCIgZD0iTTM0LDQ3Ljc5YTYuOTEsNi45MSwwLDAsMCw0LjEyLDEuOSw2LjkxLDYuOTEsMCwwLDAsNC4xMS0xLjksMTAuNjMsMTAuNjMsMCwwLDAsMS0xLjA3LDYuODMsNi44MywwLDAsMC00LjktMi4zMSw2LjE1LDYuMTUsMCwwLDAtNSwyLjc4QzMzLjU2LDQ3LjQsMzMuNzYsNDcuNiwzNCw0Ny43OVoiIHN0eWxlPSJmaWxsOiNmZjYxNjQiLz48cGF0aCBpZD0iT3V0bGluZS0yIiBkYXRhLW5hbWU9Ik91dGxpbmUiIGQ9Ik0zNC4xNiw0N2E1LjM2LDUuMzYsMCwwLDEsNC4xOS0yLjA4LDYsNiwwLDAsMSw0LDEuNjljLjIzLS4yNS40NS0uNTEuNjYtLjc3YTcsNywwLDAsMC00LjcxLTEuOTMsNi4zNiw2LjM2LDAsMCwwLTQuODksMi4zNkE5LjUzLDkuNTMsMCwwLDAsMzQuMTYsNDdaIi8+PC9nPjxwYXRoIGlkPSJPdXRsaW5lLTMiIGRhdGEtbmFtZT0iT3V0bGluZSIgZD0iTTM4LjA5LDUwLjE5YTcuNDIsNy40MiwwLDAsMS00LjQ1LTIsOS41Miw5LjUyLDAsMCwxLTMuMTEtNS4wNSwxLjIsMS4yLDAsMCwxLC4yNi0xLDEuNDEsMS40MSwwLDAsMSwxLjEzLS41MUg0NC4yNmExLjQ0LDEuNDQsMCwwLDEsMS4xMy41MSwxLjE5LDEuMTksMCwwLDEsLjI1LDFoMGE5LjUyLDkuNTIsMCwwLDEtMy4xMSw1LjA1QTcuNDIsNy40MiwwLDAsMSwzOC4wOSw1MC4xOVptLTYuMTctNy40Yy0uMTYsMC0uMi4wNy0uMjEuMDlhOC4yOSw4LjI5LDAsMCwwLDIuNzMsNC4zN0E2LjIzLDYuMjMsMCwwLDAsMzguMDksNDlhNi4yOCw2LjI4LDAsMCwwLDMuNjUtMS43Myw4LjMsOC4zLDAsMCwwLDIuNzItNC4zNy4yMS4yMSwwLDAsMC0uMi0uMDlaIi8+PC9nPjxnIGlkPSJGYWNlIj48ZWxsaXBzZSBpZD0iUmlnaHRfQmx1c2giIGRhdGEtbmFtZT0iUmlnaHQgQmx1c2giIGN4PSI1My4yMiIgY3k9IjQwLjE4IiByeD0iNS44NSIgcnk9IjMuNDQiIHN0eWxlPSJmaWxsOiNmZWJiZDAiLz48ZWxsaXBzZSBpZD0iTGVmdF9CbHVjaCIgZGF0YS1uYW1lPSJMZWZ0IEJsdWNoIiBjeD0iMjIuOTUiIGN5PSI0MC4xOCIgcng9IjUuODUiIHJ5PSIzLjQ0IiBzdHlsZT0iZmlsbDojZmViYmQwIi8+PHBhdGggaWQ9IkV5ZXMiIGQ9Ik0yNS43LDM4LjhhNS41MSw1LjUxLDAsMSwwLTUuNS01LjUxQTUuNTEsNS41MSwwLDAsMCwyNS43LDM4LjhabTI0Ljc3LDBBNS41MSw1LjUxLDAsMSwwLDQ1LDMzLjI5LDUuNSw1LjUsMCwwLDAsNTAuNDcsMzguOFoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJJcmlzIiBkPSJNMjQsMzMuNjRhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsMjQsMzMuNjRabTI0Ljc3LDBhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsNDguNzUsMzMuNjRaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkIi8+PC9nPjwvc3ZnPg==" className="h-12 max-w-16" alt="Bun logo" />
          </a>
          <a href="https://www.typescriptlang.org" target="_blank" className="w-12 aspect-[27/26]">
            <svg fill="none" height="100%" viewBox="0 0 27 26" width="100%" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z" fill="#fff" fillRule="evenodd"></path></svg>
          </a>
        </div>
        <h1 className="text-neutral-200 text-3xl font-bold text-center">React + Bun + TypeScript</h1>
        <p className="mt-3 text-center">
          Click on the logos to learn more.          
        </p>
        <div className="p-5 bg-white/5 rounded-2xl mt-8 mb-4 text-left">
          <button className="block m-0 rounded-full border-2 border-neutral-500 py-1 px-4 mb-4" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR (Hot Module Replacement).
          </p>
        </div>
        <div className="p-5 bg-white/5 rounded-2xl mb-4 text-left [&>p+p]:mt-2">
          <p>
            <a href="https://react.dev" target="_blank" className="text-blue-300 underline">React</a> is used as the front-end framework.
          </p>
          <p>
            <a href="https://bun.sh" target="_blank" className="text-blue-300 underline">Bun</a> is used as the package manager and build tool.
          </p>
          <p>
            <a href="https://www.typescriptlang.org" target="_blank" className="text-blue-300 underline">TypeScript</a> is used as the programming language.
          </p>
          <p>
            <a href="https://vitejs.dev" target="_blank" className="text-blue-300 underline">Vite</a> is used as a development-only tool for HMR and live server functionality.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
