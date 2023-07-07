import CalenderGrid from './CalenderGrid'
function App() {
  return (
    <div>
      <CalenderGrid
        Parent="grid grid-cols-7 w-screen h-screen p-2"
        Child="border-2 h-auto hover:bg-sky-200"
        Days="border-2 h-10"
        Number="reletive w-fit h-fit insert-x-0 -top-0 bg-black"
      />
    </div>
  )
}

export default App
