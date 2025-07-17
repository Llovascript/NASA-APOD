import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
  Alert
} from 'react-native';
import { router } from 'expo-router';
import { Header } from '../../components/Header';

const { width, height } = Dimensions.get('window');