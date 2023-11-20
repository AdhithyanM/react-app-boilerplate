import { Button } from '@mui/material'

const App = (): JSX.Element => {
  return (
    <h1 className="text-red-500 text-4xl font-medium">
      Welcome to React App thats build using Webpack and Babel separately
      <Button variant="contained" className="text-red-500">
        Hello world
      </Button>
    </h1>
  )
}

export default App
