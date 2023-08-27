import { Button } from "./Button"

export const ToggleButton = () => {
  function handleClick() {
    console.log("Hi there");
  }

  return (
    <div className="">
      <Button variant="incognito" onClick={handleClick}>
        Toggle here...
      </Button>
    </div>
  )
}
