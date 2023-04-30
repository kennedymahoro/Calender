function App() {
  return <div className="grid"></div>
  const AlphabetDivs: React.FC = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    return (
      <div>
        {alphabet.split('').map((letter, index) => (
          <div key={index} style={{ width: '50px', height: '50px' }}>
            {letter}
          </div>
        ))}
      </div>
    )
  }
}

export default App
