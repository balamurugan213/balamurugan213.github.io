
import './App.css';
import { BirdsBackground } from './v2/background';
import HeaderTitle from './v2/headerTitle';
import VersionTextTwo from './v2/versionText2';


function App() {
  return (
    <div className="App">
     <BirdsBackground>
       <div className="">
         <VersionTextTwo/>
         <HeaderTitle/>
       </div>
     </BirdsBackground>
    
    </div>
  );
}

export default App;
