'use client'
import React, { useState } from 'react';
import Layout from "../../components/layout/Layout"
import Header1 from '../../components/layout/header/Header1';
import Footer1 from '../../components/layout/footer/Footer1';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator, Package, Truck, MapPin, Weight, Ruler, Box, DollarSign, Clock, User, Mail
} from 'lucide-react';
import styled, { createGlobalStyle } from 'styled-components';
import Cta from '../../components/sections/home1/Cta';

const destinations = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'Singapore', 'UAE', 'Netherlands', 'Sweden', 'Switzerland'
];

const shippingRates = {
  'United States': { air: 8.5, sea: 2.3, express: 12.8 },
  'United Kingdom': { air: 7.2, sea: 1.8, express: 11.5 },
  'Canada': { air: 7.8, sea: 2.1, express: 11.9 },
  'Australia': { air: 9.2, sea: 2.8, express: 14.2 },
  'Germany': { air: 6.8, sea: 1.6, express: 10.8 },
  'France': { air: 6.9, sea: 1.7, express: 10.9 },
  'Japan': { air: 8.8, sea: 2.5, express: 13.2 },
  'Singapore': { air: 7.5, sea: 2.2, express: 12.1 },
  'UAE': { air: 8.1, sea: 2.4, express: 12.5 },
  'Netherlands': { air: 6.7, sea: 1.5, express: 10.7 },
  'Sweden': { air: 7.1, sea: 1.9, express: 11.2 },
  'Switzerland': { air: 7.3, sea: 1.8, express: 11.6 }
};

const initialForm = {
  name: '', email: '', destination: '', boxQuantity: '', length: '', width: '', height: '', weight: ''
};

