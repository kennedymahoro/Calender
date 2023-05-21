const CalenderGrid = (props: { Parent: string; Child: string }) => {
  const Divs = []
  for (let i = 0; i < 31; i++) {
    Divs.push(
      <div key={i} className={props.Child}>
        {i + 1}
      </div>
    )
  }
  const Name_Of_Days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  const Name_Of_Days_Div = Name_Of_Days.map((a, i) => <div key={i}>{a}</div>)
  return (
    <div className={props.Parent}>
      {Name_Of_Days_Div}
      {Divs}
    </div>
  )
}
export default CalenderGrid
