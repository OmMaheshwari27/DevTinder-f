import React from 'react'
import { useNavigate } from 'react-router-dom'

const PremiumInvite = () => {
  const navigate = useNavigate()

  const handleGetPremium = () => {
    navigate('/premium/plans')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo Placeholder */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">DP</span>
          </div>
          <h2 className="text-blue-400 text-xl font-semibold">DevTinder Premium</h2>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          All DevTinder. No interruptions.
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Find and connect with developers ad-free, offline, and with premium perks.
        </p>

        {/* Pricing Line */}
        <p className="text-lg text-gray-300 mb-10">
          Prepaid and monthly plans available. Starts at <span className="font-semibold">₹149/month</span>.
        </p>

        {/* Main CTA Button */}
        <button 
          onClick={handleGetPremium}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl mb-8"
        >
          Get DevTinder Premium
        </button>

        {/* Student/Family Plan Link */}
        <div className="mb-8">
          <a 
            href="#" 
            className="text-blue-400 hover:text-blue-300 underline text-lg transition-colors duration-200"
          >
            Save money with a student or family plan
          </a>
        </div>

        {/* Restrictions Apply */}
        <p className="text-sm text-gray-500">
          Restrictions apply
        </p>
      </div>
    </div>
  )
}

export default PremiumInvite 