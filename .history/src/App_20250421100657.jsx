import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
      <LoginForm />
      <SignupForm />
    </div>
  )
}

export default App