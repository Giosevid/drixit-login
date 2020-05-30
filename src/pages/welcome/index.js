import React from 'react'
import auth from "../../auth";
import "../../Styles.css"

const Welcome = ({ history, location: { state }  }) => {
  const logout = () => {
    auth.logout(() => {
      history.push('/')
    })
  }
  
  console.log(state)
  
  return(
    <div className="card">
      <img src={state.avatar} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{`Bienvenido ${state.surname}`}</h5>
          <button onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default Welcome
