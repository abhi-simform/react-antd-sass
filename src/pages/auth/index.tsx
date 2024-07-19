import { Outlet } from 'react-router-dom'
import './auth.scss'

export default function AuthLayout() {
  return (
    <main className="auth">
      <aside className="aside" />
      <div className="content">
        <img src="/images/logo.svg" className="logo" alt="simform logo" width={686} height={126} />
        <div className="form">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
