import { Bell, User } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="bg-[#4527a0] p-4 text-white flex justify-end items-center gap-4">
      <Bell />
      <User />
    </div>
  );
}
