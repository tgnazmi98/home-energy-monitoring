import { Dashboard } from '@/components/dashboard/Dashboard';
import { AuthGuard } from '@/components/auth/AuthGuard';

export default function HomePage() {
  return (
    <AuthGuard>
      <Dashboard />
    </AuthGuard>
  );
}
