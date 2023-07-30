import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import FullWidthButton from "./components/kids/FullWidthButton";
import PageWrapper from "./base-pages/PageWrapper";
import AppWrapper from "./base-pages/AppWrapper";

import React, { useCallback, useEffect, useState } from "react";

import useFonts from "./hooks/useFonts";
import Splash from "./base-pages/Splash";
import QuestionContextProvider from "./store/questions";
import SettingContextProvider from "./store/settings";

export default function App() {
    return (
        <SettingContextProvider>
            <QuestionContextProvider>
                <AppWrapper />
            </QuestionContextProvider>
        </SettingContextProvider>
    );
}