import Button from "../components/common/Button"
import Icons from "../components/common/Icons"

const IconPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full gap-7.5 flex-col">
      <div className="flex items-center justify-center gap-7.5">
        <Icons icon ="spotify"/>
      <Icons icon ="apple"/>
      <Icons icon ="youtube"/>
      <Icons icon ="amazon"/>
      </div>

      <Button to="/card">Next Page</Button>
    </div>
  )
}

export default IconPage
