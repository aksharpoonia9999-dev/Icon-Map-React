import { Link } from "react-router-dom";

const Button = ({children , to}) => {
  return (
    <Link to={to} className="bg-black rounded-full max-w-50 w-full flex items-center justify-center h-12.5 border border-solid border-white text-white text-base hover:bg-white transition-all duration-300 ease-in-out hover:text-black font-bold">
      {children}
    </Link>
  )
}

export default Button
