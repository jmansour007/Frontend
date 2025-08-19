"use client"

import { useState } from "react"
import { Form, Input, Button, Card, Typography, Divider, Alert, Row, Col, Space, message } from "antd"
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  ArrowLeftOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons"
import { useAuth } from "../contexts/AuthContext"

const { Title, Text, Paragraph } = Typography

export default function LoginPage({ onBackToLanding, onShowSignup, onLoginSuccess }) {
  // Fallback to router navigation if props are not provided
  const navigateBack = () => (onBackToLanding ? onBackToLanding() : window.history.length ? window.history.back() : (window.location.href = "/"))
  const goSignup = () => (onShowSignup ? onShowSignup() : (window.location.href = "/signup"))
  const afterLogin = () => (onLoginSuccess ? onLoginSuccess() : (window.location.href = "/dashboard"))
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [showTestAccounts, setShowTestAccounts] = useState(false)
  const { login } = useAuth()

  const testAccounts = [
    {
      email: "admin@ehc.com",
      password: "admin123",
      role: "admin",
      name: "Administrateur",
      description: "Accès complet à toutes les fonctionnalités"
    },
    {
      email: "formateur@ehc.com",
      password: "formateur123",
      role: "formateur",
      name: "Formateur",
      description: "Gestion des formations et participants"
    },
    {
      email: "rrh@ehc.com",
      password: "rrh123",
      role: "rrh",
      name: "Responsable RH",
      description: "Gestion des ressources humaines"
    },
    {
      email: "manager@ehc.com",
      password: "manager123",
      role: "manager",
      name: "Manager",
      description: "Gestion des équipes et formations"
    }
  ]

  const handleLogin = async (values) => {
    setLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check if it's a test account
      const testAccount = testAccounts.find(acc => 
        acc.email === values.email && acc.password === values.password
      )
      
      if (testAccount) {
        message.success(`Connexion réussie en tant que ${testAccount.name}`)
        
        // Use AuthContext to login
        login({
          email: testAccount.email,
          role: testAccount.role,
          name: testAccount.name
        })
        afterLogin()
      } else {
        message.error("Email ou mot de passe incorrect")
      }
    } catch (error) {
      message.error("Erreur de connexion")
    } finally {
      setLoading(false)
    }
  }

  const handleTestLogin = (account) => {
    form.setFieldsValue({
      email: account.email,
      password: account.password,
      remember: true
    })
  }

  const handleQuickLogin = async (account) => {
    setLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      message.success(`Connexion rapide réussie en tant que ${account.name}`)
      
      // Use AuthContext to login
      login({
        email: account.email,
        role: account.role,
        name: account.name
      })
      afterLogin()
    } catch (error) {
      message.error("Erreur de connexion")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-stretch p-0 lg:p-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-none lg:rounded-2xl shadow-none lg:shadow-2xl border-0 lg:border">
        {/* Visual side */}
        <div className="hidden lg:flex relative items-center justify-center p-8 bg-gradient-to-br from-indigo-600 to-blue-500">
          <img
            src="/modern-training-dashboard.png"
            alt="Aperçu du tableau de bord"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            aria-hidden="true"
          />
          <div className="relative z-10 text-center text-white max-w-md">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur mb-4">EHC</div>
            <h2 className="text-3xl font-semibold mb-2">Bienvenue sur EHC SIRH</h2>
            <p className="text-white/90">Gérez vos talents, formations et performances avec fluidité.</p>
          </div>
        </div>

        {/* Form side */}
        <div className="flex items-center justify-center p-6 sm:p-10 bg-white/60 backdrop-blur">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
              onClick={navigateBack}
          className="mb-6 text-gray-600 hover:text-blue-600"
              aria-label="Retour à l'accueil"
        >
          Retour à l'accueil
        </Button>

        {/* Login Card */}
            <Card className="shadow-xl border-0">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">EHC</span>
            </div>
            <Title level={2} className="text-2xl font-bold text-gray-900 mb-2">
              Connexion
            </Title>
            <Text className="text-gray-600">
              Accédez à votre espace EHC SIRH
            </Text>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleLogin}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Veuillez saisir votre email" },
                { type: "email", message: "Format d'email invalide" }
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="votre.email@ehc.com"
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mot de passe"
              rules={[
                { required: true, message: "Veuillez saisir votre mot de passe" },
                { min: 6, message: "Le mot de passe doit contenir au moins 6 caractères" }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Votre mot de passe"
                size="large"
                className="rounded-lg"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="mr-2" />
                  Se souvenir de moi
                </label>
                <Button type="link" className="text-blue-600 p-0 h-auto">
                  Mot de passe oublié ?
                </Button>
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                size="large"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 border-0 hover:from-blue-600 hover:to-purple-700 h-12 rounded-lg font-medium"
              >
                Se connecter
              </Button>
            </Form.Item>
          </Form>

          <Divider className="my-6">
            <Text className="text-gray-500">ou</Text>
          </Divider>

          <div className="text-center">
            <Text className="text-gray-600">
              Pas encore de compte ?{" "}
              <Button
                type="link"
                onClick={goSignup}
                className="text-blue-600 p-0 h-auto font-medium"
              >
                Créer un compte
              </Button>
            </Text>
          </div>

          {/* Test Accounts Section */}
          <div className="mt-8">
            <Button
              type="text"
              onClick={() => setShowTestAccounts(!showTestAccounts)}
              className="w-full text-gray-500 hover:text-blue-600"
            >
              {showTestAccounts ? "Masquer" : "Afficher"} les comptes de test
            </Button>

            {showTestAccounts && (
              <div className="mt-4 space-y-3">
                <Alert
                  message="Comptes de démonstration"
                  description="Utilisez ces comptes pour tester l'application"
                  type="info"
                  showIcon
                  className="mb-4"
                />
                
                {testAccounts.map((account, index) => (
                  <Card
                    key={index}
                    size="small"
                    className="border border-gray-200 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <CheckCircleOutlined className="text-green-500 mr-2" />
                          <Text strong className="text-gray-900">{account.name}</Text>
                        </div>
                        <Text className="text-gray-600 text-sm">{account.description}</Text>
                        <Text className="text-gray-500 text-xs block mt-1">
                          {account.email}
                        </Text>
                      </div>
                      <Space>
                        <Button
                          size="small"
                          onClick={() => handleTestLogin(account)}
                          className="text-blue-600 border-blue-200 hover:border-blue-400"
                        >
                          Remplir
                        </Button>
                        <Button
                          size="small"
                          type="primary"
                          onClick={() => handleQuickLogin(account)}
                          className="bg-blue-500 border-0 hover:bg-blue-600"
                        >
                          Connexion rapide
                        </Button>
                      </Space>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <Text className="text-gray-500 text-sm">
                © {new Date().getFullYear()} EHC SIRH. Tous droits réservés.
          </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
