function App() {
  function The_Grid() {
    const Divs = []
    for (let i = 0; i < 31; i++) {
      Divs.push(
        <div key={i} className="">
          {i + 1}
        </div>
      )
    }
    return <div className="grid grid-cols-7 gap-y-7">{Divs}</div>
  }
  return (
    <div className="w-screen h-screen">
      <The_Grid />
    </div>
  )
}

export default App
