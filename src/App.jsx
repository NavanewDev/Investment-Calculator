import { useState } from "react";

import Header from "./Components/Header.jsx";
import UserInfo from "./Components/UserInfo.jsx";
import Results from "./Components/Results.jsx";

function App() {
  const [userInfo, setUserInfo] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInfo.duration >= 1;

  function handleUserInfo(inputIdentifier, newValue) {
      setUserInfo(previousUserInput => {
          return {
              ...previousUserInput,
              [inputIdentifier]: +newValue,
          }
      })
  }

  return (
    <>
      <Header />
      <UserInfo onChangeInput={handleUserInfo} userInfo={userInfo}/>
      {inputIsValid && <Results info={userInfo}/>}
      {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
    </>
  )
}

export default App
