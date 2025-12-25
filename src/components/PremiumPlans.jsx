import React from 'react'
import { useNavigate } from 'react-router-dom'

const PremiumPlans = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/premium')
  }

  const silverFeatures = [
    "For one person",
    "Sign in to 3 devices",
    "500GB cloud storage",
    "Priority matching",
    "Ad-free browsing",
    "Basic AI matchmaking insights",
    "Ongoing support"
  ]

  const goldFeatures = [
    "For up to 5 people",
    "Sign in to 5 devices",
    "2TB cloud storage",
    "Top profile boosts",
    "Ad-free browsing",
    "Advanced AI matchmaking insights",
    "Early access to new features",
    "Ongoing support"
  ]

  const FeatureItem = ({ text, icon }) => (
    <div className="flex items-start space-x-3 mb-4">
      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Cross Button */}
      <div className="absolute top-8 right-8">
        <button
          onClick={handleGoBack}
          className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        >
          <svg 
            className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Premium Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock the full potential of DevTinder with our premium features designed for developers
          </p>
        </div>

        {/* Plans Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Silver Plan Card */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Silver Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹499</span>
                <span className="text-gray-600 ml-2">/year</span>
              </div>
              <p className="text-gray-600">Perfect for individual developers</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              {silverFeatures.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Learn more
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                See plans and pricing
              </button>
            </div>
          </div>

          {/* Gold Plan Card - Highlighted */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-500 p-8 hover:shadow-3xl transition-all duration-300 relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Gold Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹899</span>
                <span className="text-gray-600 ml-2">/year</span>
              </div>
              <p className="text-gray-600">Best value for teams & families</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              {goldFeatures.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Learn more
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                See plans and pricing
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <p className="text-sm text-gray-500">
            *Restrictions apply. See terms and conditions for details.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PremiumPlans 