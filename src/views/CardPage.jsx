import {PlatformCard} from "../utils/helper"
import Card from "../components/common/Card"
import Button from "../components/common/Button"


const CardPage = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen gap-7.5 flex-col">
      <div className="flex w-full justify-center gap-5 flex-wrap items-center">
        {PlatformCard.map((obj,idx) => (
        <Card
        key={idx}
        icon={obj.icon}
        description={obj.description} 
        />
        ))}
      </div>

      <Button to="/">Previous Page</Button>
    </div>
  )
}

export default CardPage
