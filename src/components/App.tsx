function App() {
  function The_Grid() {
    const Divs = []
    for (let i = 0; i < 31; i++) {
      Divs.push(
        <div key={i} className="w10 h10 bg-blue-500">
          {i + 1}
        </div>
      )
    }
    return <div>{Divs}</div>
  }
  return (
    <div className="grid">
      <The_Grid />
    </div>
  )
}

export default App
