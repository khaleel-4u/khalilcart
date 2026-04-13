import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { LogOut, Package, User, MapPin } from 'lucide-react';
import './profile.css';

export default async function ProfilePage() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login');
  }
  
  // Fetch from profiles table
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  const displayUser = {
    email: user.email,
    name: profile?.full_name || 'Valued Customer',
    lastSignIn: user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'Just now'
  }

  return (
    <div className="container profile-page animate-fade-in">
      <div className="profile-header">
        <h1>My Account</h1>
      </div>
      
      <div className="profile-layout">
        <aside className="profile-sidebar glass">
          <div className="user-info">
            <div className="user-avatar">
              <User size={32} />
            </div>
            <div>
              <div className="user-name">{displayUser.name}</div>
              <div className="user-email">{displayUser.email}</div>
            </div>
          </div>
          
          <nav className="profile-nav">
            <a href="#" className="active">
              <User size={18} /> Account Details
            </a>
            <a href="#">
              <Package size={18} /> Order History
            </a>
            <a href="#">
              <MapPin size={18} /> Saved Addresses
            </a>
            <form action="/auth/signout" method="post">
              <button type="submit" className="signout-btn">
                <LogOut size={18} /> Sign Out
              </button>
            </form>
          </nav>
        </aside>

        <div className="profile-content glass">
          <h2>Account Details</h2>
          
          <div className="details-grid">
            <div className="detail-card">
              <label>Full Name</label>
              <div className="detail-val">{displayUser.name}</div>
            </div>
            <div className="detail-card">
              <label>Email Address</label>
              <div className="detail-val">{displayUser.email}</div>
            </div>
            <div className="detail-card">
              <label>Password</label>
              <div className="detail-val">••••••••</div>
              <button className="text-link">Change Password</button>
            </div>
            <div className="detail-card">
              <label>Last Sign In</label>
              <div className="detail-val">{displayUser.lastSignIn}</div>
            </div>
          </div>
          
          <button className="btn btn-outline" style={{marginTop: '2rem'}}>Edit Details</button>
        </div>
      </div>
    </div>
  );
}
