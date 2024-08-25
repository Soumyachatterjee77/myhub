import { useEffect } from "react"
import { loginAction } from "../../store/slices/authSlices"
import { useDispatch, useSelector } from "react-redux"

const LandingPage = () => {
  const dispatch = useDispatch();

  const a = useSelector(state => state.auth)
  console.log(a);
  useEffect(() => {
    setTimeout(() => {
      
      dispatch( loginAction({
        name:"Soumya",
      }))
    }, 2000);
  }, [dispatch])
  
  return (
    <div>LandingPage {}</div>
  )
}

export default LandingPage