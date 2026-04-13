import Link from 'next/link';
import { login } from './actions';
import './auth.css';

export default function LoginPage() {
  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card glass">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Enter your details to access your account.</p>
        </div>
        
        <form className="auth-form" action={login}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required placeholder="••••••••" />
          </div>
          
          <button className="btn btn-primary auth-submit">Sign In</button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}
