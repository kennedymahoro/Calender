import CalenderGrid from './CalenderGrid.tsx'
function App() {
  return (
    <div className="w-screen h-screen">
      <CalenderGrid
        Parent="grid grid-cols-7"
        Child="border-2 h-36 hover:bg-sky-200"
        Days="border-2"
      />
    </div>
  )
}

export default App
