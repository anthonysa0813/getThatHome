import Button from "../landingPage/components/Button"

function Login () {
  
  function handleClick(e){
    e.preventDefault();
    console.log('Clicked')
  }

  return(
    <form onSubmit={handleClick} >
      <div>Login</div>
      <label id='email'>EMAIL</label>
      <input htmlFor='email' placeholder="user@mail.com"/>
      <label id='password'>PASSWORD</label>
      <input htmlFor='password' placeholder='******'/>
      <Button text='Login' iconName='profile' />
    </form>
  )

}

export default Login