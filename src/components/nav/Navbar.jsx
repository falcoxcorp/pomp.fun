import React from 'react';
import { NavLink } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useTranslation } from 'react-i18next';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { admin } from '../../helper/Helper';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { address } = useAccount();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/30 backdrop-blur-xl px-4 overflow-hidden shadow-2xl">
      {/* Efecto de fondo animado */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/20 to-gray-900/95"
        initial={{ opacity: 0.8 }}
        animate={{ 
          opacity: [0.8, 0.95, 0.8],
          background: [
            'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(88, 28, 135, 0.2) 50%, rgba(17, 24, 39, 0.95) 100%)',
            'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(17, 24, 39, 0.95) 100%)',
            'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(17, 24, 39, 0.95) 100%)',
            'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(88, 28, 135, 0.2) 50%, rgba(17, 24, 39, 0.95) 100%)'
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      >
        {/* Partículas de fondo mejoradas */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 3,
              height: Math.random() * 8 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['rgba(168, 85, 247, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(251, 191, 36, 0.3)'][Math.floor(Math.random() * 4)]
              } 0%, transparent 70%)`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 30],
              x: [0, (Math.random() - 0.5) * 30],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Líneas de energía */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px opacity-20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.8), transparent)',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </motion.div>

      <div className="flex justify-between items-center h-[56px] lg:h-[80px] xl:h-[80px] relative z-10">
        {/* Left side: Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="w-12 sm:w-[220px] relative group">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img 
                src="./logo/logo.png" 
                className="logo h-auto max-h-12 sm:max-h-16" 
                alt="logo" 
              />
              {/* Efecto de brillo mejorado */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-40 rounded-full blur-lg transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-all duration-1000" />
              
              {/* Anillo giratorio mejorado */}
              <motion.div 
                className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="w-full h-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full p-[2px]">
                  <div className="w-full h-full bg-transparent rounded-full" />
                </div>
              </motion.div>
              
              {/* Pulso de energía */}
              <motion.div
                className="absolute -inset-4 opacity-0 group-hover:opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="w-full h-full border border-purple-400/50 rounded-full" />
              </motion.div>
            </motion.div>
          </NavLink>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-1 flex justify-center">
          <motion.div 
            className="flex space-x-8 lg:space-x-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <NavLink
              to="/"
              className="text-sm font-semibold font-bold relative group overflow-hidden"
            >
              <motion.span 
                className="text-gold hover:text-amber-300 transition-all duration-300 relative z-10"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {t('board')}
                {/* Línea de subrayado mejorada */}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 transition-all duration-500"
                  whileHover={{ width: "100%" }}
                />
                {/* Efecto de brillo en hover */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.span>
            </NavLink>
            
            <NavLink
              to="/create-token"
              className="text-sm font-semibold font-bold relative group overflow-hidden"
            >
              <motion.span 
                className="text-gold hover:text-amber-300 transition-all duration-300 relative z-10"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {t('createToken')}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 transition-all duration-500"
                  whileHover={{ width: "100%" }}
                />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.span>
            </NavLink>
            
            {address == admin && (
              <NavLink
                to="/admin-panel"
                className="text-sm font-semibold font-bold relative group overflow-hidden"
              >
                <motion.span 
                  className="text-gold hover:text-amber-300 transition-all duration-300 relative z-10"
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {t('Admin')}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 transition-all duration-500"
                    whileHover={{ width: "100%" }}
                  />
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.span>
              </NavLink>
            )}
            
            <NavLink
              to="#"
              className="text-sm font-semibold font-bold relative group overflow-hidden"
            >
              <motion.span 
                className="text-gold hover:text-amber-300 transition-all duration-300 relative z-10"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {t('KYC')}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 transition-all duration-500"
                  whileHover={{ width: "100%" }}
                />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.span>
            </NavLink>
          </motion.div>
        </div>

        {/* Right side: ConnectButton */}
        <motion.div 
          className="connectbuttons flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ConnectButton
            label={t('connect Wallet')}
            accountStatus="address"
            chainStatus="name"
          >
            {({ isConnected, isConnecting }) => {
              return (
                <motion.button
                  whileHover={{ 
                    y: -3, 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`
                    text-sm px-6 py-3 rounded-full focus:ring-2 focus:ring-offset-2 relative overflow-hidden group
                    ${isConnected 
                      ? 'bg-gradient-to-br from-green-600 via-emerald-500 to-green-600 hover:shadow-xl hover:shadow-emerald-500/30' 
                      : 'bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600 hover:shadow-xl hover:shadow-purple-500/30'}
                    text-white transition-all duration-500 border border-white/10
                  `}
                >
                  {/* Efecto de brillo animado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Partículas en el botón */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                  
                  <span className="relative z-10">
                    {isConnecting ? 'Connecting...' : isConnected ? t('walletConnected') : t('connectWallet')}
                  </span>
                </motion.button>
              );
            }}
          </ConnectButton>
        </motion.div>
      </div>
      
      {/* Línea de energía en la parte inferior */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          background: [
            'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.8), transparent)',
            'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
            'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.8), transparent)',
            'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.8), transparent)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </header>
  );
};

export default Navbar;