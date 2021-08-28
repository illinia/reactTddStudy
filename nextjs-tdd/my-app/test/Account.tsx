export const Account = (props: {name: string; mbti: string}) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.mbti}</p>
    </div>
  )
}