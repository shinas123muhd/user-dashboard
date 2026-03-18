import React from 'react';
import { useUserByIdQuery } from '../../../api/hooks/useUsers';
import { Mail, Phone, MapPin, Building2, Calendar, User as UserIcon } from 'lucide-react';

const UserDetails = ({ userId }) => {
  const { data: user, isLoading, isError } = useUserByIdQuery(userId);

  if (!userId) return null;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError || !user) {
    return <div className="text-red-500 text-center py-4">Failed to load user details.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="text-center pb-6 border-b border-slate-200">
        <div className="h-24 w-24 rounded-full mx-auto border-4 border-slate-100 shadow-sm mb-4 bg-slate-50 flex items-center justify-center text-slate-300">
          <UserIcon className="h-12 w-12" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{user.firstName} {user.lastName}</h3>
        <p className="text-sm text-slate-500">@{user.username}</p>
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mt-2">
          {user.role}
        </span>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Contact Info</h4>
        <div className="flex items-center text-sm text-slate-600">
          <Mail className="h-4 w-4 mr-3 text-slate-400" />
          {user.email}
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <Phone className="h-4 w-4 mr-3 text-slate-400" />
          {user.phone}
        </div>
        <div className="flex items-center text-sm text-slate-600 mt-2">
          <MapPin className="h-4 w-4 mr-3 text-slate-400 flex-shrink-0" />
          <span>{user.address?.address}, {user.address?.city}, {user.address?.state} {user.address?.postalCode}</span>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-slate-200">
        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Company Info</h4>
        <div className="flex items-center text-sm text-slate-600">
          <Building2 className="h-4 w-4 mr-3 text-slate-400" />
          {user.company?.name} - {user.company?.title}
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <Calendar className="h-4 w-4 mr-3 text-slate-400" />
          Age: {user.age}  |  Gender: {user.gender}
        </div>
      </div>
      
      <div className="pt-4 border-t border-slate-200">
         <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Device Info</h4>
         <div className="text-sm text-slate-600 grid grid-cols-2 gap-2">
           <div><span className="font-medium">IP:</span> {user.ip}</div>
           <div><span className="font-medium">MAC:</span> {user.macAddress}</div>
         </div>
      </div>
    </div>
  );
};

export default UserDetails;
