import { Button, Typography, Row, Col } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const { Title, Paragraph, Text } = Typography

const HeroSection = ({ onShowSignup, onShowLogin }) => {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background pattern */}
      <img
        src="/modern-training-dashboard.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-20 top-10 w-[700px] opacity-10 hidden lg:block"
      />
      <div className="max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Title level={1} className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transformez votre{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gestion RH
            </span>
          </Title>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Paragraph className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            EHC SIRH est la solution complète pour moderniser vos processus de ressources humaines. 
            Simplifiez la gestion des talents, optimisez la formation et améliorez la performance de vos équipes.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="large" 
              type="primary" 
              onClick={onShowSignup}
              className="bg-gradient-to-r from-blue-500 to-purple-600 border-0 hover:from-blue-600 hover:to-purple-700 h-12 px-8 text-lg transition-all duration-300"
            >
              Commencer gratuitement
              <ArrowRightOutlined className="ml-2" />
            </Button>
            <Button 
              size="large" 
              onClick={onShowLogin}
              className="h-12 px-8 text-lg border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              Se connecter
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
