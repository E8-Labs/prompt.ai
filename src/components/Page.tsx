import { Button } from "./Button"

type PageProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const Page = ({ children }: PageProps) => {
  function handleClick() {}
  return (
    <div className="relative h-full w-full min-h-screen flex flex-col justify-center items-center text-white bg-primary">
      <header className="fixed top-0 left-0 w-full p-4 flex justify-end">
        <nav>
          <ul>
            <li>
              <Button onClick={handleClick} variant="primary">
                Account
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
}