// Add global styles for calculator page only
const CalculatorGlobal = createGlobalStyle`
  body { background: #f6f8fa; }
  .cta-one { margin-top: 56px !important; }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f8fa 0%, #e9eefa 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 0 32px 0;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  background: none;
`;// Hero section improvements
const HeroSection = styled(motion.section)`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto 44px auto;
  background: linear-gradient(120deg, #f6f8fa 60%, #e9eefa 100%);
  border-radius: 32px;
  padding: 56px 0 40px 0;
  box-shadow: 0 8px 40px rgba(193,20,37,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 800px) {
    max-width: 100%;
    padding: 32px 0 18px 0;
    border-radius: 18px;
    margin-bottom: 24px;
  }
`;
const HeroIcon = styled.div`
  background: linear-gradient(135deg, #C11425 0%, #FFC000 100%);
  padding: 32px;
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(193,20,37,0.13);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  color: #C11425;
  margin-bottom: 14px;
  text-align: center;
  letter-spacing: -1px;
  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
`;
const HeroTagline = styled.p`
  color: #FFC000;
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  letter-spacing: 0.04em;
`;
const HeroDesc = styled.p`
  color: #1a2340;
  font-size: 1.13rem;
  text-align: center;
  max-width: 540px;
  margin: 0 auto;
`;
// Accent bar for cards
const AccentBar = styled.div`
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 7px;
  border-radius: 12px 0 0 12px;
  background: linear-gradient(180deg, #C11425 0%, #FFC000 100%);
  @media (max-width: 600px) {
    width: 4px;
    border-radius: 8px 0 0 8px;
  }
`;
// Update FormGrid for better responsiveness
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: flex-start;
  @media (max-width: 1100px) {
    gap: 24px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;
// Card improvements
const Card = styled(motion.div)`
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.09);
  padding: 36px 32px 32px 32px;
  margin-bottom: 32px;
  min-width: 0;
  position: relative;
  overflow: visible;
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-top: 5px solid #C11425;
  @media (max-width: 800px) {
    max-width: 100%;
    padding: 18px 6px 16px 6px;
    border-radius: 14px;
    border-top-width: 4px;
  }
`;
const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;
const TitleRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 12px;
`;
const MainTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: 800;
  color: #1a2340;
  letter-spacing: -1px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
const SubTitle = styled.p`
  color: #5a6a8a;
  font-size: 1.15rem;
  margin: 0;
`;
const FormSection = styled(Card)`
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
`;
const ResultSection = styled(Card)`
  background: linear-gradient(120deg, #f6f8fa 60%, #e9eefa 100%);
  border: 1.5px solid #e3e8f0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #1a2340;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Input = styled.input`
  padding: 16px 18px;
  border-radius: 14px;
  border: 1.5px solid ${props => props.error ? '#ff5a5f' : '#dbe3ef'};
  font-size: 1.08rem;
  background: #f7fafd;
  color: #1a2340;
  outline: none;
  transition: border 0.2s;
  max-width: 100%;
  box-sizing: border-box;
  width: 100%;
  &:focus {
    border-color: #3b82f6;
    background: #f0f6ff;
  }
`;
const Select = styled.select`
  padding: 16px 18px;
  border-radius: 14px;
  border: 1.5px solid ${props => props.error ? '#ff5a5f' : '#dbe3ef'};
  font-size: 1.08rem;
  background: #f7fafd;
  color: #1a2340;
  outline: none;
  transition: border 0.2s;
  max-width: 100%;
  box-sizing: border-box;
  width: 100%;
  &:focus {
    border-color: #3b82f6;
    background: #f0f6ff;
  }
`;
const ErrorMsg = styled.div`
  color: #ff5a5f;
  font-size: 0.92rem;
  margin-top: 2px;
`;
const Button = styled(motion.button)`
  width: 100%;
  padding: 20px 0;
  border-radius: 16px;
  font-size: 1.18rem;
  font-weight: 700;
  background: linear-gradient(90deg, #C11425 0%, #FFC000 100%);
  color: #fff;
  border: none;
  box-shadow: 0 2px 12px rgba(193,20,37,0.08);
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  outline: none;
  &:hover, &:focus {
    background: linear-gradient(90deg, #C11425 0%, #FFC000 80%);
    box-shadow: 0 4px 24px rgba(193,20,37,0.13);
  }
  &:disabled {
    background: #e3e8f0;
    color: #b0b8c9;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
const ResultCard = styled(motion.div)`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  padding: 24px 18px;
  margin-bottom: 18px;
  border: 1.5px solid #e3e8f0;
  @media (max-width: 600px) {
    padding: 16px 6px;
  }
`;
const OptionRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const OptionTitle = styled.div`
  font-weight: 700;
  font-size: 1.13rem;
  color: #1a2340;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const OptionMeta = styled.div`
  font-size: 0.98rem;
  color: #5a6a8a;
  display: flex;
  align-items: center;
  gap: 6px;
`;
const OptionPrice = styled.div`
  text-align: right;
`;
const OptionCost = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #3b82f6;
`;
const OptionPerKg = styled.div`
  font-size: 0.95rem;
  color: #7b8bb7;
`;
const Note = styled.div`
  background: #fffbe6;
  border: 1.5px solid #ffe58f;
  border-radius: 12px;
  padding: 14px 18px;
  color: #b38600;
  font-size: 0.98rem;
  margin-top: 18px;
`;
const Footer = styled.div`
  text-align: center;
  margin-top: 32px;
  color: #7b8bb7;
  font-size: 1.02rem;
`;
// Sticky button on mobile
const StickyButtonWrapper = styled.div`
  @media (max-width: 600px) {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 10;
    padding-bottom: 8px;
    margin-bottom: -8px;
  }
`;
// Subtle background shape
const BgShape = styled.div`
  position: absolute;
  top: -80px;
  right: -120px;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle at 60% 40%, #FFC00033 0%, #fff0 80%);
  z-index: 0;
  pointer-events: none;
  @media (max-width: 600px) {
    width: 180px;
    height: 180px;
    top: -40px;
    right: -60px;
  }
`;
// Responsive grid for dimensions
const DimensionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export default function ShippingCalculatorPage() {
  const [formData, setFormData] = useState(initialForm);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  // Validation
  const errors = {};
  if (!formData.name) errors.name = 'Name is required';
  if (!formData.email) errors.email = 'Email is required';
  if (formData.email && !/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) errors.email = 'Invalid email';
  if (!formData.destination) errors.destination = 'Destination required';
  if (!formData.boxQuantity || formData.boxQuantity <= 0) errors.boxQuantity = 'Enter box quantity';
  ['length', 'width', 'height', 'weight'].forEach(field => {
    if (!formData[field] || formData[field] <= 0) errors[field] = `Enter valid ${field}`;
  });
  const isFormValid = Object.keys(errors).length === 0;

  // Handlers
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  };
  const handleBlur = e => setTouched(t => ({ ...t, [e.target.name]: true }));

  const calculateVolume = () => {
    const { length, width, height } = formData;
    return (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 1000000;
  };

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      const volume = calculateVolume();
      const weight = parseFloat(formData.weight);
      const quantity = parseInt(formData.boxQuantity);
      const destination = formData.destination;
      if (!shippingRates[destination]) {
        setResults({ error: 'Destination not supported' });
        setLoading(false);
        return;
      }
      const rates = shippingRates[destination];
      const totalVolume = volume * quantity;
      const totalWeight = weight * quantity;
      const volumetricWeight = totalVolume * 167;
      const chargeableWeight = Math.max(totalWeight, volumetricWeight);
      const calculations = {
        air: { cost: chargeableWeight * rates.air, days: '5-7', method: 'Air Freight' },
        sea: { cost: chargeableWeight * rates.sea, days: '25-35', method: 'Sea Freight' },
        express: { cost: chargeableWeight * rates.express, days: '2-4', method: 'Express Courier' }
      };
      setResults({
        totalVolume: totalVolume.toFixed(3),
        totalWeight: totalWeight.toFixed(2),
        volumetricWeight: volumetricWeight.toFixed(2),
        chargeableWeight: chargeableWeight.toFixed(2),
        calculations
      });
      setShowSummary(true);
      setLoading(false);
    }, 1200);
  };

  // Animations
  const fade = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 24 } };

  return (
    <Layout>
      <PageWrapper>
        <CalculatorGlobal />
        <Container>
          {/* Hero Section */}
          <HeroSection
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: 'spring' }}
          >
            <BgShape />
            <HeroIcon>
              <Calculator style={{ width: 56, height: 56, color: '#fff', animation: 'spin 3s linear infinite' }} />
            </HeroIcon>
            <HeroTitle>REO Trades Shipping Calculator</HeroTitle>
            <HeroTagline>Instant Global Shipping Estimates</HeroTagline>
            <HeroDesc>
              Calculate your shipping costs from China to anywhere in the world with REO Trades&apos;s trusted logistics expertise. Fast, transparent, and tailored for your business needs.
            </HeroDesc>
          </HeroSection>
          {/* Form Section - centered, wide, with sticky button on mobile */}
          <FormSection {...fade}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a2340', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Package style={{ width: 22, height: 22, color: '#2563eb', animation: 'bounce 1.2s infinite alternate' }} />
              Shipment Details
            </h2>
            <Form onSubmit={e => { e.preventDefault(); handleCalculate(); }}>
              {/* Name */}
              <Field>
                <Label>
                  <User style={{ width: 18, height: 18, color: '#2563eb' }} />
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  error={errors.name && touched.name}
                />
                {errors.name && touched.name && <ErrorMsg>{errors.name}</ErrorMsg>}
              </Field>
              {/* Email */}
              <Field>
                <Label>
                  <Mail style={{ width: 18, height: 18, color: '#2563eb' }} />
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Your Email"
                  error={errors.email && touched.email}
                />
                {errors.email && touched.email && <ErrorMsg>{errors.email}</ErrorMsg>}
              </Field>
              {/* Destination */}
              <Field>
                <Label>
                  <MapPin style={{ width: 18, height: 18, color: '#2563eb' }} />
                  Destination
                </Label>
                <Select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.destination && touched.destination}
                >
                  <option value="">Select Destination</option>
                  {destinations.map(dest => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </Select>
                {errors.destination && touched.destination && <ErrorMsg>{errors.destination}</ErrorMsg>}
              </Field>
              {/* Box Quantity */}
              <Field>
                <Label>
                  <Box style={{ width: 18, height: 18, color: '#2563eb' }} />
                  Box Quantity
                </Label>
                <Input
                  type="number"
                  name="boxQuantity"
                  value={formData.boxQuantity}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Enter number of boxes"
                  error={errors.boxQuantity && touched.boxQuantity}
                />
                {errors.boxQuantity && touched.boxQuantity && <ErrorMsg>{errors.boxQuantity}</ErrorMsg>}
              </Field>
              {/* Dimensions */}
              <DimensionsGrid>
                <Field>
                  <Label>
                    <Ruler style={{ width: 18, height: 18, color: '#2563eb' }} />
                    Length (cm)
                  </Label>
                  <Input
                    type="number"
                    name="length"
                    value={formData.length}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="L"
                    error={errors.length && touched.length}
                  />
                  {errors.length && touched.length && <ErrorMsg>{errors.length}</ErrorMsg>}
                </Field>
                <Field>
                  <Label>Width (cm)</Label>
                  <Input
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="W"
                    error={errors.width && touched.width}
                  />
                  {errors.width && touched.width && <ErrorMsg>{errors.width}</ErrorMsg>}
                </Field>
                <Field>
                  <Label>Height (cm)</Label>
                  <Input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="H"
                    error={errors.height && touched.height}
                  />
                  {errors.height && touched.height && <ErrorMsg>{errors.height}</ErrorMsg>}
                </Field>
              </DimensionsGrid>
              {/* Weight */}
              <Field>
                <Label>
                  <Weight style={{ width: 18, height: 18, color: '#2563eb' }} />
                  Total Box Weight (kg)
                </Label>
                <Input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Enter total weight per box"
                  error={errors.weight && touched.weight}
                />
                {errors.weight && touched.weight && <ErrorMsg>{errors.weight}</ErrorMsg>}
              </Field>
              {/* Calculate Button - sticky on mobile */}
              <StickyButtonWrapper>
                <Button
                  type="submit"
                  disabled={!isFormValid || loading}
                  whileTap={{ scale: 0.97 }}
                >
                  {loading ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 20, height: 20, border: '3px solid #fff', borderTop: '3px solid #3b82f6', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                      Calculating...
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Calculator style={{ width: 20, height: 20 }} />
                      Get Rates
                    </div>
                  )}
                </Button>
              </StickyButtonWrapper>
            </Form>
          </FormSection>
          {/* Results */}
          <AnimatePresence>
            {showSummary && results && (
              <ResultSection
                key="results"
                initial={{ opacity: 0, x: 64 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 64 }}
                transition={{ duration: 0.5, type: 'spring' }}
              >
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a2340', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <DollarSign style={{ width: 22, height: 22, color: '#16a34a' }} />
                  Shipping Rates
                </h2>
                {results.error ? (
                  <div style={{ textAlign: 'center', padding: '48px 0' }}>
                    <div style={{ color: '#ff5a5f', fontSize: '1.1rem' }}>{results.error}</div>
                  </div>
                ) : (
                  <div>
                    {/* Greet user */}
                    <div style={{ color: '#2563eb', fontWeight: 600, fontSize: '1.1rem', marginBottom: 10 }}>
                      Hello, {formData.name}! Here are your shipping options:
                    </div>
                    {/* Summary */}
                    <ResultCard
                      initial={{ opacity: 0, x: 64 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 64 }}
                      transition={{ duration: 0.5, type: 'spring' }}
                    >
                      <h3 style={{ fontWeight: 700, color: '#2563eb', marginBottom: 10 }}>Shipment Summary</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontSize: '1rem' }}>
                        <div>
                          <span style={{ color: '#5a6a8a' }}>Total Volume:</span>
                          <span style={{ fontWeight: 600, marginLeft: 6 }}>{results.totalVolume} m³</span>
                        </div>
                        <div>
                          <span style={{ color: '#5a6a8a' }}>Total Weight:</span>
                          <span style={{ fontWeight: 600, marginLeft: 6 }}>{results.totalWeight} kg</span>
                        </div>
                        <div>
                          <span style={{ color: '#5a6a8a' }}>Volumetric Weight:</span>
                          <span style={{ fontWeight: 600, marginLeft: 6 }}>{results.volumetricWeight} kg</span>
                        </div>
                        <div>
                          <span style={{ color: '#5a6a8a' }}>Chargeable Weight:</span>
                          <span style={{ fontWeight: 600, marginLeft: 6 }}>{results.chargeableWeight} kg</span>
                        </div>
                      </div>
                    </ResultCard>
                    {/* Shipping Options */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {Object.entries(results.calculations).map(([key, option]) => (
                        <ResultCard
                          key={key}
                          whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <OptionRow>
                            <OptionTitle>
                              {key === 'express' && <span style={{ color: '#ef4444' }}>⚡</span>}
                              {key === 'air' && <span style={{ color: '#2563eb' }}>✈️</span>}
                              {key === 'sea' && <span style={{ color: '#16a34a' }}>🚢</span>}
                              {option.method}
                            </OptionTitle>
                            <OptionMeta>
                              <Clock style={{ width: 16, height: 16 }} />
                              {option.days} days
                            </OptionMeta>
                          </OptionRow>
                          <OptionRow>
                            <OptionPrice>
                              <OptionCost>${option.cost.toFixed(2)}</OptionCost>
                              <OptionPerKg>
                                ${(option.cost / parseFloat(results.chargeableWeight)).toFixed(2)}/kg
                              </OptionPerKg>
                            </OptionPrice>
                          </OptionRow>
                        </ResultCard>
                      ))}
                    </div>
                    {/* Note */}
                    <Note>
                      <strong>Note:</strong> Rates are estimates based on standard calculations. Final rates may vary based on specific requirements, seasonal changes, and carrier policies.
                    </Note>
                  </div>
                )}
              </ResultSection>
            )}
          </AnimatePresence>
          {/* CTA Section */}
          <Cta />
          {/* Footer */}
          <Footer>
            <p>REO Trades.biz - Your trusted partner for global sourcing & shipping solutions</p>
          </Footer>
        </Container>
      </PageWrapper>
    </Layout>
  );
} 