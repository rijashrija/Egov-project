const roles = {
    admin: ["create", "read", "update", "delete"],
    manager: ["read", "update"],
    user: ["read"],
    guest: []
  };
  
  // Function to check if a user has permission
  export const canPerformAction = (role, action) => {
    return roles[role]?.includes(action) || false;
  };