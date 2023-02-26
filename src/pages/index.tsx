import { css , cx} from "emotion";
import {colors } from "pebble-web";

export default function Home() {
  return (
    <>
      <div className={css({ height: "100vh" , display: "flex" ,  flexDirection: "column",justifyContent: "center", fontFamily: "Anarock" , color: colors.gray.dark , backgroundColor: colors.white.base, fontSize: "20px" })}>
         <div className={css({ margin: "10px auto"})}>Flat Mates</div>
         <div className={css({ padding: "10px", margin: "0px auto"})}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sit vel soluta repellat. Dolorem culpa, rem harum facilis cum inventore minima eaque corrupti, nemo vel aut, reiciendis ipsa saepe laudantium.</div>
      </div>
    </>
  )
}
