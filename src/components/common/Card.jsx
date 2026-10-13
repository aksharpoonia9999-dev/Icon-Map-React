import Icons from "./Icons"

const Card = ({icon , description}) => {
  return (
    <div className="flex items-center flex-col cursor-pointer justify-center w-full max-w-76 bg-cardBg border border-solid border-cardBorder h-40.5 rounded-16 transition-all duration-300 ease-in-out hover:bg-purple">
      <Icons icon={icon}/>

      <p className="mt-4 text-2xl text-white font-normal leading-100">
        {description}
      </p>
    </div>
  )
}

export default Card
