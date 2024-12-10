import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean; // Optional loading state
}

export function Button({ children, variant = 'primary', className = '', loading = false, ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-full font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-white text-black border border-black hover:bg-gray-100'
  }

  const loadingStyles = 'opacity-50 cursor-not-allowed'; // Style when the button is loading
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${loading ? loadingStyles : ''}`}
      disabled={loading} // Disable the button when loading
      {...props}
    >
      {loading ? (
        <span>Loading...</span> // Loading text or icon can go here
      ) : (
        children
      )}
    </button>
  )
}
