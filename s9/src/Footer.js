import LanguageContext from "./LanguageContext.js"
import { useContext} from 'react'

const Footer = () => {
  const languaCtx = useContext(LanguageContext)
  const selectedChange = (e) => {
       languaCtx.setLangua(e.target.value)
  }
  return (
    <div className="footer">
     <select value={languaCtx.langua} onChange={selectedChange}>
       <option value="en">en</option>
       <option value="vi">vi</option>
     </select>
    </div>
  );
}

export default Footer;