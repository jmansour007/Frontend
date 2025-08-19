"use client"

import { useState, useEffect } from "react"
import { Spin, Typography } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

const { Title, Text } = Typography

export default function LoadingPage({ onLoadingComplete }) {
  const [loadingText, setLoadingText] = useState("Initialisation...")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const loadingSteps = [
      "Initialisation...",
      "Chargement des composants...",
      "Connexion à la base de données...",
      "Vérification des services...",
      "Préparation de l'interface...",
      "Chargement terminé !"
    ]

    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep])
        setProgress((currentStep + 1) * (100 / loadingSteps.length))
        currentStep++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          onLoadingComplete()
        }, 500)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
      <div className="text-center text-white">
        {/* Logo and Branding */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-4xl font-bold text-white">EHC</span>
          </div>
          <Title level={1} className="text-white mb-2">
            EHC SIRH
          </Title>
          <Text className="text-blue-200 text-lg">
            Système RH Intégré
          </Text>
        </div>

        {/* Loading Animation */}
        <div className="mb-6">
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 48, color: '#60a5fa' }} spin />}
            size="large"
          />
        </div>

        {/* Loading Text */}
        <div className="mb-4">
          <Text className="text-blue-200 text-lg">{loadingText}</Text>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto bg-blue-700 rounded-full h-2 mb-4">
          <div
            className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <Text className="text-blue-300 text-sm">
          {Math.round(progress)}%
        </Text>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_#60a5fa_0%,_transparent_50%),radial-gradient(circle_at_80%_20%,_#06b6d4_0%,_transparent_50%)]" />
      </div>
    </div>
  )
}
