"use client"

import { useState } from "react"
import { Button, Typography, Row, Col, Card, Space, Divider } from "antd"
import {
  UserOutlined,
  TeamOutlined,
  BookOutlined,
  BarChartOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"

const { Title, Text, Paragraph } = Typography

export default function LandingPage({ onShowLogin, onShowSignup }) {
  const [isVisible, setIsVisible] = useState(true)

  const features = [
    {
      icon: <TeamOutlined className="text-3xl text-blue-500" />,
      title: "Gestion RH Complète",
      description: "Gérez vos ressources humaines de A à Z avec des outils intégrés et automatisés."
    },
    {
      icon: <BookOutlined className="text-3xl text-green-500" />,
      title: "Formation & Développement",
      description: "Planifiez, organisez et suivez les formations de vos équipes efficacement."
    },
    {
      icon: <BarChartOutlined className="text-3xl text-purple-500" />,
      title: "Analytics & Rapports",
      description: "Analysez les performances et générez des rapports détaillés en temps réel."
    },
    {
      icon: <RocketOutlined className="text-3xl text-orange-500" />,
      title: "Performance & Objectifs",
      description: "Définissez et suivez les objectifs individuels et d'équipe."
    }
  ]

  const benefits = [
    "Interface intuitive et moderne",
    "Sécurité des données certifiée",
    "Support technique 24/7",
    "Intégration facile avec vos outils existants",
    "Mise à jour automatique des fonctionnalités",
    "Conformité RGPD et normes françaises"
  ]

  const handleShowLogin = () => {
    setIsVisible(false)
    setTimeout(() => onShowLogin(), 300)
  }

  const handleShowSignup = () => {
    setIsVisible(false)
    setTimeout(() => onShowSignup(), 300)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">EHC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EHC SIRH</h1>
                <p className="text-sm text-gray-500">Système RH Intégré</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                type="text" 
                onClick={handleShowLogin}
                className="text-gray-700 hover:text-blue-600"
              >
                Connexion
              </Button>
              <Button 
                type="primary" 
                onClick={handleShowSignup}
                className="bg-gradient-to-r from-blue-500 to-purple-600 border-0 hover:from-blue-600 hover:to-purple-700"
              >
                Inscription
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Title level={1} className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transformez votre{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gestion RH
            </span>
          </Title>
          
          <Paragraph className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            EHC SIRH est la solution complète pour moderniser vos processus de ressources humaines. 
            Simplifiez la gestion des talents, optimisez la formation et améliorez la performance de vos équipes.
          </Paragraph>

          <Space size="large" className="mb-12">
            <Button 
              size="large" 
              type="primary" 
              onClick={handleShowSignup}
              className="bg-gradient-to-r from-blue-500 to-purple-600 border-0 hover:from-blue-600 hover:to-purple-700 h-12 px-8 text-lg"
            >
              Commencer gratuitement
              <ArrowRightOutlined className="ml-2" />
            </Button>
            <Button 
              size="large" 
              onClick={handleShowLogin}
              className="h-12 px-8 text-lg border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600"
            >
              Se connecter
            </Button>
          </Space>

          {/* Showcase image */}
          <div className="max-w-5xl mx-auto">
            <img
              src="/training-dashboard-analytics.png"
              alt="Dashboard preview"
              className="w-full rounded-2xl shadow-xl border border-gray-200"
            />
          </div>

          {/* Stats */}
          <Row gutter={[32, 16]} className="mt-16">
            <Col xs={24} sm={8}>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <Text className="text-gray-600">Entreprises utilisatrices</Text>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                <Text className="text-gray-600">Utilisateurs actifs</Text>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <Text className="text-gray-600">Disponibilité garantie</Text>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités principales
            </Title>
            <Paragraph className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez comment EHC SIRH peut transformer votre gestion des ressources humaines
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} lg={12} key={index}>
                <Card 
                  className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  bodyStyle={{ padding: '2rem' }}
                >
                  <div className="text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <Title level={3} className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </Title>
                    <Text className="text-gray-600">{feature.description}</Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir EHC SIRH ?
            </Title>
            <Paragraph className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une solution conçue pour répondre aux besoins spécifiques des entreprises françaises
            </Paragraph>
          </div>

          <Row gutter={[32, 16]}>
            <Col xs={24} lg={12}>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleOutlined className="text-green-500 text-xl mr-3" />
                    <Text className="text-gray-700 text-lg">{benefit}</Text>
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="text-center p-8">
                  <Title level={3} className="text-2xl font-bold text-gray-900 mb-4">
                    Prêt à commencer ?
                  </Title>
                  <Paragraph className="text-gray-600 mb-6">
                    Rejoignez des centaines d'entreprises qui font confiance à EHC SIRH
                  </Paragraph>
                  <Button 
                    type="primary" 
                    size="large" 
                    onClick={handleShowSignup}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 border-0 hover:from-blue-600 hover:to-purple-700 h-12 px-8"
                  >
                    Créer mon compte
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">EHC</span>
            </div>
            <Title level={3} className="text-2xl font-bold text-white mb-4">
              EHC SIRH
            </Title>
            <Text className="text-gray-400 mb-6 block">
              Système RH Intégré - Transformez votre gestion des ressources humaines
            </Text>
            <Divider className="border-gray-700" />
            <Text className="text-gray-500 text-sm">
              © 2024 EHC SIRH. Tous droits réservés.
            </Text>
          </div>
        </div>
      </footer>
    </div>
  )
}
