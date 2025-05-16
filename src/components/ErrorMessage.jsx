import React from 'react'

const ErrorMessage = ({error}) => {
  return (
    <div className={`mb-4 px-4 py-2 rounded border ${error.type === "noData"
      ? "bg-yellow-100 border-yellow-300 text-yellow-700"
      : "bg-red-100 border-red-300 text-red-700"
    }`}>
    <strong>Error:</strong> {error.message}
  </div>
  )
}

export default ErrorMessage